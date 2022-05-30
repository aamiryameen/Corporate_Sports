import React, { FC } from 'react';
import { View, StyleSheet, Image, Text, Platform } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CS_COLORS from '../../styles/colors';
import { CS_FONTS } from '../../styles/fonts';

const Goals: FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Image source={require('../../asset/images/sp3.png')} style={styles.gameImage} />
            </View>
            <View style={styles.details}>
                <Text style={styles.goal}>150</Text>
                <Text style={styles.goal0}>Goals</Text>
            </View>
        </View>
    );
};

export default Goals;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E0E0E0',
        height: hp(20),
        width: wp('94%'),
        alignSelf: 'center',
        flexDirection: 'row',
        borderRadius: 12,
        marginTop: 21
    },
    iconContainer: {
        backgroundColor: '#E0E0E0',
        height: hp(20),
        width: wp('40%'),
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    details: {
        backgroundColor: '#E0E0E0',
        height: hp(20),
        width: wp('50%'),
        alignItems: 'center',
        borderRadius: 12
    },
    image: {
        resizeMode: 'contain',
        height: hp(15),
        width: wp(20)
    },
    player: {
        fontFamily: CS_FONTS.MontserratRegular,
        color: CS_COLORS.TEXT_DARKBLACK,
        fontSize: hp(2.2)
    },
    goal: {
        fontFamily: CS_FONTS.MontserratExtraBold,
        color: CS_COLORS.PRIMARY,
        fontSize: hp(9),

        marginTop: 15
    },
    goal0: {
        fontFamily: CS_FONTS.MontserratExtraBold,
        color: CS_COLORS.BLACK,
        fontSize: hp(3),

        marginTop: -12
    },
    plays: {
        fontFamily: CS_FONTS.MontserratRegular,
        color: CS_COLORS.TEXT_DARKBLACK,
        fontSize: hp(2),
        fontWeight: Platform.OS === 'ios' ? '600' : 'bold'
    },
    playsContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    gameImage: {
        height: hp(12),
        width: wp(20),
        resizeMode: 'contain',
        marginLeft: 7
    }
});
