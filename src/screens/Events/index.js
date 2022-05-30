import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { View, Text, Image, ImageBackground, ScrollView, TouchableOpacity, ActivityIndicator, StyleSheet, FlatList } from 'react-native';
import styles from './style';
import Logo from '../../assets/svg/logo.svg';
import { Icon, FilterModal, FilterByCompaniesModal, FilterBySportsModal, Button, HeaderRight, UpdateResult } from '../../components';
import themeStyle from '../../assets/styles/theme.style';
import { route } from '../../lib/utils/constants';
import { AuthService } from '../../services';
import { getLocalData, LOCAL_STORAGE_KEYS } from '../../lib/utils/localstorage';
import FastImage from 'react-native-fast-image';
import moment from 'moment';
import RNPickerSelect from 'react-native-picker-select';
import Loader from '../../components/Loader/Loader';
function ResultsScreen(props) {
    const [filterModal, setFilterModal] = useState(false);
    const [companyModal, setCompanyModal] = useState(false);
    const [sportModal, setSportModal] = useState(false);
    const [companyData, setCompanyData] = useState([]);
    const [sportData, setSportData] = useState([]);
    const [tabView, setView] = useState(0);
    const [sportCount, setSportCount] = useState(0);
    const [companyCount, setCompanyCount] = useState(0);
    const [expanded, setExpanded] = useState(false);
    const [resultsData, setResultsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sportRanking, setSportRanking] = useState([]);
    const [sportId, setSportID] = useState([]);
    const [rankingData, setRankingData] = useState([]);
    const [updateResultModal, setUpdateResultModal] = useState(false);
    const [companyItem, setCompanyItem] = useState(null);
    const [companyIndex, setCompanyIndex] = useState(null);
    const [teamOneScore, setTeamOneScore] = useState('');
    const [teamTwoScore, setTeamTwoScore] = useState('');
    const [userData, setUserData] = useState(null);
    const inputRefs = useRef(null);
    useLayoutEffect(() => {
        getHeader();
        return () => {
            console.log('This will be logged on unmount');
        };
    });

    const getHeader = async () => {
        let data = await getLocalData(LOCAL_STORAGE_KEYS.user_id);
        let userData = JSON.parse(data);
        props.navigation.setOptions({
            headerRight: () => headerRight(userData),
            headerTitle: tabView == 1 ? 'Ranking' : 'Results'
        });
    };
    const headerRight = (userData) => {
        return (
            <HeaderRight
                navigation={props.navigation}
                qr={true}
                data={userData}
                onPressQr={() => props.navigation?.navigate(route.TICKETSCREEN, { inApp: true })}
                onPressSetting={() => props.navigation?.navigate(route.SETTINGS)}
                setting={true}
            />
        );
    };
    useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', async () => {
            let data = await getLocalData(LOCAL_STORAGE_KEYS.user_id);
            console.log('userData : ', userData);
            let userData = JSON.parse(data);
            console.log('userData : ', userData);
            setUserData(userData);
            setLoading(false);
        });
        getCompanies();
        getSports();
        getResults();
        // Return the function to unsubscribe from the event so it gets removed on unmount
        return unsubscribe;
    }, [props?.navigation]);

    const handleGetRanks = (value) => {
        setLoading(true);
        let formData = new FormData();
        formData.append('sport_id', value);
        AuthService.getRanking(formData)
            .then((response) => {
                console.log(response.data.data);
                setRankingData(response.data.data);
                setExpanded(false);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    };

    const getCompanies = () => {
        AuthService.getCompanies()
            .then((res) => {
                console.log(res.data);
                let data = [...res.data.data];
                let array = [];
                data.map((item, index) => {
                    array.push({ ...item, selected: false });
                });
                setCompanyData(array);
            })
            .catch((err) => {
                console.log(err.response);
                setLoading(false);
            });
    };

    const getResults = () => {
        AuthService.getResults()
            .then((res) => {
                console.log('res.data : ', res.data.data);
                setResultsData(res.data.data);
                AuthService.getRanking()
                    .then((response) => {
                        console.log(response.data.data);
                        setRankingData(response.data.data);
                        setLoading(false);
                    })
                    .catch((err) => {
                        console.log('err : ', err);
                        setLoading(false);
                    });
            })
            .catch((err) => {
                console.log(err.response);
                setLoading(false);
            });
    };

    const getSports = () => {
        AuthService.getSports()
            .then((res) => {
                console.log(res.data);
                let data = [...res.data.data];
                let array = [];
                data.map((item, index) => {
                    array.push({ ...item, selected: false });
                });
                setSportData(array);
                let arrayRanking = [];
                arrayRanking.push({ label: 'All', value: '' });
                data.map((item, index) => {
                    arrayRanking.push({ label: item.post_title, value: item.ID });
                });
                setSportRanking(arrayRanking);
            })
            .catch((err) => {
                console.log(err.response);
                setLoading(false);
            });
    };

    useEffect(() => {}, [filterModal, tabView, expanded, rankingData, sportRanking, sportId, resultsData, companyModal, sportModal, companyData, sportData]);

    const handleApply = () => {
        setLoading(true);
        setFilterModal(false);
        let formData = new FormData();
        companyData.map((item, index) => {
            if (item.selected) {
                formData.append('companies[]', item.ID);
            }
        });
        sportData.map((item, index) => {
            if (item.selected) {
                formData.append('sports[]', item.ID);
            }
        });
        console.log(formData.length);
        if (formData) {
            AuthService.getResults(formData)
                .then((res) => {
                    console.log('res.data', res.data);
                    setResultsData(res.data.data);
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err.response);
                    setLoading(false);
                });
        } else {
            AuthService.getResults()
                .then((res) => {
                    console.log('res.data', res.data);
                    setResultsData(res.data.data);
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                    setLoading(false);
                });
        }
    };

    const placeholder = {
        label: 'Select sport',
        value: null,
        color: '#9EA0A4'
    };

    const localData = async () => {
        let data = await getLocalData(LOCAL_STORAGE_KEYS.user_id);
        let userData = JSON.parse(data);
        return userData;
    };

    const handleUpdate = async () => {
        setLoading(true);
        let fdata = {
            ...companyItem,
            team_one: {
                ...companyItem.team_one,
                score: teamOneScore
            },
            team_two: {
                ...companyItem.team_two,
                score: teamTwoScore
            }
        };

        let formData = new FormData();
        formData.append('match_id', companyItem.ID);
        formData.append('team_1_result', teamOneScore);
        formData.append('team_2_result', teamTwoScore);
        let data = await getLocalData(LOCAL_STORAGE_KEYS.user_id);
        let userData = JSON.parse(data);
        AuthService.updateResult(formData, userData.token)
            .then((resp) => resp.json())
            .then((res) => {
                console.log('res.data : ', res);
                getResults();
                setCompanyItem(null);
                setCompanyIndex(null);
                setUpdateResultModal(false);
                setTeamOneScore('');
                setTeamTwoScore('');
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return loading ? (
        <Loader />
    ) : (
        <View style={styles.container}>
            <>
                {tabView == 0 ? (
                    <>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <TouchableOpacity onPress={() => setFilterModal(true)} style={styles.filterContainer}>
                                <Icon.Feather name={'filter'} size={25} color={themeStyle.COLOR_BLACK} />
                                <View style={{ ...styles.headingContainer }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={styles.filterText1}>Filter</Text>
                                        <Text style={styles.filterText}>Find results by company or sports. </Text>
                                    </View>
                                    <View style={{ marginRight: 5 }}>
                                        <Icon.FontAwesome name={'angle-right'} size={30} color={themeStyle.COLOR_GREY} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            {resultsData.length == 0 ? (
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={styles.filterText1}>No Record Found</Text>
                                </View>
                            ) : (
                                <ScrollView contentContainerStyle={{ paddingBottom: '30%' }}>
                                    <FlatList
                                        data={resultsData}
                                        renderItem={({ item, index }) => {
                                            return (
                                                <View style={styles.imageContainer}>
                                                    <Text style={styles.headingText1}>
                                                        PITCH {item.pitch_name} - {moment(item.date).format('HH.MM')}
                                                    </Text>
                                                    <Text style={{ ...styles.headingText1, marginHorizontal: '5%' }}>{item.sport_name}</Text>
                                                    <View style={styles.rowContainer}>
                                                        <View style={{ flex: 0.3 }}>
                                                            {item.team_one.winner == true && item.team_two.winner == false ? (
                                                                <>
                                                                    <ImageBackground
                                                                        resizeMode="cover"
                                                                        source={require('../../assets/images/rightwin.png')}
                                                                        style={{
                                                                            position: 'absolute',
                                                                            height: 200,
                                                                            width: 250,
                                                                            justifyContent: 'center',
                                                                            alignItems: 'center',
                                                                            top: -60,
                                                                            left: -20,
                                                                            bottom: 0
                                                                        }}
                                                                    ></ImageBackground>
                                                                    <FastImage
                                                                        resizeMode="stretch"
                                                                        source={{ uri: item.team_one.image }}
                                                                        style={{ height: 100, width: 100, borderRadius: 25, overflow: 'hidden' }}
                                                                    />
                                                                </>
                                                            ) : (
                                                                <FastImage
                                                                    resizeMode="stretch"
                                                                    source={{ uri: item.team_one.image }}
                                                                    style={{ height: 100, width: 100, borderRadius: 25, overflow: 'hidden' }}
                                                                />
                                                            )}
                                                            {/* <ImageBackground source={require('../../assets/images/bg-winner.png')} style={{ height: 200, width: "100%", justifyContent: "center", alignItems: "center" }}>
                                                            <FastImage resizeMode='stretch' source={{ uri: item.team_one.image }} style={{ height: 100, width: 100, borderRadius: 25, overflow: "hidden" }} />
                                                        </ImageBackground> */}
                                                        </View>

                                                        <View style={{ flex: 0.4 }}>
                                                            <Text style={styles.headingText1}>vs</Text>
                                                        </View>
                                                        <View style={{ flex: 0.3 }}>
                                                            {item.team_two.winner == true && item.team_one.winner == false ? (
                                                                <>
                                                                    <ImageBackground
                                                                        resizeMode="cover"
                                                                        source={require('../../assets/images/leftwin.png')}
                                                                        style={{
                                                                            position: 'absolute',
                                                                            height: 200,
                                                                            width: 250,
                                                                            justifyContent: 'center',
                                                                            alignItems: 'center',
                                                                            top: -60,
                                                                            right: -20,
                                                                            bottom: 0
                                                                        }}
                                                                    ></ImageBackground>
                                                                    <FastImage
                                                                        resizeMode="stretch"
                                                                        source={{ uri: item.team_two.image }}
                                                                        style={{ height: 100, width: 100, borderRadius: 25, overflow: 'hidden' }}
                                                                    />
                                                                </>
                                                            ) : (
                                                                <FastImage
                                                                    resizeMode="stretch"
                                                                    source={{ uri: item.team_two.image }}
                                                                    style={{ height: 100, width: 100, borderRadius: 25, overflow: 'hidden' }}
                                                                />
                                                            )}
                                                            {/* <ImageBackground source={require('../../assets/images/bg-winner.png')} style={{ height: 200, width: "100%", justifyContent: "center", alignItems: "center" }}>
                                                            <FastImage resizeMode='stretch' source={{ uri: item.team_two.image }} style={{ height: 100, width: 100, borderRadius: 25, overflow: "hidden" }} />
                                                        </ImageBackground> */}
                                                        </View>
                                                    </View>
                                                    <View style={styles.rowContainer}>
                                                        <TouchableOpacity
                                                            disabled={userData?.token ? false : true}
                                                            onPress={() => {
                                                                setTeamOneScore(item.team_one.score);
                                                                setTeamTwoScore(item.team_two.score);
                                                                setCompanyItem(item);
                                                                setCompanyIndex(index);
                                                                setUpdateResultModal(true);
                                                            }}
                                                            style={styles.scoreContainer}
                                                        >
                                                            <Text style={styles.headingText1}>{item.team_one.score}</Text>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity
                                                            onPress={() => {
                                                                setTeamOneScore(item.team_one.score);
                                                                setTeamTwoScore(item.team_two.score);
                                                                setCompanyItem(item);
                                                                setCompanyIndex(index);
                                                                setUpdateResultModal(true);
                                                            }}
                                                            disabled={userData?.token ? false : true}
                                                            style={styles.scoreContainer}
                                                        >
                                                            <Text style={styles.headingText1}>{item.team_two.score}</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            );
                                        }}
                                    />
                                </ScrollView>
                            )}
                        </ScrollView>
                        <View activeOpacity={0.7} style={styles.touchableOpacityStyle}>
                            <Button
                                color
                                title={'Ranking'}
                                onPress={() => {
                                    setView(1);
                                }}
                            />
                        </View>
                    </>
                ) : null}
                {tabView == 1 ? (
                    <View style={expanded ? { backgroundColor: '#fff', flex: 1 } : {}}>
                        <ScrollView contentContainerStyle={{ paddingBottom: '35%' }}>
                            <View style={{ margin: '5%', backgroundColor: '#fff' }}>
                                <RNPickerSelect
                                    placeholder={placeholder}
                                    items={sportRanking}
                                    onValueChange={(value) => {
                                        console.log(value);
                                        setSportID(value);
                                        handleGetRanks(value);
                                    }}
                                    onUpArrow={() => {
                                        inputRefs.current.focus();
                                    }}
                                    onDownArrow={() => {
                                        inputRefs.current.togglePicker();
                                    }}
                                    // style={pickerSelectStyles}
                                    value={sportId}
                                    style={{
                                        textStyle: {
                                            fontFamily: themeStyle.FONT_REGULAR
                                        },
                                        ...pickerSelectStyles,
                                        iconContainer: {
                                            top: '15%',
                                            right: 12
                                        }
                                    }}
                                    textInputProps={{ fontFamily: themeStyle.FONT_REGULAR }}
                                    useNativeAndroidPickerStyle={false}
                                    Icon={() => {
                                        return <Icon.FontAwesome name="angle-down" size={35} color={'lightgray'} />;
                                    }}
                                    ref={inputRefs}
                                />
                            </View>
                            {expanded ? (
                                <View style={{ flex: 1, backgroundColor: '#fff', paddingHorizontal: '5%', paddingBottom: '10%' }}>
                                    {rankingData.length == 0 ? (
                                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={styles.filterText1}>No Record Found</Text>
                                        </View>
                                    ) : (
                                        rankingData.map((item, index) => {
                                            return (
                                                <View style={styles.rowContainer}>
                                                    <View style={styles.itemContainer}>
                                                        <FastImage resizeMode="contain" source={{ uri: item?.image }} style={{ height: 100, width: 100 }} />
                                                    </View>
                                                    <View style={styles.scoreContainer1}>
                                                        <Text style={styles.headingText2}>{item?.points} Points</Text>
                                                    </View>
                                                </View>
                                            );
                                        })
                                    )}
                                </View>
                            ) : rankingData.length == 0 ? (
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={styles.filterText1}>No Record Found</Text>
                                </View>
                            ) : (
                                <View style={styles.imageContainer}>
                                    <Text style={styles.headingText3}>Top 3</Text>

                                    {rankingData.map((item, index) => {
                                        return index > 2 ? null : (
                                            <View style={styles.rowContainer}>
                                                <View style={styles.itemContainer}>
                                                    <FastImage resizeMode="contain" source={{ uri: item?.image }} style={{ height: 100, width: 100 }} />
                                                </View>
                                                <View style={styles.scoreContainer1}>
                                                    <Text style={styles.headingText2}>{item?.points} Points</Text>
                                                </View>
                                            </View>
                                        );
                                    })}
                                    {rankingData.length > 3 ? (
                                        <View style={{ marginTop: '5%' }}>
                                            <Button color title="View All" onPress={() => setExpanded(true)} />
                                        </View>
                                    ) : null}
                                </View>
                            )}
                        </ScrollView>
                        {expanded ? (
                            <View activeOpacity={0.7} style={styles.touchableOpacityStyle}>
                                <Button
                                    color
                                    title={'Back'}
                                    onPress={() => {
                                        setView(0);
                                        setExpanded(false);
                                    }}
                                />
                            </View>
                        ) : (
                            <View activeOpacity={0.7} style={styles.touchableOpacityStyle}>
                                <Button
                                    color
                                    title={'Results'}
                                    onPress={() => {
                                        setView(0);
                                    }}
                                />
                            </View>
                        )}
                    </View>
                ) : null}
            </>
            <FilterModal
                visible={filterModal}
                companyData={companyData}
                sportData={sportData}
                sportCount={sportCount}
                companyCount={companyCount}
                onCompanies={() => {
                    setFilterModal(false);
                    setCompanyModal(true);
                }}
                onSport={() => {
                    setFilterModal(false);
                    setSportModal(true);
                }}
                onContinue={() => {
                    let array = [...companyData];
                    array.map((item, index) => {
                        array[index] = { ...array[index], selected: false };
                    });
                    setCompanyData(array);
                    let arraySport = [...sportData];
                    arraySport.map((item, index) => {
                        arraySport[index] = { ...arraySport[index], selected: false };
                    });
                    setSportData(arraySport);
                    setFilterModal(false);
                }}
                onClearFilter={() => {
                    let array = [...companyData];
                    array.map((item, index) => {
                        array[index] = { ...array[index], selected: false };
                    });

                    let arraySport = [...sportData];
                    arraySport.map((item, index) => {
                        arraySport[index] = { ...arraySport[index], selected: false };
                    });
                    setCompanyData(array);
                    setCompanyCount(0);
                    setSportCount(0);
                    setSportData(arraySport);
                    setLoading(true);
                    setFilterModal(false);
                    getResults();
                }}
                onApply={() => handleApply()}
            />
            <FilterByCompaniesModal
                visible={companyModal}
                companyData={companyData}
                setCompanyData={(array) => setCompanyData(array)}
                onApply={() => {
                    setCompanyModal(false);
                    setFilterModal(true);
                }}
                companyCount={companyCount}
                updateCompanyCount={(count) => setCompanyCount(count)}
                onContinue={() => {
                    let array = [...companyData];
                    array.map((item, index) => {
                        array[index] = { ...array[index], selected: false };
                    });
                    setCompanyCount(0);
                    setCompanyData(array);
                    setCompanyModal(false);
                    setFilterModal(true);
                }}
            />
            <FilterBySportsModal
                companyData={sportData}
                setCompanyData={(array) => setSportData(array)}
                visible={sportModal}
                onApply={() => {
                    setSportModal(false);
                    setFilterModal(true);
                }}
                sportCount={sportCount}
                updateSportCount={(count) => setSportCount(count)}
                onContinue={() => {
                    let array = [...sportData];
                    array.map((item, index) => {
                        array[index] = { ...array[index], selected: false };
                    });
                    setSportCount(0);
                    setSportData(array);
                    setSportModal(false);
                    setFilterModal(true);
                }}
            />

            <UpdateResult
                visible={updateResultModal}
                data={companyItem}
                companyIndex={companyIndex}
                teamOneScore={teamOneScore}
                teamTwoScore={teamTwoScore}
                onCross={() => {
                    setCompanyItem(null);
                    setCompanyIndex(null);
                    setTeamOneScore('');
                    setTeamTwoScore('');
                    setUpdateResultModal(false);
                }}
                onSave={() => handleUpdate()}
                setTeamOneScore={(text) => {
                    setTeamOneScore(text);
                }}
                setTeamTwoScore={(text) => {
                    setTeamTwoScore(text);
                }}
            />
        </View>
    );
}
const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        fontFamily: themeStyle.FONT_REGULAR,
        color: 'rgba(60, 60, 67, 0.6)',
        paddingRight: 30 // to ensure the text is never behind the icon
    },
    inputAndroid: {
        // marginTop: "5%",
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        fontFamily: themeStyle.FONT_REGULAR,
        color: 'rgba(60, 60, 67, 0.6)',
        paddingRight: 30 // to ensure the text is never behind the icon
    }
});

export default ResultsScreen;
