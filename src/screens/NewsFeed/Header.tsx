import { Text, View, StyleSheet } from 'react-native';

import React from 'react';
import { CS_FONTS } from '../../styles/fonts';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
    return (
        <>
            <View style={styles.header}>
                <View style={styles.headerSection}>
                    <Text style={styles.text}>Latest social news from Corporate Sports</Text>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#D6D6D6',
        width: '100%',
        height: 70,
        justifyContent: 'center'
    },
    headerSection: {
        width: '90%',
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'rgba(60, 60, 67, 0.6)',
        fontSize: 15,
        fontFamily: CS_FONTS.MontserratRegular
    }
});
