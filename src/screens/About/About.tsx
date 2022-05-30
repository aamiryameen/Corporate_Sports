import React, { FunctionComponent } from 'react';
import { View, StyleSheet, Text, Platform, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CS_COLORS from '../../styles/colors';
import { CS_FONTS } from '../../styles/fonts';
import TopContainer from './TopContainer';
import { Calendar } from './Calendar';
import { Companies } from './Companies';
import { Location } from './Location';
import { Description } from './Description';
import { GamePlanning,  } from './GamePlanning';
import { ABOUT } from '../../utils/constants';
import { OBJECTIVES } from '../../utils/constants';
import { EventsTab } from '../../common/EventsTab';
interface AboutProps{
    navigation?: any
}

const About: React.FC<AboutProps>  = ({navigation}) => {
    return (
        <ScrollView style={{ flex: 1 }} overScrollMode='never' showsVerticalScrollIndicator={false}>
            <TopContainer />
            <Calendar />
            <Description description={ABOUT} title={'About'} />
            <Companies />
            <Location />
            <Description description={OBJECTIVES} title={'Event Objectives'} />
            {/* Removeable component */}
            <View style={styles.container}>
                <Text style={styles.title}>What is Included</Text>
                <Text style={styles.description}>
                    {'\u25CF'} Cash prizes, Trophies {'&'} Medals.{'\n'}
                    {'\u25CF'} Food ( Lunch, Water through the tournament ).{'\n'}
                    {'\u25CF'} Corporate sport branded Uniform.
                </Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>Games Planning </Text>
            </View>
            <GamePlanning />
            <View style={{ height: 100 }}></View>
            
        </ScrollView>
    );
};

export default About;

const styles = StyleSheet.create({
    container: {
        width: wp(93),
        alignSelf: 'center'
    },
    title: {
        fontFamily: CS_FONTS.MontserratBold,
        color: CS_COLORS.TEXT_DARKBLACK,
        fontWeight: Platform.OS === 'ios' ? '900' : 'bold',
        fontSize: hp(3),
        lineHeight: hp(5),
        marginTop: hp(5)
    },
    description: {
        fontFamily: CS_FONTS.MontserratBold,
        color: CS_COLORS.INPUT_BACKGROUND,
        fontWeight: Platform.OS === 'ios' ? '600' : 'bold',
        fontSize: hp(2.1),
        lineHeight: hp(2.7)
    }
});
