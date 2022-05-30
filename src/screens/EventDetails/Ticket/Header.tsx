import { Entypo } from '@expo/vector-icons';
import React, { FC } from 'react';
import { View, StyleSheet, Image, Text, Platform, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { EventDuration } from '../../../common/EventDuration';
import { InfoHeader } from '../../../common/InfoHeader';
import CS_COLORS from '../../../styles/colors';
import { CS_FONTS } from '../../../styles/fonts';
import { TicketQRCode } from './TicketQRCode';

interface HeaderProps {
    title: String;
    navigation: any;
    showBackButton: Boolean;
}

export const Header: React.FC<HeaderProps> = ({ title, navigation, showBackButton }) => {
    return (
        <View style={styles.container}>
            {showBackButton && (
                <TouchableOpacity style={{ width: wp(8), alignItems: 'center' }} onPress={() => navigation.navigate('EventsHome')}>
                    <Entypo size={24} color={'#fff'} name={'cross'} />
                </TouchableOpacity>
            )}
            <View style={{ width: wp(80), alignItems: 'center', justifyContent: 'center' }}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        width: wp(93),
        height: 60,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center'
    },
    title: {
        fontFamily: CS_FONTS.MontserratRegular,
        color: CS_COLORS.WHITE,
        fontSize: hp(2),
        fontWeight: Platform.OS === 'ios' ? '900' : 'bold'
    }
});
