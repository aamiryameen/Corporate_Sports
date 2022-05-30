import React, { FunctionComponent } from 'react';
import { View, StyleSheet, ImageBackground, Text, Platform, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CS_COLORS from '../../styles/colors';
import { CS_FONTS } from '../../styles/fonts';
import { GAMES_ICON } from '../../Utils/constants';

const TopContainer: FunctionComponent = () => {
   
    return (
        <View style={styles.container}>
            <View style={styles.container0}>
                <View style={styles.container0_0}>
                    <ImageBackground
                        source={require('../../asset/images/About.png')}
                        style={{ height: hp(30), width: wp(94) }}
                        imageStyle={{ borderTopLeftRadius: 12, borderTopRightRadius: 12, resizeMode: 'stretch' }}
                    ></ImageBackground>

                    <Text style={styles.title}>Winter{'\n'}Tournament</Text>
                    <View style={styles.sportsContainer}>
                        <Text style={styles.sports}>Sports:</Text>
                        {GAMES_ICON.map((data) => {
                            console.log(data);
                            return (
                                <View>
                                    <Image source={data.image} style={styles.icons} />
                                </View>
                            );
                        })}
                    </View>
                </View>
            </View>
            <View style={styles.container1}>
                <View style={styles.team0}>
                    <Text style={styles.team}>Team</Text>
                    <View style={styles.iconLogoContainer}>
                        <Image source={require('../../asset/images/sp3.png')} style={styles.gameLogo} />
                        <Text style={styles.gameName}>Du Football 1.0</Text>
                    </View>
                </View>
                <View style={styles.iconLogoContainer0}>
                    <Image source={require('../../asset/images/alfa.png')} style={styles.alfa} />
                </View>
            </View>
        </View>
    );
};

export default TopContainer;
const styles = StyleSheet.create({
    container: {
        height: hp(69),
        width: wp(100)
    },
    container0: {
        height: hp(62),
        width: wp(100),
        backgroundColor: '#15B5D0',
        justifyContent: 'center',
        // paddingTop:hp(4),
        borderRadius: 12
    },
    container0_0: {
        height: hp(49),
        width: wp(94),
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        alignSelf: 'center'
    },
    container1: {
        width: wp(94),
        height: hp(9),
        backgroundColor: CS_COLORS.WHITE,
        borderRadius: 12,
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: -hp(4)
    },
    title: {
        fontFamily: CS_FONTS.MontserratBold,
        color: CS_COLORS.TEXT_DARKBLACK,
        fontSize: hp(3.5),
        fontWeight: Platform.OS === 'ios' ? '800' : 'bold',
        marginLeft: wp(7),
        marginTop: hp(2)
    },
    sports: {
        fontFamily: CS_FONTS.MontserratRegular,
        color: CS_COLORS.TEXT_DARKBLACK,
        fontSize: hp(2),
        fontWeight: Platform.OS === 'ios' ? '600' : 'bold'
    },
    sportsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: wp(7)
    },
    icons: {
        height: hp(8),
        width: wp(10),
        resizeMode: 'contain',
        marginLeft: 7
    },
    team0: {
        width: wp(75),
        padding: 13,
        flexDirection: 'column'
    },
    team: {
        fontFamily: CS_FONTS.MontserratBold,
        color: CS_COLORS.TEXT_DARKBLACK,
        fontSize: hp(1.5),
        fontWeight: '400'
    },

    iconLogoContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconLogoContainer0: {
        width: wp(16),
        alignItems: 'center',
        justifyContent: 'center'
    },
    gameName: {
        fontFamily: CS_FONTS.MontserratBold,
        color: CS_COLORS.TEXT_DARKBLACK,
        fontSize: hp(2.2),
        fontWeight: Platform.OS === 'ios' ? '700' : 'bold',
        marginLeft: 6
    },
    alfa: {
        resizeMode: 'contain',
        width: wp(12),
        height: hp(7)
    },
    gameLogo: {
        resizeMode: 'contain',
        width: wp(6),
        height: hp(4)
    }
});
