import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

interface DelayedButtonProps {
    onPress: () => void;
    backgroundColor?: string;
    width: any;
    height: any;
    marginBottom?: number;
    children: any;
    marginTop?: any;
}

export const DelayedButton: React.FC<DelayedButtonProps> = ({ onPress, backgroundColor, height, width, marginBottom, marginTop, children }) => {
    return (
        <>
            <TouchableOpacity
                onPress={onPress}
                style={{
                    ...styles.container,
                    height,
                    width,
                    backgroundColor,
                    marginBottom,
                    marginTop
                }}
            >
                {children}
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        shadowColor: 'black',
        shadowOffset: {
            width: -10,
            height: 18,
            shadowOpacity: 2.28,
            shadowRadius: 15.25,
            elevation: 22
        }
    },
    text: {
        alignItems: 'center',
        fontWeight: '500',
        letterSpacing: 1.1,
        fontSize: 16
    }
});
