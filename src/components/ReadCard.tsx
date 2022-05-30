import { Text, View, TouchableWithoutFeedback, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { CS_FONTS } from '../styles/fonts';
import BACK_BUTTON from '../asset/icons/backButton.png';

interface ReadCardProps {
    navigation?: any;
    item: any;
    backButton: Boolean;
    onPress: () => void;
}

export const ReadCard: React.FC<ReadCardProps> = ({ navigation, item, backButton, onPress }) => {
    return (
        <>
            <TouchableWithoutFeedback onPress={() => onPress()}>
                <View style={styles.cardContainer}>
                    {backButton && (
                        <TouchableOpacity style={styles.backButtonContainer} onPress={() => navigation.goBack()}>
                            <Image source={BACK_BUTTON} style={styles.backButtonImage} />
                        </TouchableOpacity>
                    )}

                    <Image style={styles.cardImage} source={item.image} />
                    <View style={styles.textContainer}>
                        <Text style={styles.cardText}>{item.text}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        width: wp('90%'),
        alignSelf: 'center',
        borderWidth: 0.5,
        borderRadius: 11,
        borderColor: 'lightgrey',
        marginBottom: 15
    },
    cardImage: {
        height: hp(25),
        width: wp('90%'),
        resizeMode: 'stretch',
        borderRadius: 11,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0
    },
    textContainer: {
        width: wp('90%'),
        height: hp(8),
        justifyContent: 'center'
    },
    cardText: {
        fontFamily: CS_FONTS.MontserratBold,
        fontSize: 16,
        textAlign: 'center'
    },
    backButtonContainer: {
        position: 'absolute',
        zIndex: 1,
        left: 10,
        top: 10
    },
    backButtonImage: {
        resizeMode: 'contain',
        height: 34,
        width: 34
    }
});
