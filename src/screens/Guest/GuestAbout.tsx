import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import Welcome from './Welcome';
import CSEvents from './CSEvents';
import WeeklySupportPractice from './WeeklySupportPractice';

interface GuestAboutProps {
    navigation: any;
}

export const GuestAbout: React.FC<GuestAboutProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} overScrollMode='never'>
                <Welcome navigation={undefined} />
                <CSEvents navigation={undefined} />
                <WeeklySupportPractice navigation={navigation} />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f3f3'
    }
});

export default GuestAbout;
