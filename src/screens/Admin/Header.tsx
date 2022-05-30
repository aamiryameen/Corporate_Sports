import React, { FC, useState } from 'react';
import { View, StyleSheet, Image, Text, Platform, TouchableOpacity, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CS_COLORS from '../../styles/colors';
import { CS_FONTS } from '../../styles/fonts';
import { AntDesign, Entypo,FontAwesome } from '@expo/vector-icons';

interface HeaderProps {
    title:String
}

export const Header: React.FC<HeaderProps> = ({title}) => {
        return (
            <View style={{width:wp(93), height:44, justifyContent:'center', flexDirection:'row', alignItems:'center'}}>
                <TouchableOpacity style={{width:wp(10),}} >
                     <AntDesign name={'left'} size={24} color={'#000'} /> 
                </TouchableOpacity>
                <View style={{width:wp(83), alignItems:'center'}}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                </View>
            </View>
        );
}
const styles = StyleSheet.create({
    title: {
        fontFamily: CS_FONTS.MontserratRegular,
        color: CS_COLORS.TEXT_DARKBLACK,
        fontSize: hp(2.2),
        fontWeight: Platform.OS === 'ios' ? '400' : 'normal'
    },
});