import React, { FC } from 'react';
import { View, StyleSheet, Text, Platform } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CS_COLORS from '../../../styles/colors';
import { CS_FONTS } from '../../../styles/fonts';
interface DescriptionProps {
    title: String;
    description: String;
    include?: Boolean;
}

export const Description: FC<DescriptionProps> = ({ description, title, include }) => {
    return (
        <>
            {include ? (
                <View style={styles.container}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>
            ) : (
                <View style={styles.container}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.description}>
                        {'\u2981'} Cash prizes, Trophies {'&'} Medals.{'\n'}
                         {'\u2981'} Food ( Lunch, Water through the  {'\n'}
                              <Text>   tournament ). {'\n'} </Text> 
                        {'\u2981'} Corporate sport branded Uniform.
                    </Text>
                </View>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        width: wp(93),
        alignSelf: 'center'
    },
    title: {
        fontFamily: CS_FONTS.MontserratExtraBold,
        color: CS_COLORS.TEXT_DARKBLACK,
        fontSize: hp(3),
        lineHeight: hp(5),
        marginTop: hp(5)
    },
    description: {
        fontFamily: CS_FONTS.MontserratMedium,
        color: CS_COLORS.INPUT_BACKGROUND,
        fontSize: 16,
        lineHeight: hp(2.7)
    }
});
