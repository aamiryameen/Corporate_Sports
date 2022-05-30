import React from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../styles/colors';
import { CS_FONTS } from '../../styles/fonts';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

interface IProps {
    onPress?: () => any;
    title?: string;
    without?: any;
    loading?: any;
    backgroundColor?: String;
}

const AdminButton = (props: IProps) => {
    const { onPress, title, loading,  } = props;

    return loading ? (
        <View style={props.without ? styles.withoutBgContainer : styles.container}>
            <ActivityIndicator color={colors.WHITE} />
        </View>
    ) : (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={props.without ? styles.textStye : styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,
        marginTop:hp(15)
    },
    withoutBgContainer: {
        // backgroundColor: AppColors.dashOrange,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        height: 56
    },
    text: {
        fontSize: 18,
        color: colors.WHITE,
        fontFamily: CS_FONTS.ABeeZeeRegular,
        fontWeight: 'bold',
    },
    textStye: {
        fontSize: 18,
        color: '#828282',
        fontFamily: CS_FONTS.ABeeZeeItalic,
    }
});

export default AdminButton;
