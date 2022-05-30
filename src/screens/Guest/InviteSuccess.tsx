import React, { FunctionComponent, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import AuthContainer from '../../common/AuthContainer';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { CS_FONTS } from '../../styles/fonts';
import colors from '../../styles/colors';
import InviteButton from '../../common/InviteButton';

interface InviteSuccessProps {
    navigation: any;
}

const InviteSuccess: React.FC<InviteSuccessProps> = ({ navigation }) => {
    return (
        <AuthContainer>
            <View style={styles.Header}>
                <Text style={styles.Description}>
                    Thanks will inform{'\n'}you once your{'\n'}company join CS{' '}
                </Text>
            </View>

            <View style={styles.buttonContainer}>
                <InviteButton
                    // without={false}
                    // loading={isLoading}
                    title="Continue as Guest"
                    onPress={() => navigation.navigate('GuestAbout')}
                />
            </View>
        </AuthContainer>
    );
};

export default InviteSuccess;

const styles = StyleSheet.create({
    Header: {
        alignItems: 'center',
        marginTop: hp(15),
        marginBottom: hp(4),
        justifyContent: 'center'
    },
    Description: {
        fontFamily: CS_FONTS.MontserratRegular,
        fontWeight: Platform.OS === 'ios' ? '400' : 'bold',
        fontSize: hp(3),
        lineHeight: hp(4),
        color: colors.TEXT_BLACK,
        textAlign: 'center'
    },
    buttonContainer: {
        marginTop: hp(8)
    }
});
