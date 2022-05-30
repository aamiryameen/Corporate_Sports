import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { CS_FONTS } from '../styles/fonts';

type CheckBoxProps = {
    title: any;
    onPress: any;
    value: any;
};

const CheckBox = (props: CheckBoxProps) => {
    return (
        <View style={styles.checkBoxContainer}>
            <TouchableOpacity onPress={() => props.onPress()}>
                {props.value ? <MaterialCommunityIcons name="checkbox-marked" size={25} color="orange" /> : <MaterialCommunityIcons name="checkbox-blank-outline" size={25} color="orange" />}
            </TouchableOpacity>
            <View style={{ width: 10 }} />
            <View>
                <Text style={styles.titleStyle}>{props.title}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    checkBoxContainer: {
        height: 30,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: '2.5%'
    },
    titleStyle: {
        color: 'grey',
        fontFamily: CS_FONTS.ABeeZeeRegular,
        fontSize: 14
    }
});

export default CheckBox;
