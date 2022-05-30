import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { CS_FONTS } from '../../styles/fonts';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

interface NotificationTypeProps {}

export const NotificationType: React.FC<NotificationTypeProps> = ({}) => {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.headingText}>Notifications</Text>
                <View style={styles.alertHeading}>
                    <Text style={styles.alertHeadingText}>Alert!</Text>
                    <View style={styles.alertContainer}>
                        <Text style={styles.alertText}>We regret to inform our visitors that, due to unforeseen circumstances, the Cairokee concert originally scheduled for Jubilee</Text>
                    </View>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        padding: 20
    },
    headingText: {
        color: 'black',
        fontFamily: CS_FONTS.MontserratBold,
        fontSize: 25
    },
    alertHeading: {
        marginTop: 20
    },
    alertHeadingText: {
        color: '#C62323',
        fontSize: 16,
        fontFamily: CS_FONTS.MontserratBold
    },
    alertContainer: {
        width: wp('90%'),
        backgroundColor: '#FCE2E2',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 15
    },
    alertText: {
        fontSize: 15,
        color: '#C62323',
        lineHeight: 20,
        fontFamily: CS_FONTS.MontserratRegular,
        width: wp('80%')
    }
});
