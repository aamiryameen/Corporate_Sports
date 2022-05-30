import React, { FC } from 'react';
import { View, StyleSheet, Image, Text, Platform } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CS_COLORS from '../styles/colors';

import { CS_FONTS } from '../styles/fonts';

import { GAMES_ICON } from '../utils/constants';
import { normalizeX } from '../utils/utils';


interface InfoHeaderProps {

}

export const InfoHeader: React.FC<InfoHeaderProps> = ({}) => {
  
    return (
        <View style={styles.container}>
            <View style={styles.detail}>
                <Text style={styles.player}>Player</Text>
                <Text style={styles.name}>Ala Sharaf</Text>
                <Text style={styles.plays}>Team</Text>
            
                            <View style={styles.dataContainer}>
                                <Image source={require('../asset/images/sp3.png')} style={styles.icons} />
                                <Text style={styles.footballText}>Du Football  1.0</Text>
                               
                            </View>
            </View>
            <View style={styles.iconContainer}>
                <Image source={require('../asset/images/alfa.png')} style={styles.image} />
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: CS_COLORS.WHITE,
        height: hp(19),
        width: wp('95%'),
        alignSelf: 'center',
        flexDirection: 'row',
        borderRadius: 12
    },
    detail: {
        backgroundColor: CS_COLORS.WHITE,
        height: hp(16),
        width: wp('65%'),
        borderRadius: 12,
        paddingLeft: 15,
        paddingTop: 13
    },
    iconContainer: {
        backgroundColor: CS_COLORS.WHITE,
        height: hp(16),
        width: wp('30%'),
        alignItems: 'center',
        justifyContent: 'center',
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
    name: {
        fontFamily: CS_FONTS.MontserratExtraBold,
        color: CS_COLORS.TEXT_DARKBLACK,
        fontSize: hp(4),
    },
    plays: {
        fontFamily: CS_FONTS.MontserratRegular,
        color: CS_COLORS.TEXT_DARKBLACK,
        fontSize: 15,
    },
    playsContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icons: {
        height: hp(5),
        width: wp(6),
        resizeMode: 'contain',
        marginLeft: 7
    },
    dataContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: normalizeX(-5)
    },
    footballText: {
        marginLeft: normalizeX(7),
        fontFamily: CS_FONTS.MontserratBold,
        fontSize: 18
    }
});
