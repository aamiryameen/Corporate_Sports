import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { CS_FONTS } from '../../styles/fonts';
import DAILY_QUOTE from '../../asset/images/daily_1.png';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

interface DailyQuotesProps {}

export const DailyQuotes: React.FC<DailyQuotesProps> = ({}) => {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.headingText}>Daily Quotes</Text>
                <View style={styles.imageContainer}>
                    <Image source={DAILY_QUOTE} style={styles.image} />
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {},
    headingText: {
        fontSize: 25,
        fontFamily: CS_FONTS.MontserratExtraBold,
        padding: 20
    },
    imageContainer: {
        height: hp(45),
        width: wp('92%'),
        alignSelf: 'center'
    },
    image: {
        height: hp(45),
        width: wp('92%'),
        resizeMode: 'stretch'
    }
});
