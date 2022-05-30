import React, { FC } from 'react';
import { View, StyleSheet, Image, Text, Platform, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CS_COLORS from '../../styles/colors';

import { CS_FONTS } from '../../styles/fonts';

import { GAMES_ICON } from '../../utils/constants';

interface HeaderProps {
    navigation: any;
}

const Header: React.FC<HeaderProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.detail}>
                <Text style={styles.player}>Player</Text>

                <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                        <Image source={require('../../asset/images/profilePicture.png')} style={{ height: 40, width: 40, resizeMode: 'contain' }} />
                        <Text style={styles.name}>Ala Sharaf</Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.playsContainer}>
                    <Text style={styles.plays}>Plays:</Text>
                    {GAMES_ICON.map((data, index) => {
                        return (
                            <View key={index}>
                                <Image source={data.image} style={styles.icons} />
                            </View>
                        );
                    })}
                </View>
            </View>
            <View style={styles.iconContainer}>
                <Image source={require('../../asset/images/alfa.png')} style={styles.image} />
            </View>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        backgroundColor: CS_COLORS.WHITE,
        height: hp(16),
        width: wp('95%'),
        alignSelf: 'center',
        flexDirection: 'row',
        borderRadius: 12,
        marginTop: 10
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
        marginHorizontal: 10
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
    icons: {
        height: hp(5),
        width: wp(6),
        resizeMode: 'contain',
        marginLeft: 7
    }
});
