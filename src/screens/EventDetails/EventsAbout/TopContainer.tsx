import React, { FunctionComponent } from 'react';
import { View, StyleSheet, ImageBackground, Text, Platform, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CS_COLORS from '../../../styles/colors';
import { CS_FONTS } from '../../../styles/fonts';
import { AntDesign } from '@expo/vector-icons';
import { GAMES_ICON } from '../../../utils/constants';

interface TopContainerProps {
    navigation: any;
}

const TopContainer: React.FC<TopContainerProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.container0}>
                <View style={styles.container0_0}>
                    <ImageBackground source={require('../../../asset/images/About.png')} style={styles.image} imageStyle={{ borderTopLeftRadius: 12, borderTopRightRadius: 12, resizeMode: 'stretch' }}>
                        <View style={styles.header}>
                            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                                <AntDesign name={'left'} size={18} color={'#fff'} />
                            </TouchableOpacity>
                            <View style={styles.logoContainer}>
                                <Image source={require('../../../asset/images/faqia.png')} style={styles.logo} />
                            </View>
                        </View>
                    </ImageBackground>

                    <Text style={styles.title}>Winter{'\n'}Tournament</Text>
                    <View style={styles.sportsContainer}>
                        <Text style={styles.sports}>Sports:</Text>
                        {GAMES_ICON.map((data, index) => {
                            return (
                                <View key={index}>
                                    <Image source={data.image} style={styles.icons} />
                                </View>
                            );
                        })}
                    </View>
                </View>
            </View>
            <View style={styles.container1}>
                <View style={styles.team0}>
                    <Text style={styles.team}>Team</Text>
                    <View style={styles.iconLogoContainer}>
                        <Image source={require('../../../asset/images/sp3.png')} style={styles.gameLogo} />
                        <Text style={styles.gameName}>Du Football 1.0</Text>
                    </View>
                </View>
                <View style={styles.iconLogoContainer0}>
                    <Image source={require('../../../asset/images/alfa.png')} style={styles.alfa} />
                </View>
            </View>
        </View>
    );
};

export default TopContainer;
const styles = StyleSheet.create({
    container: {
        height: hp(69),
        width: wp(100)
    },
    container0: {
        height: hp(62),
        width: wp(100),
        backgroundColor: '#15B5D0',
        justifyContent: 'center',
        // paddingTop:hp(4),
        borderRadius: 12
    },
    container0_0: {
        height: hp(51),
        width: wp(94),
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        alignSelf: 'center'
    },
    container1: {
        width: wp(94),
        height: hp(9),
        backgroundColor: CS_COLORS.WHITE,
        borderRadius: 12,
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: -hp(4)
    },
    title: {
        fontFamily: CS_FONTS.MontserratBold,
        color: CS_COLORS.TEXT_DARKBLACK,
        fontSize: 30,
        // fontWeight: Platform.OS === 'ios' ? '800' : 'bold',
        marginLeft: wp(5),
        marginTop: hp(2)
    },
    sports: {
        fontFamily: CS_FONTS.MontserratMedium,
        color: CS_COLORS.TEXT_DARKBLACK,
        fontSize: 18,
        // fontWeight: Platform.OS === 'ios' ? '600' : 'bold'
    },
    sportsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: wp(7)
    },
    icons: {
        height: hp(8),
        width: wp(10),
        resizeMode: 'contain',
        marginLeft: 7
    },
    team0: {
        width: wp(75),
        padding: 13,
        flexDirection: 'column'
    },
    team: {
        fontFamily: CS_FONTS.MontserratRegular,
        color: CS_COLORS.TEXT_DARKBLACK,
        fontSize: 15,
        // fontWeight: '400'
    },

    iconLogoContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconLogoContainer0: {
        width: wp(16),
        alignItems: 'center',
        justifyContent: 'center'
    },
    gameName: {
        fontFamily: CS_FONTS.MontserratBold,
        color: CS_COLORS.TEXT_DARKBLACK,
        fontSize: 18,
        // fontWeight: Platform.OS === 'ios' ? '700' : 'bold',
        marginLeft: 6
    },
    alfa: {
        resizeMode: 'contain',
        width: wp(12),
        height: hp(7)
    },
    gameLogo: {
        resizeMode: 'contain',
        width: wp(6),
        height: hp(4)
    },
    image: {
        height: hp(30),
        width: wp(94)
    },
    header: {
        width: wp(94),
        height: hp(10),
        marginTop: 13,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 13,
        paddingRight: 14
    },
    backButton: {
        width: 34,
        height: 34,
        backgroundColor: CS_COLORS.LIGHT_GRAY_ICON,
        opacity: 0.7,
        borderRadius: 17,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoContainer: {
        width: wp(25),
        height: hp(7),
        backgroundColor: '#fff',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: wp(23),
        height: hp(6)
    }
});
