import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { hpHeight, wpWidth } from '../../utils/constants';
import Player from './Player';
import CSEvents from '../Guest/CSEvents';
import Header from '../../components/Home/Header';
// import WeeklySupportPractice from '../Guest/WeeklySupportPractice';
import CSEventHome from './CSEventHome';
import ActiveSupportPractice from './ActiveSportPractice';

interface ParticipantHomeProps {
    navigation: any;
}

export const ParticipantHome: React.FC<ParticipantHomeProps> = ({ navigation }) => {
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false} overScrollMode='never'>
            <View>
                <View style={styles.componentContainer}>
                    <Header navigation={navigation} />
                    <CSEventHome navigation={navigation} />
                    <ActiveSupportPractice />
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f3f3'
    },
    componentContainer: { 
        marginHorizontal: wpWidth(4) 
    }
});

export default ParticipantHome;
