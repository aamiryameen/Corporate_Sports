import React, { FC, useState } from 'react';
import { StyleSheet, ScrollView, StatusBar, View } from 'react-native';
import { EventDuration } from '../../../common/EventDuration';
import { InfoHeader } from '../../../common/InfoHeader';
import { Header } from './Header';
import { TicketQRCode } from './TicketQRCode';
// import {getUniqueId } from "react-native-device-info";
import Welcome from '../../Guest/Welcome';

interface TicketProps {
    showBackButton: Boolean;
    navigation: any;
}

export const Ticket: FC<TicketProps> = ({ showBackButton, navigation }) => {
    const [deviceId, setDeviceId] = useState('hhhhhh');

    return (
        <View style={styles.container}>
            <ScrollView style={styles.body} showsVerticalScrollIndicator={false} overScrollMode='never'>
                <Header title={'Your Ticket'} showBackButton={showBackButton} navigation={navigation} />
                <InfoHeader />
                <TicketQRCode id={deviceId} />
                <EventDuration title={'Date & Time'} duration={'15th – 16th Jan'} time={'09:00 – 18:00'} />
            </ScrollView>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D6D6D6',
       
        
    },
    body:{
        flex: 1,
        backgroundColor: '#3C434A',
        marginBottom: 10,
        width: '100%',
        marginTop: 15,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,

    }
});
