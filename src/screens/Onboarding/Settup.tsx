import React, { FC, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AuthContainer from '../../common/AuthContainer';
import Input from '../../common/TextInput';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import SimpleButton from '../../common/SimpleButton';
import colors from '../../styles/colors';
import { CS_FONTS } from '../../styles/fonts';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

interface SettupProps {
    navigation: any;
}

const Settup: FC<SettupProps> = ({ navigation }) => {
    const [name, setName] = useState<any>();
    const [password, setPassword] = useState('');
    const [conpassword, setConPassword] = useState('');
    const [secureText, setSecureText] = useState(true);
    const [secureText0, setSecureText0] = useState(true);
    const [rememberMe, setRememberMe] = useState(false);
    // const [loading, setLoading] = useState(false);
    // const [visibleModal, setVisibleModal] = useState();
    // const [errors, setErrors] = useState({ email: '', password: '', conpassword: '' });
    // const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {}, [secureText, rememberMe]);
    return (
        <AuthContainer>
            <View style={styles.HeaderContainer}>
                <Text style={styles.HeaderText}>
                    Welcome to CS App!{'\n'}Let’s setup your{'\n'}account.
                </Text>
            </View>
            <Input
                value={name}
                placeholder="Your name"
                onChangeText={(name: string) => setName(name)}
                leftIcon={<FontAwesome name="user" size={25} color="#BDBDBD" />}
                leftIconContainerStyle={{ marginHorizontal: '5%' }}
            />
            {/* {errors.email ? <Text style={styles.errorStyle}>{errors.email} </Text> : null} */}

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
            <>
                <Input
                    value={conpassword}
                    placeholder="Confirm Password"
                    secureTextEntry={secureText0}
                    onChangeText={(conpassword: string) => setConPassword(conpassword)}
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
                {/* {errors.password ? <Text style={styles.errorStyle}>{errors.password} </Text> : null} */}
            </>

            <View style={styles.buttonContainer}>
                <SimpleButton title="Save" onPress={() => navigation.navigate('EmailLogin')} fontFamily={CS_FONTS.ABeeZeeItalic} />
                {/* {visibleModal && showMessag()} */}
            </View>
        </AuthContainer>
    );
};

export default Settup;

const styles = StyleSheet.create({
    HeaderContainer: {
        alignItems: 'center',
        marginTop: hp(5),
        marginBottom: hp(3),
        justifyContent: 'center'
    },
    HeaderText: {
        fontFamily: CS_FONTS.ABeeZeeRegular,
        fontWeight: '500',
        fontSize: hp(2.5),
        lineHeight: 21,
        color: colors.TEXT_BLACK,
        textAlign: 'center'
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    forgotPassword: {
        color: colors.PRIMARY,
        fontSize: 15,
        fontFamily: CS_FONTS.ABeeZeeRegular,
        textAlign: 'left'
        // fontWeight:"600"
    },
    buttonContainer: {
        marginTop: '2%'
    }
});
