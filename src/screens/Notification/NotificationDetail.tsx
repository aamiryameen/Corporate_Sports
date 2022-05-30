import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { CS_FONTS } from '../../styles/fonts';
import CS_COLORS from '../../styles/colors';

interface NotificationDetailProps {}

export const NotificationDetail: React.FC<NotificationDetailProps> = ({}) => {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.cardText}>We’re gearing up for the long-awaited Corporate Sports Championship of 2021.</Text>
                <Image source={require('../../asset/images/notification.png')} style={styles.image} />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        width: wp('90%'),
        height: hp('55%'),
        borderRadius: 12,
        alignSelf: 'center',
        marginTop: 10,
        // borderWidth: 0.7,
        borderColor: 'lightgrey',
        backgroundColor: CS_COLORS.WHITE
    },
    cardText: {
        padding: 20,
        width: wp('75%'),
        lineHeight: 20,
        fontSize: 16,
        color: '#A3A3A3',
        fontFamily: CS_FONTS.MontserratBold
    },
    image: {
        height: hp(40),
        width: wp('85%'),
        resizeMode: 'stretch',
        alignSelf: 'center'
    }
});
