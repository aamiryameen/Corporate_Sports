import React, { FC } from 'react';
import { View, StyleSheet, ImageBackground, Text, Platform, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CS_COLORS from '../styles/colors';
import { CS_FONTS } from '../styles/fonts';

interface EventDurationProps {
    title: String;
    duration: String;
    time: String;
}

export const EventDuration: FC<EventDurationProps> = ({ title, duration, time }) => {
    return (
        <View style={styles.container}>
            <View style={styles.iconContaier}>
                <Image source={require('../asset/images/calendar.png')} style={styles.icon} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.date}>{title}</Text>
                <Text style={styles.duration}>{duration}</Text>
                <Text style={styles.time}>{time}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: wp(93),
        height: hp(12),
        backgroundColor: '#fff',
        alignSelf: 'center',
        borderRadius: 12,
        flexDirection: 'row',
        marginBottom: 10
    },
    iconContaier: {
        width: wp(30),
        height: hp(12),
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        width: wp(63),
        height: hp(12),
        justifyContent: 'center'
    },
    icon: {
        width:wp(14),
        height: hp(7)
    },
    date: {
        fontFamily: CS_FONTS.MontserratExtraBold,
        color: CS_COLORS.TEXT_DARKBLACK,
        fontSize: hp(2.5),
        lineHeight: 22
    },
    duration: {
        fontFamily: CS_FONTS.MontserratBold,
        color: CS_COLORS.TEXT_DARKBLACK,
        fontSize: hp(2),
        lineHeight: 22
    },
    time: {
        fontFamily: CS_FONTS.MontserratBold,
        color: CS_COLORS.SECONDARY,
        fontSize: hp(2),
        lineHeight: 22,
        marginTop: 3
    }
});
