import React, { FC, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import TextInput from '../../common/TextInput';
import { Entypo } from '@expo/vector-icons';
import LogoContainer from '../../common/LogoContainer';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import IconButton from '../../common/IconButton';
import { CS_FONTS } from '../../styles/fonts';
import { normalizeY } from '../../utils/utils';

interface WelcomeProps {
    navigation: any;
}

const Welcome: FC<WelcomeProps> = ({ navigation }) => {
 
    const [email, setEmail] = useState<any>('');

    return (
        <LogoContainer>
            <View style={{ marginTop: normalizeY(30), }}>
                <TextInput
                    value={email}
                    placeholder="Corporate Email address"
                    onChangeText={(email: string) => setEmail(email)}
                    leftIcon={<Entypo name="mail" size={25} color="#BDBDBD" />}
                    leftIconContainerStyle={{ marginHorizontal: '5%' }}
                />
            </View>

            <View style={styles.buttonContainer}>
                <IconButton email={'Demo@gmail.com'} style={{ marginTop: 0 }} title="Continue with email" onPress={() => navigation.navigate('AuthOTP')} />
            </View>
            <TouchableOpacity style={{ alignItems: 'center', marginTop: hp(3), marginBottom: 20, justifyContent: 'center' }} onPress={() => navigation.navigate('GuestAbout')}>
                <Text style={styles.Description}>Continue as Guest</Text>
            </TouchableOpacity>
        </LogoContainer>
    );
};

export default Welcome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#154360'
    },

    buttonContainer: {
        marginTop: '5%'
    },
    Description: {
        fontFamily: CS_FONTS.MontserratRegular,
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 24,
        color: '#000',
        textAlign: 'center',
        marginTop: 12
    }
});
