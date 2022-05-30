import React, { FunctionComponent } from 'react';
import { View, StyleSheet, Text, Platform, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CS_COLORS from '../../../styles/colors';
import { CS_FONTS } from '../../../styles/fonts';
import TopContainer from './TopContainer';
import { Companies } from './Companies';
import { Location } from './Location';
import { Description } from './Description';
import { GamePlanning } from './GamePlanning';
import { ABOUT } from '../../../utils/constants';
import { OBJECTIVES } from '../../../utils/constants';
import { EventDuration } from '../../../common/EventDuration';

interface EventsAboutProps {
    navigation: any;
}

const EventsAbout: React.FC<EventsAboutProps> = ({ navigation }) => {
    return (
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false} overScrollMode='never'>
            <TopContainer navigation={navigation} />
            <EventDuration title={'Date & Time'} duration={'15th – 16th Jan'} time={'09:00 – 18:00'} />
            <Description include={true} description={ABOUT} title={'About'} />
            <Companies />
            <Location />
            <Description include={true} description={OBJECTIVES} title={'Event Objectives'} />
            <Description include={false} description={''} title={'What is Included'} />
            <View style={styles.container}>
                <Text style={styles.title}>Games Planning </Text>
            </View>

            <GamePlanning />
            <View style={{ height: 100 }}></View>
        </ScrollView>
    );
};

export default EventsAbout;

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
        fontFamily: CS_FONTS.MontserratBold,
        color: CS_COLORS.INPUT_BACKGROUND,
        fontWeight: Platform.OS === 'ios' ? '600' : 'normal',
        fontSize: hp(2.1),
        lineHeight: hp(2.7)
    }
});
