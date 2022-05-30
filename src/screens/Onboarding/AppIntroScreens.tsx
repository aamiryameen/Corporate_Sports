import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import INTRO_1 from '../../asset/images/logo.png';
import INTRO_2 from '../../asset/images/intro_1.png';
import INTRO_3 from '../../asset/images/intro_2.png';
import INTRO_4 from '../../asset/images/intro_3.png';
import * as Animatable from 'react-native-animatable';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import SimpleButton from '../../common/SimpleButton';
import CS_COLORS from '../../styles/colors';
import { CS_FONTS, FontSizes, FontWeights } from '../../styles/fonts';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../styles';
import { LOCAL_STORAGE_KEYS, storeLocalData } from '../../config/storage';

type MyProps = {
    // using `interface` is also ok
    navigation: any;
};
type MyState = {
    currentPostIndex: any; // like this
    data: any;
};
class AppIntroScreen extends React.Component<MyProps, MyState> {
    state: MyState = {
        // optional second annotation for better type inference
        currentPostIndex: 0,
        data: [
            {
                image: INTRO_1,
                title: 'Bringing Wellbeing to the Workplace',
                desc: null
            },
            {
                image: INTRO_2,
                title: 'Sports events',
                desc: 'We organize single or multi-sports, industry or company-specific, indoor, or outdoor tournaments, all year round.'
            },
            {
                image: INTRO_3,
                title: 'Weekly Practice',
                desc: 'Our weekly sessions help to build the habit of exercise, elevate skills, and enhance overall enjoyment.'
            },
            {
                image: INTRO_4,
                title: 'One-Day Events',
                desc: 'one-day events have the power to energize your employees, boost brand awareness, and highlight your agenda.'
            }
        ]
    };
    scroll: React.RefObject<ScrollView> = React.createRef();

    setSliderPage = (event: any) => {
        const { currentPostIndex } = this.state;
        const x = event.nativeEvent.contentOffset;
        const indexOfNextScreen = Math.floor(x.x / Math.floor(SCREEN_WIDTH));
        if (indexOfNextScreen !== currentPostIndex) {
            this.setState({
                currentPostIndex: indexOfNextScreen
            });
        }
    };

    handleNext = () => {
        const { currentPostIndex, data } = this.state;
        this.setState(
            {
                currentPostIndex: currentPostIndex + 1
            },
            () => {
                if (this.scroll !== null && this.scroll.current !== null) {
                    this.scroll.current.scrollTo({ x: SCREEN_WIDTH * this.state.currentPostIndex });
                }
            }
        );
    };

    handleSkipNow = () => {
        storeLocalData(LOCAL_STORAGE_KEYS.APP_INTRO, JSON.stringify(true));
        this.props.navigation.replace('Auth');
    };
    handleSignNow = () => {
        const { navigate } = this.props.navigation;
        storeLocalData(LOCAL_STORAGE_KEYS.APP_INTRO, JSON.stringify(true));
        this.props.navigation.navigate('Welcome');
    };

    render() {
        const { currentPostIndex, data } = this.state;

        return (
            <View style={styles.container}>
                <View style={styles.skipContainer}>
                    <Text onPress={() => this.handleSkipNow()} style={styles.body}>
                        Skip
                    </Text>
                </View>
                <ScrollView
                overScrollMode='never'
                    horizontal={true}
                    scrollEventThrottle={16}
                    scrollEnabled={false}
                    pagingEnabled={true}
                    contentContainerStyle={{}}
                    showsHorizontalScrollIndicator={false}
                    ref={this.scroll}
                    // onScroll={(event) => this.setSliderPage(event)}
                    style={{ flex: 1 }}
                >
                    {data.map((item: any, index: any) => {
                        return (
                            <View key={index} style={styles.contentContainer}>
                                <View style={index === 0 ? styles.firstSvgContainer : styles.svgContainer}>
                                    <Image source={item.image} style={index === 0 ? styles.firstImageStyle : styles.imageStyle} />
                                </View>
                                {index !== 0 && (
                                    <View style={styles.paginationWrapper}>
                                        {Array.from(Array(data?.length).keys()).map((key, index) => (
                                            <View
                                                style={[
                                                    currentPostIndex === index ? styles.paginationDash : styles.paginationDots,
                                                    {
                                                        opacity: currentPostIndex === index ? 1 : 0.6,
                                                        backgroundColor: currentPostIndex === index ? CS_COLORS.PRIMARY : CS_COLORS.BLACK,
                                                        marginLeft: index == 0 ? 0 : 6
                                                    }
                                                ]}
                                                key={index}
                                            />
                                        ))}
                                    </View>
                                )}
                                <View style={index === 0 ? styles.firstTextContainer : styles.textContainer}>
                                    <Text style={index === 0 ? styles.firstHeading : styles.heading}>{item.title}</Text>
                                    {item.desc && <Text style={styles.item}>{item.desc}</Text>}
                                </View>
                            </View>
                        );
                    })}
                </ScrollView>
                {currentPostIndex == 0 || currentPostIndex <= 2 ? (
                    <View style={styles.buttonContainer}>
                        <SimpleButton without={false} title="Next" onPress={() => this.handleNext()} />
                    </View>
                ) : (
                    <View style={styles.buttonContainer}>
                        <SimpleButton fontFamily={CS_FONTS.MontserratBold} without={false} title="Start" onPress={() => this.handleSignNow()} />
                    </View>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: CS_COLORS.WHITE
    },
    contentContainer: {
        paddingTop: '2.5%',
        height: hp('100%'), // 70% of height device screen
        width: wp('100%'), // 80% of width device screen
        justifyContent: 'center'
    },
    svgContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    firstSvgContainer: {
        marginHorizontal: '5%'
    },
    topContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    dashContiner: {
        flex: 0.1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageStyle: {
        resizeMode: 'contain',
        height: 150,
        width: 150
    },
    firstImageStyle: {
        resizeMode: 'contain',
        height: 100,
        width: 100
    },
    paginationWrapper: {
        marginTop: '40%',
        marginVertical: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    paginationDash: {
        height: 10,
        width: 30,
        borderRadius: 24 / 2
    },
    paginationDots: {
        height: 10,
        width: 10,
        borderRadius: 24 / 2
    },
    textContainer: {
        // marginTop: "10%",
        marginHorizontal: '5%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    firstTextContainer: {
        // marginTop: "10%",
        marginHorizontal: '5%'
    },
    buttonContainer: {
        marginHorizontal: '5%',
        marginBottom: '5%'
    },
    skipContainer: {
        marginTop: '5%',
        marginRight: '5%',
        alignSelf: 'flex-end'
    },
    heading: {
        fontFamily: CS_FONTS.MontserratBold,
        color: 'black',
        // fontSize: hp('3.25%'),
        fontSize: 24
    },
    firstHeading: {
        fontFamily: CS_FONTS.MontserratExtraBold,
        color: 'black',
        lineHeight: 55,
        fontSize: 38,
        width: '70%',
        marginTop: 15,
        marginHorizontal: 10
    },
    body: {
        ...FontWeights.Light,
        ...FontSizes.Body,
        textTransform: 'capitalize'
    },
    item: {
        fontFamily: 'ABeeZee-Regular',
        color: '#828282',
        fontSize: 15,
        marginTop: 10,
        textAlign: 'center',
        marginHorizontal: '5%'
    }
});

export default AppIntroScreen;
