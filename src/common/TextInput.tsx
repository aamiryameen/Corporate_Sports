import React from 'react';
import { StyleSheet } from 'react-native';
import { Input as InputElement, InputProps } from 'react-native-elements';
import { CS_FONTS } from '../styles/fonts';

const TextInput = (props: InputProps) => {
    return <InputElement {...props} containerStyle={[styles.containerStyle]} inputContainerStyle={styles.inputContainerStyle} inputStyle={styles.inputStyle} />;
};

const styles = StyleSheet.create({
    containerStyle: {
        height: 70,
        marginBottom: 0,
        paddingHorizontal: 0
    },
    inputContainerStyle: {
        // borderWidth: 0.5,
        height: 56,
        borderBottomWidth: 0,
        backgroundColor: '#FFFAFA',
        borderRadius: 16,
        margin: 0,
        paddingLeft: 0
    },
    inputStyle: {
        fontSize: 14,
        marginLeft: '2.5%',
        color: '#000',
        fontFamily: CS_FONTS.ABeeZeeRegular
    }
});

export default TextInput;
