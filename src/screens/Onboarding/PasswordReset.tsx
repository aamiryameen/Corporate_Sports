import React, { FunctionComponent, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AuthContainer from '../../common/AuthContainer';
import Input from '../../common/TextInput';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import SimpleButton from '../../common/SimpleButton';
import { CS_FONTS } from '../../styles/fonts';
import colors from '../../styles/colors';

interface PasswordResetProps {
    navigation: any;
}

const PasswordReset: React.FC<PasswordResetProps> = ({ navigation }) => {
    const [NewPassword, setNewPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');

    const [secureText, setSecureText] = useState(true);
    const [secureText0, setSecureText0] = useState(true);

    return (
        <AuthContainer>
            <View style={styles.Header}>
                <Text style={styles.HeaderText}>Reset your{'\n'}password here</Text>
                <Text style={styles.Description}>Make sure using the strongest combination{'\n'}for your new password</Text>
            </View>

            <View>
                <Input
                    value={NewPassword}
                    placeholder="New password"
                    secureTextEntry={secureText}
                    onChangeText={(password: string) => setNewPassword(password)}
                    leftIcon={<FontAwesome name="lock" size={25} color={colors.LIGHT_GRAY_ICON} />}
                    leftIconContainerStyle={{ marginHorizontal: '5%' }}
                    rightIcon={
                        secureText ? (
                            <TouchableOpacity onPress={() => setSecureText(!secureText)}>
                                <AntDesign name="eye" size={25} color={colors.LIGHT_GRAY_ICON} />
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity onPress={() => setSecureText(!secureText)}>
                                <AntDesign name="eye" size={25} color={colors.BLACK} />
                            </TouchableOpacity>
                        )
                    }
                    rightIconContainerStyle={{ marginRight: '5%' }}
                />
                <Input
                    value={ConfirmPassword}
                    placeholder="Confirm password"
                    secureTextEntry={secureText0}
                    onChangeText={(password: string) => setConfirmPassword(password)}
                    leftIcon={<FontAwesome name="lock" size={25} color={colors.LIGHT_GRAY_ICON} />}
                    leftIconContainerStyle={{ marginHorizontal: '5%' }}
                    rightIcon={
                        secureText0 ? (
                            <TouchableOpacity onPress={() => setSecureText0(!secureText0)}>
                                <AntDesign name="eye" size={25} color={colors.LIGHT_GRAY_ICON} />
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity onPress={() => setSecureText0(!secureText0)}>
                                <AntDesign name="eye" size={25} color={colors.BLACK} />
                            </TouchableOpacity>
                        )
                    }
                    rightIconContainerStyle={{ marginRight: '5%' }}
                />
            </View>
            <View style={styles.buttonContainer}>
                <SimpleButton
                    // without={false}
                    // loading={isLoading}
                    textStyle={{fontFamily: CS_FONTS.ABeeZeeRegular, fontStyle: 'italic'}}
                    title="Reset my password"
                    onPress={() => navigation.navigate('PRSuccess')}
                />
            </View>
        </AuthContainer>
    );
};

export default PasswordReset;

const styles = StyleSheet.create({
    Header: {
        alignItems: 'center',
        marginTop: 36,
        marginBottom: 32,
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
        fontStyle: 'italic',
        fontSize: 16,
        lineHeight: 24,
        color: colors.TEXT_LIGHT,
        textAlign: 'center'
    },
    buttonContainer: {
        marginTop: '5%'
    }
});
