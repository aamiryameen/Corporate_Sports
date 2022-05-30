import React, { FC } from 'react';
import { View, StyleSheet, Text, Platform, Image, FlatList, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CS_COLORS from '../../styles/colors';
import { CS_FONTS } from '../../styles/fonts';
import { COMPANIES } from '../../utils/constants';
interface LocationProps {}

export const Location: FC<LocationProps> = ({}) => {
    return (
        <>
            <Text style={styles.location}>Location</Text>

            <View style={styles.container}>
                <Image source={require('../../asset/images/location.png')} style={styles.image} />

                <Text style={styles.title}>Just Padel</Text>
                <Text style={styles.description}>Mina Rashid, Dubai</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonTitle}>Get Direction</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        width: wp(93),
        alignSelf: 'center',
        flexDirection: 'column',
        height: hp(60),
        backgroundColor: CS_COLORS.WHITE,
        borderRadius: 12
    },
    location: {
        fontFamily: CS_FONTS.MontserratBold,
        color: CS_COLORS.TEXT_DARKBLACK,
        fontWeight: Platform.OS === 'ios' ? '900' : 'bold',
        fontSize: hp(3),
        lineHeight: hp(5),
        marginTop: hp(4),
        marginLeft:wp(3.5),
        marginBottom:hp(1.2)
    },
    image: {
        width: wp(93),
        height: hp(35),
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12
    },
    title: {
        fontFamily: CS_FONTS.MontserratBold,
        color: CS_COLORS.TEXT_DARKBLACK,
        fontWeight: Platform.OS === 'ios' ? '900' : 'bold',
        fontSize: hp(4),
        lineHeight: hp(4),
        marginTop: hp(4),
        marginLeft: wp(5)
    },
    description: {
        fontFamily: CS_FONTS.MontserratBold,
        color: CS_COLORS.TEXT_DARKBLACK,
        fontWeight: Platform.OS === 'ios' ? '600' : 'normal',
        fontSize: hp(2.5),
        lineHeight: hp(5),
        marginLeft: wp(5)
    },
    button: {
        width: wp(88),
        height: hp(7),
        backgroundColor: CS_COLORS.SECONDARY,
        borderRadius: 12,
        marginTop: hp(2.2),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    buttonTitle: {
        fontFamily: CS_FONTS.MontserratBold,
        color: CS_COLORS.WHITE,
        fontWeight: Platform.OS === 'ios' ? '600' : 'normal',
        fontSize: hp(2.1),
        lineHeight: hp(5),
        marginLeft: wp(5)
    }
});
