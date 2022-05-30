import React, { FC } from 'react';
import { View, StyleSheet,  Text, Platform, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CS_COLORS from '../../styles/colors';
import { CS_FONTS } from '../../styles/fonts';
interface DescriptionProps {
title:String
description:String
}

export const Description: FC<DescriptionProps> = ({description, title}) => {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        );
}

const styles = StyleSheet.create({
    container:{
        width:wp(93),
        alignSelf:'center'
    },
    title: {
        fontFamily: CS_FONTS.MontserratExtraBold,
        color: CS_COLORS.TEXT_DARKBLACK,
        fontWeight: Platform.OS === 'ios' ? '900' : 'bold',
        fontSize: hp(3),
        lineHeight: hp(5),
        marginTop: hp(5),
    },
    description:{
        fontFamily: CS_FONTS.MontserratBold,
        color: CS_COLORS.INPUT_BACKGROUND,
        fontWeight: Platform.OS === 'ios' ? '600' : 'bold',
        fontSize: hp(2.1),
        lineHeight: hp(2.7),
        
    },
});