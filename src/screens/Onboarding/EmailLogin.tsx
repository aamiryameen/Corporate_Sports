import React, { FC, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, ViewStyle } from 'react-native';
import Input from '../../common/TextInput';
import { FontAwesome, Entypo, AntDesign } from '@expo/vector-icons';
import IconButton from '../../common/IconButton';
import LogoContainer from '../../common/LogoContainer';
import CheckBox from '../../common/ChackBox';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../../styles/colors';
import { CS_FONTS } from '../../styles/fonts';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import InputScrollView from 'react-native-input-scroll-view';

interface EmailLoginProps {
    navigation: any;
}

const EmailLogin: FC<EmailLoginProps> = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState('');
    const [secureText, setSecureText] = useState(true);
    const [rememberMe, setRememberMe] = useState(false);

    const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;

    useEffect(() => {}, [secureText, rememberMe]);

    return (
        <InputScrollView  showsVerticalScrollIndicator={false}  overScrollMode="never" >
        <LogoContainer >
            
                <View style={{ marginTop: hp(2), }}>
                    <Input
                        value={email}
                        placeholder="Corporate Email address"
                        onChangeText={(email: string) => {}}
                        leftIcon={<Entypo name="mail" size={25} color="#BDBDBD" />}
                        leftIconContainerStyle={{ marginHorizontal: '5%' }}
                    />
                    {/* {errors.email ? <Text style={styles.errorStyle}>{errors.email} </Text> : null} */}
                </View>
                <>
                    <Input
                        value={password}
                        placeholder="Password"
                        secureTextEntry={secureText}
                        onChangeText={(password: string) => setPassword(password)}
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
                    {/* {errors.password ? <Text style={styles.errorStyle}>{errors.password} </Text> : null} */}
                </>
                <View style={styles.rowContainer}>
                    <CheckBox value={rememberMe} onPress={() => setRememberMe(!rememberMe)} title="Remember Me" />
                    <TouchableOpacity onPress={() => navigation.navigate('PasswordRecover')}>
                        <Text style={styles.forgotPassword}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <IconButton style={{ marginTop: 0 }} email title="Continue with email" onPress={() => navigation.navigate('SportsList')} />
                </View>
            
        </LogoContainer>
     </InputScrollView>
    );
};

export default EmailLogin;

const styles = StyleSheet.create({
    Description: {
        fontFamily: CS_FONTS.MontserratRegular,
        fontWeight: '500',
        fontSize: hp(2),
        lineHeight: 24,
        color: colors.BLACK, 
        textAlign: 'center',
        marginTop: 10
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    forgotPassword: {
        color: colors.PRIMARY,
        fontSize: hp(2),
        fontFamily: CS_FONTS.MontserratRegular
    },
    buttonContainer: {
        marginTop: hp(3)
    }
});
