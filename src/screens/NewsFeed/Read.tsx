import React from 'react';
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { ReadCard } from '../../components/ReadCard';
import { CS_FONTS } from '../../styles/fonts';
import { NEWSFEED_READ } from '../../utils/constants';

interface ReadProps {
    navigation: any;
}

export const Read: React.FC<ReadProps> = ({ navigation }) => {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.headingText}>Read</Text>

                <FlatList
                    data={NEWSFEED_READ}
                    nestedScrollEnabled
                    overScrollMode='never'
                    renderItem={({ item }) => {
                        return <ReadCard item={item} navigation={navigation} backButton={false} onPress={() => navigation.navigate('ReadDetails', { item })} />;
                    }}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={() => {
                        return <View style={{ height: 10 }} />;
                    }}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {},
    headingText: {
        fontSize: 25,
        padding: 20,
        fontFamily: CS_FONTS.MontserratExtraBold
    }
});
