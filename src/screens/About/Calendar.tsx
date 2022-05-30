import React, { FC } from 'react';
import { View, StyleSheet, ImageBackground, Text, Platform, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CS_COLORS from '../../styles/colors';
import { CS_FONTS } from '../../styles/fonts';

interface CalendarProps {}

export const Calendar: FC<CalendarProps> = ({}) => {
    return( 
    <View style={styles.container}>
        <View style={styles.iconContaier}>
            <Image source={require('../../asset/images/calendar.png')} style={styles.icon}/>
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.date}>Date {'&'} Time</Text>
            <Text style={styles.duration}>15th – 16th Jan</Text>
            <Text style={styles.time}>09:00 – 18:00</Text>

        </View>
    </View>

    )
};

const styles = StyleSheet.create({
    container: {
        width: wp(93),
        height: hp(12),
        backgroundColor: '#fff',
        alignSelf: 'center',
        borderRadius: 12,
        flexDirection:'row',
    },
    iconContaier:{
        width: wp(35),
        height: hp(12),
        alignItems:'center',
        justifyContent:'center'
    },
    textContainer:{
        width: wp(58),
        height: hp(12),
        justifyContent:'center'
    },
    icon:{
        width: wp(15),
        height: hp(8),
    },
    date:{
        fontFamily:CS_FONTS.PoppinsBold,
        color:CS_COLORS.TEXT_DARKBLACK,
        fontWeight:Platform.OS === 'ios' ? '900' : 'bold',
        fontSize:hp(2.5),
        lineHeight:22,
    },
    duration:{
        fontFamily:CS_FONTS.MontserratRegular,
        color:CS_COLORS.TEXT_DARKBLACK,
        fontWeight:Platform.OS === 'ios' ? '600' : 'bold',
        fontSize:hp(2),
        lineHeight:22,
    },
    time:{
        fontFamily:CS_FONTS.MontserratRegular,
        color:CS_COLORS.TEXT_DARKBLACK,
        fontWeight:Platform.OS === 'ios' ? '200' : 'normal',
        fontSize:hp(2),
        lineHeight:22,
        marginTop:3
    }
});
