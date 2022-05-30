import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { EditProfileImage } from '../../components/EditProfileImage';
import { EditProfileInputs } from '../../components/EditProfileInputs';
import { CS_FONTS } from '../../styles/fonts';
import { wpWidth } from '../../utils/constants';

const { width } = Dimensions.get('window');

interface EditProfileProps {
    navigation: any;
}

export const EditProfile: React.FC<EditProfileProps> = ({ navigation }) => {
    return (
        <>
            <ScrollView style={styles.container} overScrollMode='never' showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../../asset/icons/adminBack.png')} style={styles.backButton} />
                    </TouchableOpacity>

                    <Text style={styles.headerText}>My Profile</Text>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={{ ...styles.headerText, color: '#BC863D' }}>Save</Text>
                    </TouchableOpacity>
                </View>
                <EditProfileImage />
                <EditProfileInputs />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: { padding: 12, marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' },
    backButton: {
        resizeMode: 'contain',
        height: 22,
        width: 22
    },
    headerText: {
        fontSize: 17,
        color: '#111111',
        fontFamily: CS_FONTS.MontserratRegular
    }
});
