import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../styles/colors';
import { CS_FONTS } from '../styles/fonts';
interface IProps {
    onPress: () => void;
    title: string;
    email: any;
    style?: any;
}

const IconButton = (props: IProps) => {
    const { onPress, title, style } = props;

    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.Email}>
                <Entypo size={20} name="mail" color={colors.WHITE} />
            </View>
            <View style={{ width: wp(60) }}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: '2.5%',
        flexDirection: 'row',
        backgroundColor: colors.PRIMARY,
        borderRadius: 16,
        alignItems: 'center',
        height: hp(8)
    },
    text: {
        fontSize: 16,
        color: colors.WHITE,
        textAlign: 'center',
        fontFamily: CS_FONTS.ABeeZeeItalic,
        fontStyle: 'italic'
    },
    Email: {
        backgroundColor: '#F99B1C',
        height: 40,
        width: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default IconButton;
