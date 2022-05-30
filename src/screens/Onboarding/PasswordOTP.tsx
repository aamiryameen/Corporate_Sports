import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import AuthContainer from '../../common/AuthContainer';
import { CS_FONTS } from '../../styles/fonts';
import colors from '../../styles/colors';
import OTPInputView from '@twotalltotems/react-native-otp-input';

interface PasswordOTPProps {
    navigation: any;
}

const PasswordOTP: React.FC<PasswordOTPProps> = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [otpInput, setOtp] = useState('');
    return (
        <AuthContainer>
            <View style={styles.Header}>
                <Text style={styles.HeaderText}>Enter 4-digit{'\n'}Verification code</Text>
                <Text style={styles.Description}>
                    Code send to +971282045****{'\n'}This code will expired in <Text style={styles.Time}>01:30</Text>
                </Text>
            </View>
            <View style={styles.OTPContainer}>
                <OTPInputView
                    style={styles.textInputContainer}
                    pinCount={4}
                    code={otpInput}
                    onCodeChanged={(code) => {
                        setOtp(code);
                    }}
                    autoFocusOnLoad={false}
                    onCodeFilled={() => navigation.navigate('PasswordReset')}
                    codeInputFieldStyle={styles.roundedTextInput}
                    placeholderTextColor={'#333333'}
                />
            </View>

            <View style={styles.TextContainer}>
                <Text style={styles.Text0}>
                    Don’t received the code?
                    <Text style={styles.Text1}> Resend Code</Text>
                </Text>
            </View>
        </AuthContainer>
    );
};

export default PasswordOTP;

const styles = StyleSheet.create({
    Header: {
        alignItems: 'center',
        marginTop: 36,
        marginBottom: 37,
        justifyContent: 'center'
    },
    HeaderText: {
        fontFamily: CS_FONTS.ABeeZeeRegular,
        fontStyle: 'italic',
        fontSize: 24,
        lineHeight: 33,
        color: colors.TEXT_BLACK,
        textAlign: 'center'
    },
    Description: {
        fontFamily: CS_FONTS.ABeeZeeRegular,
        fontWeight: '500',
        // fontStyle: 'italic',
        fontSize: 16,
        lineHeight: 33,
        color: colors.TEXT_LIGHT,
        textAlign: 'center'
    },
    buttonContainer: {
        marginTop: '5%'
    },
    OTPContainer: {
        width: '80%',
        alignSelf: 'center',
        height: 70
    },
    textInputContainer: {
        marginBottom: 0,
        color: '#fff'
    },
    roundedTextInput: {
        borderRadius: 16,
        borderBottomWidth: 0,
        backgroundColor: '#838383',
        color: '#fff',
        height: 65,
        width: 60,
        fontSize: 20
    },
    Time: {
        fontFamily: CS_FONTS.ABeeZeeRegular,
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 24,
        color: colors.PRIMARY,
        textAlign: 'center'
    },
    TextContainer: {
        alignItems: 'center',
        marginTop: 23,
        marginBottom: 23,
        justifyContent: 'center'
    },
    Text0: {
        fontFamily: CS_FONTS.PoppinsRegular,
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 24,
        color: colors.TEXT_LIGHT,
        textAlign: 'center'
    },
    Text1: {
        fontFamily: CS_FONTS.PoppinsBlack,
        fontWeight: '700',
        fontSize: 14,
        lineHeight: 24,
        color: colors.PRIMARY,
        textAlign: 'center'
    }
});
