import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { hpHeight, wpWidth } from '../../utils/constants';
import { CS_FONTS } from '../../styles/fonts';
import { normalizeX, normalizeY } from '../../utils/utils';
interface WelcomeProps {
    navigation: any
}

const Welcome: React.FC<WelcomeProps> = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={styles.textLogoContainer}>
                <View style={styles.dateWelcomeTextContainer}>
                    <Text style={{ ...styles.descriptionText, color: '#1E1E1E' }}>Wednesday 19 January</Text>
                    <Text style={{ ...styles.welcomText, fontFamily: CS_FONTS.PoppinsExtraBold }} >Welcome to Corporate Sports</Text>
                </View>
                <View style={styles.logoContainer}>
                    <Image resizeMode='contain' source={require('../../asset/images/logo/logo.png')} style={styles.logo} />
                </View>
            </View>
            <View style={styles.desContainer}>
                <Text style={{ ...styles.descriptionText, marginTop: hpHeight(1.6), marginLeft: normalizeX(10) }}>As MENA’s leading provider of B2B corporate sports leagues, tournaments, and team building events, we organize multi-sports and industry-specific corporate tournaments all year round. Our events are varied and suitable for all types of companies and employees.</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        width: '100%',
    },
    textLogoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      
        marginTop: hpHeight(5)
    },
    dateWelcomeTextContainer: {
        width: wpWidth(62),
        marginTop: normalizeY(26),
        marginLeft: normalizeX(20)
    },
    logoContainer: {

    },
    descriptionText: {
        fontFamily: CS_FONTS.MontserratRegular,
        fontSize: 15,
        lineHeight: 18.29,
    },
    welcomText: {
        fontWeight: '900',
        fontSize: 30,
        lineHeight: 36.5,
        fontStyle: 'normal',
        color: '#1E1E1E',
    },
    logo: {
        height: 140,
        width: 130,
        marginLeft: wpWidth(-4)
    },
    desContainer: {
        marginHorizontal: normalizeX(10),
        width: '85%'

    }
})

export default Welcome;
