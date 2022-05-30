import React, { FunctionComponent, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AuthContainer from '../../common/AuthContainer';
import Input from '../../common/TextInput';
import { Entypo } from '@expo/vector-icons';
import SimpleButton from '../../common/SimpleButton';
import { CS_FONTS } from '../../styles/fonts';
import colors from '../../styles/colors';

interface PasswordRecoveryProps {
    navigation: any;
}

const PasswordRecover: React.FC<PasswordRecoveryProps> = ({ navigation }) => {
    const [email, setEmail] = useState();

    return (
        <AuthContainer>
            <View style={styles.Header}>
                <Text style={styles.HeaderText}>Forgot your password?</Text>
                <Text style={styles.Description}>Enter Corporate sports email to reset your password</Text>
            </View>

            <View style={{ marginTop: 10 }}>
                <Input
                    value={email}
                    placeholder="Enter Email address"
                    onChangeText={(email: string) => {}}
                    leftIcon={<Entypo name="mail" size={25} color="#BDBDBD" />}
                    leftIconContainerStyle={{ marginHorizontal: '5%' }}
                />
            </View>
            <View style={styles.buttonContainer}>
                <SimpleButton textStyle={{fontFamily: CS_FONTS.ABeeZeeRegular, fontStyle: 'italic'}} title="Next" onPress={() => navigation.navigate('PasswordOTP')} />
            </View>
        </AuthContainer>
    );
};

export default PasswordRecover;

const styles = StyleSheet.create({
    Header: {
        alignItems: 'center',
        marginTop: 36,
        marginBottom: 37,
        justifyContent: 'center'
    },
    HeaderText: {
        fontFamily: CS_FONTS.ABeeZeeRegular,
        fontStyle: 'italic',
        fontSize: 24,
        lineHeight: 33,
        color: colors.TEXT_BLACK,
        textAlign: 'center'
    },
    Description: {
        fontFamily: CS_FONTS.ABeeZeeRegular,
        fontWeight: '500',
        // fontStyle: 'italic',
        fontSize: 16,
        lineHeight: 24,
        color: colors.TEXT_LIGHT,
        textAlign: 'center',
        marginTop:16
    },
    buttonContainer: {
        marginTop: '5%'
    }
});
