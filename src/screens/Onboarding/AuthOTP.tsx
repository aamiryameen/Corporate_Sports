import React, { FC, useState } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import AuthContainer from '../../common/AuthContainer';
import SimpleButton from '../../common/SimpleButton';
import OTPTextView from 'react-native-otp-textinput';
import colors from '../../styles/colors';
import { CS_FONTS } from '../../styles/fonts';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

interface AuthOTPProps {
    title: string;
    navigation: any;
}
const AuthOTP: FC<AuthOTPProps> = ({ navigation }) => {
    const [otpInput, setOtp] = useState('');

    return (
        <AuthContainer>
            <View style={styles.Header}>
                <Text style={styles.Title}>Enter 4-digit{'\n'}Verification code</Text>
                <Text style={styles.Description}>
                    Code send to <Text style={{ fontWeight: 'bold' }}>alaa@viwell.com</Text>
                    {'\n'}
                    This code will expired in
                    <Text style={styles.Time}> 01:30</Text>
                </Text>
            </View>
            <View style={styles.OTPContainer}>
                <OTPTextView handleTextChange={(e: any) => setOtp(e)} containerStyle={styles.textInputContainer} textInputStyle={styles.roundedTextInput} tintColor="#333333" offTintColor="#333333" />
            </View>
            <View style={styles.TextContainer}>
                <Text style={styles.Text0}>
                    Don’t received the code?
                    <Text style={styles.Text1}> Resend{'\n'}Code</Text>
                </Text>
            </View>

            <View style={styles.buttonContainer}>
                <SimpleButton title="Login Now" onPress={() => navigation.navigate('UserSetup')} />
            </View>
        </AuthContainer>
    );
};

export default AuthOTP;

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 0
    },
    textInputContainer: {
        marginBottom: 0,
        color: colors.WHITE
    },
    roundedTextInput: {
        borderRadius: 10,
        borderBottomWidth: 0,
        backgroundColor: colors.INPUT_BACKGROUND,
        color: colors.WHITE
    },
    Header: {
        alignItems: 'center',
        marginTop: hp(5),
        marginBottom: hp(2.5),
        justifyContent: 'center'
    },
    Title: {
        fontFamily: CS_FONTS.MontserratRegular,
        fontWeight: Platform.OS === 'ios' ? '500' : 'normal',
        fontSize: hp(2.8),
        lineHeight: 25,
        color: colors.TEXT_BLACK,
        textAlign: 'center'
    },
    Description: {
        fontFamily: CS_FONTS.MontserratRegular,
        fontWeight: '500',
        fontSize: hp(1.8),
        lineHeight: 24,
        color: colors.TEXT_LIGHT,
        textAlign: 'center',
        marginTop: hp(1.5)
    },
    Time: {
        fontFamily: CS_FONTS.MontserratRegular,
        fontWeight: Platform.OS === 'ios' ? '500' : 'bold',
        fontSize: 16,
        lineHeight: 24,
        color: '#E37C00',
        textAlign: 'center',
        marginTop: 12
    },
    TextContainer: {
        alignItems: 'center',
        marginTop: 23,
        marginBottom: 23,
        justifyContent: 'center'
    },
    Text0: {
        fontFamily: CS_FONTS.MontserratRegular,
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 24,
        color: colors.TEXT_LIGHT,
        textAlign: 'center'
    },
    Text1: {
        fontFamily: CS_FONTS.MontserratRegular,
        fontWeight: Platform.OS === 'ios' ? '700' : 'bold',
        fontSize: 14,
        lineHeight: 24,
        color: colors.PRIMARY,
        textAlign: 'center'
    },
    OTPContainer: {
        width: '80%',
        alignSelf: 'center',
        height: hp(10),
      
    }
});
