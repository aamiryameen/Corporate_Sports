import React, { FC } from 'react';
import { View, StyleSheet, ImageBackground, Text, Platform, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

interface CalendarProps {}

export const Calendar: FC<CalendarProps> = ({}) => {
    return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
    container: {
        width: wp(93),
        height: hp(12),
        backgroundColor: '#fff',
        alignSelf: 'center',
        borderRadius: 12
    }
});
