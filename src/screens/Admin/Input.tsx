import React from 'react';
import { StyleSheet } from 'react-native';
import { Input as InputElement, InputProps } from 'react-native-elements';
import { CS_FONTS } from '../../styles/fonts';

const Input = (props: InputProps) => {
    return <InputElement {...props} containerStyle={[styles.containerStyle]} inputContainerStyle={styles.inputContainerStyle} inputStyle={styles.inputStyle} />;
};

const styles = StyleSheet.create({
    containerStyle: {
        height: 70,
        marginBottom: 0,
        paddingHorizontal: 0
    },
    inputContainerStyle: {
        height: 56,
        backgroundColor: '#fff',
        borderRadius: 4,
        margin: 0,
        paddingLeft: 0,
        borderWidth:2
    },
    inputStyle: {
        fontSize: 14,
        marginLeft: '2.5%',
        color: '#000',
        fontFamily: CS_FONTS.ABeeZeeRegular
    }
});

export default Input;
