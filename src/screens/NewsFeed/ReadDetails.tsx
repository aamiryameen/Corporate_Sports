import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { ReadCard } from '../../components/ReadCard';
import { CS_FONTS } from '../../styles/fonts';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import CS_COLORS from '../../styles/colors';
import { FEED_DETAILS } from '../../utils/constants';

interface ReadDetailsProps {
    navigation: any;
}

export const ReadDetails: React.FC<ReadDetailsProps> = ({ navigation }) => {
    const { item } = useRoute().params;
    
    return (
        <>
            <ScrollView overScrollMode='never' showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <ReadCard item={item} backButton={true} navigation={navigation} onPress={() => {}} />
                    {FEED_DETAILS.map((feed) => {
                        return (
                            <View style={styles.textContainer} key={feed.id}>
                                {feed.heading && <Text style={styles.heading}>{feed.heading}</Text>}
                                <Text style={styles.description}>{feed.description}</Text>
                            </View>
                        );
                    })}
                </View>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 15
    },
    textContainer: {
        width: wp('90%'),
        alignSelf: 'center',
        marginBottom: 20
    },
    heading: {
        fontSize: 16,
        color: CS_COLORS.TEXT_DARKGREY,
        fontFamily: CS_FONTS.MontserratBold,
        marginTop: 12
    },
    description: {
        fontSize: 16,
        fontFamily: CS_FONTS.MontserratRegular,
        color: CS_COLORS.TEXT_LIGHT,
        marginTop: 10
    }
});
