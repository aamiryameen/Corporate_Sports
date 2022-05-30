import React, { FC, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import SportsContainer from '../../common/SportsContainer';
import SimpleButton from '../../common/SimpleButton';

import colors from '../../styles/colors';
import { CS_FONTS } from '../../styles/fonts';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { SPORTS_LIST } from '../../utils/constants';

interface SportsListProps {
    navigation: any;
}

const SportsList: FC<SportsListProps> = ({ navigation }) => {
    const [slectedItem, SetSlected] = useState([]);
    const [data, setData] = useState<any>(SPORTS_LIST);

    useEffect(() => {}, [slectedItem, data]);

    const selectItem = (id: any) => {
        let flatListData = [...data];
        for (let item of flatListData) {
            if (item.id == id) {
                item.isSelected = item.isSelected == null ? true : !item.isSelected;
                break;
            }
        }
        SetSlected(flatListData);
    };

    const renderSeparator = () => {
        return <View style={{ height: hp(2) }} />;
    };

    const renderListView = (index: any, item: any) => {
        return (
            <TouchableOpacity style={styles.ListContainer} onPress={() => selectItem(item.id)}>
                <View style={styles.ImageContainer}>
                    <Image source={item.image} style={styles.image} />
                </View>
                <View style={styles.tab}>
                    <View style={styles.TitleContainer}>
                        <Text style={styles.title}>{item.title}</Text>
                    </View>
                    <View style={styles.SelectInfo}>
                        {item.isSelected ? (
                            <View style={styles.SelectedView}>
                                <AntDesign name="check" size={hp(3)} color={'#fff'} backgroundColor={'orange'} />
                            </View>
                        ) : (
                            <AntDesign name="check" size={hp(3)} color={colors.BLACK} />
                        )}
                    </View>
                </View>
            </TouchableOpacity>
        );
    };
    return (
        <SportsContainer>
            <View style={styles.Header}>
                <Text style={styles.HeaderText}>Pick your favorite{'\n'}sports</Text>
            </View>

            <FlatList
                data={data}
                keyExtractor={(item, index) => (index + 1).toString()}
                ItemSeparatorComponent={renderSeparator}
                overScrollMode='never'
                showsVerticalScrollIndicator={false}
                renderItem={({ index, item }) => renderListView(index, item)}
            />

            <View style={styles.buttonContainer}>
                <SimpleButton
                    // without={false}
                    // loading={isLoading}
                    fontFamily={CS_FONTS.ABeeZeeItalic}
                    title="Save"
                    onPress={() => navigation.navigate('TabNavigator')}
                />
            </View>
        </SportsContainer>
    );
};

export default SportsList;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    },

    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    Header: {
        alignItems: 'center',
        marginTop: hp(5),
        marginBottom: hp(5),
        justifyContent: 'center'
    },
    HeaderText: {
        fontFamily: CS_FONTS.MontserratMedium,
        fontWeight: '500',
        fontSize: hp(3),
        lineHeight: hp(4),
        color: '#121212',
        textAlign: 'center'
    },
    buttonContainer: {
        marginBottom: hp(2)
    },
    ListContainer: {
        width: wp('95%'),
        height: hp(7),
        backgroundColor: 'transparent',
        alignSelf: 'center',
        borderRadius: 16,
        flexDirection: 'row'
    },
    tab: {
        width: wp('75%'),
        height: hp(7),
        backgroundColor: '#E3E3E3',
        alignSelf: 'center',
        borderRadius: 16,
        flexDirection: 'row'
    },
    ImageContainer: {
        width: wp('20%'),
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        height: 34,
        width: 34
    },
    TitleContainer: {
        width: '80%',
        paddingLeft: 18,
        justifyContent: 'center'
    },
    title: {
        fontFamily: CS_FONTS.ABeeZeeRegular,
        fontWeight: '500',
        fontSize: hp(1.8),
        lineHeight: 33,
        color: '#3C434A'
    },
    SelectInfo: {
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    SelectedView: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: colors.PRIMARY,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
