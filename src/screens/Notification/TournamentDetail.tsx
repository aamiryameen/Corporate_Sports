import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import React from 'react';
import { CS_FONTS } from '../../styles/fonts';

import { DelayedButton } from '../../common/DelayedButton';
import { defaultStyle } from '../../styles';

interface TournamentDetailProps {
    navigation: any
}

export const TournamentDetail: React.FC<TournamentDetailProps> = ({navigation}) => {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.headingText}>{`Winter 
Tournament 2022`}</Text>
                <View style={styles.scoreContainer}>
                    <Text style={styles.scroreHeadingText}>PITCH 4 - 18.30 Football</Text>

                    <View style={styles.scoreLogoContainer}>
                        <Image source={require('../../asset/images/alfa.png')} style={{ ...styles.scoreLogo }} />
                        <Text style={{ ...styles.logoText }}>VS</Text>
                        <Image source={require('../../asset/images/nafco.png')} style={styles.scoreLogo} />
                    </View>

                    <View style={styles.scoreNumberContainer}>
                        <View style={styles.numberContainer}>
                            <Text style={styles.scoreText}>5</Text>
                        </View>
                        <View />
                        <View style={styles.numberContainer}>
                            <Text style={styles.scoreText2}>1</Text>
                        </View>
                    </View>
                </View>
                <DelayedButton onPress={() => {navigation.navigate('AboutResult')}} backgroundColor="#D3F9FF" height={48} width={'90%'} marginTop={15}>
                    <Text style={{ ...defaultStyle.default_button, color: '#15B5D0', fontFamily: CS_FONTS.MontserratBold }}>View All Scores</Text>
                </DelayedButton>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        height: hp('65%'),
        backgroundColor: '#15B5D0',
        width: wp('90%'),
        alignSelf: 'center',
        marginTop: 15,
        borderRadius: 12,
        marginBottom: 10
    },
    headingText: {
        padding: 15,
        fontSize: 23,
        lineHeight: 28,
        color: 'white',
        fontFamily: CS_FONTS.MontserratBold
    },
    scoreContainer: {
        backgroundColor: 'white',
        height: hp('43%'),
        width: wp('85%'),
        alignSelf: 'flex-end',
        borderRadius: 12,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
    },
    scroreHeadingText: {
        color: '#1E1E1E',
        fontSize: 29,
        fontFamily: CS_FONTS.MontserratBold,
        textAlign: 'center',
        marginTop: 15
    },
    scoreLogoContainer: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15
    },
    scoreLogo: {
        resizeMode: 'contain',
        height: 70,
        width: 70
    },
    logoText: {
        fontSize: 30,
        fontFamily: CS_FONTS.MontserratBold
    },
    scoreNumberContainer: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        borderRadius: 5
    },
    numberContainer: {
        width: 70,
        padding: 18,
        backgroundColor: '#F5EFEF',
        alignItems: 'center'
    },
    scoreText: {
        color: 'black',
        fontSize: 25,
        fontFamily: CS_FONTS.MontserratBold
    },
    scoreText2: {
        color: '#693880',
        fontSize: 25,
        fontFamily: CS_FONTS.MontserratBold
    },

    extraWidth: {}
});
