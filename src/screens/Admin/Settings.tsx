import React, { FC } from 'react';
import { View, StyleSheet, Image, Text, Platform, TouchableOpacity, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CS_COLORS from '../../styles/colors';
import { CS_FONTS } from '../../styles/fonts';

import { AntDesign, Entypo } from '@expo/vector-icons';

interface SettingsProps {
    navigation: any;
}

export const Settings: React.FC<SettingsProps> = ({ navigation }) => {
    const SETTINGS_LIST = [
        {
            title: 'Access my entrance ticket',
            icon: require('../../asset/icons/icon0.png'),
            onPress: () => navigation.navigate('AdminTicket'),

            showBorder: true
        },
        {
            title: 'Edit My Profile',
            icon: require('../../asset/icons/icon1.png'),
            onPress: () => navigation.navigate('EditProfile'),
            showBorder: true
        },
        {
            title: 'Contact Us',
            icon: require('../../asset/icons/icon2.png'),
            onPress: () => {},
            showBorder: true
        },
        {
            title: 'Terms & Conditions',
            icon: require('../../asset/icons/icon3.png'),
            onPress: () => navigation.navigate('Terms'),
            showBorder: true
        },
        {
            title: 'Privacy Policy',
            icon: require('../../asset/icons/icon4.png'),
            onPress: () => navigation.navigate('Privacy'),
            showBorder: true
        },
        {
            title: 'Logout',
            icon: require('../../asset/icons/logout.png'),
            onPress: () => {},
            showBorder: false
        }
    ];

    const renderListView = (index: any, item: any) => {
        return (
            <>
                <TouchableOpacity activeOpacity={0.5} style={styles.ListContainer} onPress={item.onPress}>
                    <View style={styles.icon}>
                        <Image source={item.icon} style={styles.image} />
                    </View>
                    <View style={styles.imageConatiner}>
                        <Text style={styles.title0}>{item.title}</Text>
                    </View>
                    <View style={styles.container}>
                        <AntDesign name={'right'} size={24} color={CS_COLORS.LIGHT_GRAY_ICON} />
                    </View>
                </TouchableOpacity>
                {item.showBorder && <View style={styles.bottomBorder} />}
            </>
        );
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Settings</Text>
            <FlatList 
            overScrollMode='never'
            data={SETTINGS_LIST}
             keyExtractor={(item, index) => (index + 1).toString()}
            showsVerticalScrollIndicator={false} 
            renderItem={({ index, item }) => renderListView(index, item)} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: wp(100),
        alignSelf: 'center',
        // marginTop: hp(6),
        backgroundColor: CS_COLORS.WHITE,
        flex: 1,
        paddingHorizontal: wp(3)
    },
    title: {
        fontFamily: CS_FONTS.MontserratBold,
        color: CS_COLORS.TEXT_DARKBLACK,
        fontSize: hp(4),
        fontWeight: Platform.OS === 'ios' ? '900' : 'bold',
        marginLeft: 6,
        marginTop: hp(2),
        marginBottom: hp(3)
    },
    ListContainer: {
        flexDirection: 'row',
        height: 48,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        height: hp(5),
        width: wp(8),
        resizeMode: 'contain',
        borderWidth: 1.5,
        borderColor: '#fff'
    },
    bottomBorder: {
        width: '90%',
        borderWidth: 0.5,
        borderColor: 'lightgrey',
        alignSelf: 'flex-end'
    },
    title0: {
        fontFamily: CS_FONTS.MontserratRegular,
        color: CS_COLORS.TEXT_DARKBLACK,
        fontSize: hp(2.2),
        fontWeight: Platform.OS === 'ios' ? '600' : 'normal'
    },
    icon: { width: wp(10) },
    imageConatiner: { width: wp(73) }
});
