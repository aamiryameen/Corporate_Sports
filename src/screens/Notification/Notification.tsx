import React from 'react';

import { Text, View, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { NotificationDetail } from './NotificationDetail';
import { NotificationType } from './NotificationType';
import { TournamentDetail } from './TournamentDetail';

interface NotificationProps {
    navigation: any
}

export const Notification: React.FC<NotificationProps> = ({navigation}) => {
    return (
        <>
            <ScrollView overScrollMode='never' showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <NotificationType />
                    <NotificationDetail />
                    <TournamentDetail navigation={navigation} />
                </View>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
