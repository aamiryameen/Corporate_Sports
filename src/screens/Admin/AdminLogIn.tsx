import React, { FC, useState } from 'react';
import { View, StyleSheet, Image, Text, Platform, TouchableOpacity, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CS_COLORS from '../../styles/colors';
import { CS_FONTS } from '../../styles/fonts';
import { AntDesign, Entypo,FontAwesome } from '@expo/vector-icons';
import Input from './Input';
import {Header} from './Header';
import AdminButton from './AdminButton';

interface AdminLogInProps {

}

export const AdminLogIn: React.FC<AdminLogInProps> = ({}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState('');
    const [secureText, setSecureText] = useState(true);
    const [rememberMe, setRememberMe] = useState(false);


    return (
        <View style={{paddingHorizontal:10, backgroundColor:CS_COLORS.WHITE, flex:1}}>
            <Header title={'Admin'} />
            <Text style={styles.title}>Admin login</Text>

            <View style={{ marginTop: hp(5)}}>
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
                    leftIcon={<FontAwesome name="lock" size={25} color={CS_COLORS.LIGHT_GRAY_ICON} />}
                    leftIconContainerStyle={{ marginHorizontal: '5%' }}
                    // rightIcon={
                    //     secureText ? (
                    //         <TouchableOpacity onPress={() => setSecureText(!secureText)}>
                    //             <AntDesign name="eye" size={25} color={CS_COLORS.LIGHT_GRAY_ICON} />
                    //         </TouchableOpacity>
                    //     ) : (
                    //         <TouchableOpacity onPress={() => setSecureText(!secureText)}>
                    //             <AntDesign name="eye" size={25} color={CS_COLORS.BLACK} />
                    //         </TouchableOpacity>
                    //     )
                    // }
                    // rightIconContainerStyle={{ marginRight: '5%' }}
                />
            </>
            <AdminButton   without={false} title={'Continue'}  />

            <View style={styles.buttonContainer}>

            </View>
            </View>
    );
};


const styles = StyleSheet.create({
    Description: {
        fontFamily: CS_FONTS.MontserratRegular,
        fontWeight: '500',
        fontSize: hp(2),
        lineHeight: 24,
        color: CS_COLORS.BLACK,
        textAlign: 'center',
        marginTop: 12
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    forgotPassword: {
        color: CS_COLORS.PRIMARY,
        fontSize: hp(2),
        fontFamily: CS_FONTS.MontserratRegular
    },
    buttonContainer: {
        marginTop: '8%',
        backgroundColor:'#000'
    },
    title: {
        fontFamily: CS_FONTS.MontserratBold,
        color: CS_COLORS.TEXT_DARKBLACK,
        fontSize: hp(4),
        fontWeight: Platform.OS === 'ios' ? '400' : 'normal',
        marginLeft: 6,
        marginTop:hp(4),
        marginBottom: hp(6)
    },
   
});
