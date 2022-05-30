import React from 'react';
import { Ticket } from '../screens/EventDetails/Ticket/Ticket';

interface TicketSettingProps {
    navigation: any;
}

export const TicketSetting: React.FC<TicketSettingProps> = ({ navigation }) => {
    return (
        <>
            <Ticket showBackButton={true} navigation={navigation} />
        </>
    );
};
