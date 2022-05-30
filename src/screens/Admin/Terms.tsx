import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { CS_FONTS } from '../../styles/fonts';
import { TermsAndCondition } from '../../utils/constants';

interface TermsProps {
    navigation: any;
}

export const Terms: React.FC<TermsProps> = ({ navigation }) => {
    return (
        <>
            <ScrollView style={styles.container} overScrollMode='never' showsVerticalScrollIndicator={false}>
                <View>
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.backButtonContainer} onPress={() => navigation.goBack()}>
                            <Image source={require('../../asset/icons/adminBack.png')} style={styles.backButton} />
                        </TouchableOpacity>

                        <Text style={styles.headerText}>Terms & Conditions</Text>
                    </View>
                    {TermsAndCondition.map((term, index) => {
                        return (
                            <>
                                <View style={styles.termsContainer}>
                                    <Text style={styles.headerText}>{term.heading}</Text>
                                    {term.subHeading1 && <Text style={{ ...styles.termText }}>{term.subHeading1}</Text>}
                                    {term.subHeading2 && <Text style={{ ...styles.termText }}>{term.subHeading2}</Text>}
                                    {term.subHeading3 && <Text style={{ ...styles.termText }}>{term.subHeading3}</Text>}
                                </View>
                            </>
                        );
                    })}
                </View>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: { padding: 12, marginTop: 10, flexDirection: 'row', justifyContent: 'center' },
    backButtonContainer: {
        position: 'absolute',
        left: 5,
        top: 15
    },
    backButton: {
        resizeMode: 'contain',
        height: 22,
        width: 22
    },
    headerText: {
        fontSize: 17,
        color: '#111111',
        fontFamily: CS_FONTS.MontserratRegular
    },
    termsContainer: {
        padding: 15
    },
    termText: {
        marginTop: 10,
        fontSize: 12,
        color: '#111111',
        fontFamily: CS_FONTS.MontserratRegular
    }
});
