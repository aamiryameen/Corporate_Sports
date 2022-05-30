import React from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import { CS_FONTS } from '../styles/fonts';

interface EditProfileInputProps {
    title?: any;
    value?: any;
    onChange?: () => void;
    showIcon?: Boolean;
    bottomBorder: Boolean;
}

export const EditProfileInput: React.FC<EditProfileInputProps> = ({ title, value, onChange, showIcon, bottomBorder }) => {
    return (
        <>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} value={value} />
                <Text style={styles.inputTitle}>{title}</Text>
                {showIcon && <Image style={styles.icon} source={require('../asset/icons/textinput.png')} />}
                {!bottomBorder && <View style={styles.inputBorder} />}
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        height: 60,
        width: '90%',
        borderColor: 'grey',

        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        alignSelf: 'center',
        marginTop: 10,
        justifyContent: 'center'
    },
    input: {
        paddingHorizontal: 10,
        fontSize: 17,
        fontFamily: CS_FONTS.MontserratRegular
    },
    inputTitle: {
        color: 'rgba(60, 60, 67, 0.6)',
        fontSize: 12,
        fontFamily: CS_FONTS.MontserratRegular,
        marginHorizontal: 10
    },
    icon: {
        position: 'absolute',
        right: 10,
        resizeMode: 'contain',
        height: 20,
        width: 20
    },
    inputBorder: {
        width: '100%',
        borderWidth: 0.5,
        marginTop: 10,
        borderColor: 'rgba(60, 60, 67, 0.3)'
    }
});
