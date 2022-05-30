import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { CS_FONTS } from '../../styles/fonts';
import colors from '../../styles/colors';
import SimpleButton from '../../common/SimpleButton';

interface PRSuccessProps {
    navigation: any;
}

const PRSuccess: React.FC<PRSuccessProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={require('../../asset/images/success.png')} style={styles.image} />

            <Text style={styles.Description}>
                You have successfully reset your password.{'\n'}Please use your new password when you’re{'\n'}logging in
            </Text>
            <View style={styles.buttonContainer}>
                <SimpleButton textStyle={{fontFamily: CS_FONTS.ABeeZeeRegular, fontStyle: 'italic'}} title="Login Now" onPress={() => navigation.navigate('EmailLogin')} />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: colors.WHITE,
        paddingHorizontal: '5%'
    },
    Description: {
        fontFamily: CS_FONTS.ABeeZeeRegular,
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 24,
        color: colors.TEXT_LIGHT,
        textAlign: 'center',
        marginTop: hp(12)
    },
    buttonContainer: {
        marginTop: hp(6)
    },
    image: {
        width: wp(38),
        height: hp(20),
        resizeMode: 'contain',
        alignSelf: 'center'
    }
});
export default PRSuccess;
