import React, { useState, FC } from "react";
import { StyleSheet,Platform, Text, TouchableOpacity } from 'react-native';
import CS_COLORS from "../../styles/colors";
import { CS_FONTS } from "../../styles/fonts";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

interface ButtonProps {
    title:String
    onPress:()=>void,
    style?: any
}

export const Button: React.FC<ButtonProps> = ({title, onPress, style}) => {
        return (
            <TouchableOpacity style={{...styles.button, ...style}} onPress={onPress} >
                <Text style={styles.title}>
                    {title}
                </Text>
            </TouchableOpacity>
        );
}
const styles = StyleSheet.create({
    button:{
        backgroundColor:CS_COLORS.SECONDARY,
        width:wp(93),
        height:hp(7),
        borderRadius:12,
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        fontFamily:CS_FONTS.MontserratRegular,
        color:CS_COLORS.WHITE,
        fontWeight:Platform.OS === 'ios' ? '900' : 'bold',
        fontSize:hp(2),
        lineHeight:22,
    },
});