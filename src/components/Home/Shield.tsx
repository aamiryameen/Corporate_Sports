import React, { FC } from 'react';
import { View, StyleSheet, Image, Text, Platform } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import CS_COLORS from '../../styles/colors';
import { CS_FONTS } from '../../styles/fonts';
const Shield: FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require('../../asset/images/ShieldHeader.png')} style={styles.shieldImage} />
            </View>

            <View style={styles.shield}>
                <View style={styles.shieldImageContainer}>
                    <Image source={require('../../asset/images/logo.png')} style={styles.shieldLogo} />
                </View>
                <View style={styles.shieldTextContainer}>
                    <Text style={styles.shieldText}>Shield of{'\n'}Excellence</Text>
                </View>
            </View>

            <View style={styles.teamContainer}>
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

export default Shield;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E0E0E0',
        height: hp(51),
        width: wp('94%'),
        alignSelf: 'center',
        flexDirection: 'column',
        borderRadius: 12,
        marginTop: 21
    },
    imageContainer: {
        backgroundColor: '#E0E0E0',
        height: hp(25),
        width: wp('93%'),
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    shieldImage: {
        height: hp(25),
        width: wp('93%'),
        resizeMode: 'stretch',
        marginLeft: 7,
        flexDirection: 'row'
    },
    shield: {
        backgroundColor: '#E0E0E0',
        height: hp(15),
        width: wp('93%'),
        alignItems: 'center',
        // justifyContent:'center',
        borderRadius: 12,
        flexDirection: 'row'
    },
    shieldImageContainer: {
        width: wp('30%'),
        height: hp(15),
        alignItems: 'center'
        // justifyContent: ''
    },
    shieldLogo: {
        resizeMode: 'contain',
        width: wp(25),
        height: hp(15),
        marginTop: 15
    },

    shieldText: {
        fontFamily: CS_FONTS.MontserratBold,
        color: '#838383',
        fontSize: hp(3),
        fontWeight: Platform.OS === 'ios' ? '900' : 'bold'
    },
    team0: {
        width: wp(70),
        padding: 13,
        flexDirection: 'column'
    },
    team: {
        fontFamily: CS_FONTS.MontserratRegular,
        color: CS_COLORS.TEXT_DARKBLACK,
        fontSize: 15,

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
    },
    gameName: {
        fontFamily: CS_FONTS.MontserratBold,
        color: CS_COLORS.TEXT_DARKBLACK,
        fontSize: 18,
        // fontWeight: Platform.OS === 'ios' ? '700' : 'bold',
        marginLeft: 6
    },
    shieldTextContainer: {
        width: wp('65%'),
        height: hp(15),
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10
    },
    teamContainer: {
        width: wp(90),
        height: hp(10),
        backgroundColor: CS_COLORS.WHITE,
        borderRadius: 12,
        flexDirection: 'row',
        alignSelf: 'center'
    },
    iconLogoContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconLogoContainer0: {
        width: wp(16),
        alignItems: 'center',
        justifyContent: 'center'
    }
});
