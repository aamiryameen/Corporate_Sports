import React, { FunctionComponent, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AuthContainer from '../../common/AuthContainer';
import Input from '../../common/TextInput';
import { Entypo, FontAwesome, AntDesign } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { CS_FONTS } from '../../styles/fonts';
import colors from '../../styles/colors';
import InviteButton from '../../common/InviteButton';

interface SentInvitationProps {
    navigation: any;
}

const SentInvitation: React.FC<SentInvitationProps> = ({ navigation }) => {
    const [Name, setName] = useState('');
    const [Phone, setPhone] = useState('');

    return (
        <AuthContainer>
            <View style={styles.Header}>
                <Text style={styles.Description}>
                    We are sorry, your company{'\n'}is not listed, send us your{'\n'}HR Number and we will{'\n'}convence her to join
                </Text>
            </View>

            <View>
                <Input
                    value={Name}
                    placeholder="HR Full Name"
                    onChangeText={(name: string) => setName(name)}
                    leftIcon={<FontAwesome name="user" size={25} color="#BDBDBD" />}
                    leftIconContainerStyle={{ marginHorizontal: '5%' }}
                />
                <Input
                    value={Phone}
                    placeholder="Phone Number"
                    onChangeText={(phone: string) => setPhone(phone)}
                    leftIcon={<FontAwesome name="phone" size={25} color="#BDBDBD" />}
                    leftIconContainerStyle={{ marginHorizontal: '5%' }}
                />
            </View>
            <View style={styles.buttonContainer}>
                <InviteButton
                    // without={false}
                    // loading={isLoading}
                    title="Sent invite to Join"
                    onPress={() => navigation.navigate('Invite')}
                />
            </View>
        </AuthContainer>
    );
};

export default SentInvitation;

const styles = StyleSheet.create({
    Header: {
        alignItems: 'center',
        marginTop: hp(4),
        marginBottom: hp(4),
        justifyContent: 'center'
    },
    HeaderText: {
        fontFamily: CS_FONTS.ABeeZeeItalic,
        fontWeight: '500',
        fontStyle: 'italic',
        fontSize: 19,
        lineHeight: 33,
        color: colors.TEXT_BLACK,
        textAlign: 'center'
    },
    Description: {
        fontFamily: CS_FONTS.SFProDisplaySemiBold,
        fontSize: 20,
        lineHeight: 24,
        color: colors.TEXT_DARKBLACK,
        textAlign: 'center',
    },
    buttonContainer: {
        marginTop: '5%'
    }
});
