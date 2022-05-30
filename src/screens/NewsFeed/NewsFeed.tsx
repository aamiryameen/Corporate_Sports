import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { DailyQuotes } from './DailyQuotes';
import { Header } from './Header';
import { Read } from './Read';

interface NewsFeedProps {
    navigation: any;
}

export const NewsFeed: React.FC<NewsFeedProps> = ({ navigation }) => {
    return (
        <>
            <ScrollView overScrollMode='never' showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <Header />
                    <DailyQuotes />
                    <Read navigation={navigation} />
                </View>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});
