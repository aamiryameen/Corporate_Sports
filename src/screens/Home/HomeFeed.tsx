import React, { FunctionComponent } from 'react';
import { View, StyleSheet, StatusBar, ScrollView, LogBox } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Header from '../../components/Home/Header';
import Shield from '../../components/Home/Shield';

import Gellery from '../../components/Home/Gellery';
import CS_COLORS from '../../styles/colors';
import Goals from '../../components/Home/Goals';
import HomeGallery from '../EventDetails/HomeGallery';

interface HomeFeed {
    navigation: any;
}

const HomeFeed: React.FC<HomeFeed> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={CS_COLORS.SCREEN_BACKGROUND} />
            <ScrollView style={{ flex: 1 }} overScrollMode='never' showsVerticalScrollIndicator={false}> 
                <Header navigation={navigation} />
                <Goals />
                <Shield />
                <Gellery navigation={navigation} />
                <View style={{ height: 50 }}></View>
            </ScrollView>
        </View>
    );
};

export default HomeFeed;

const styles = StyleSheet.create({
    container: {
        backgroundColor: CS_COLORS.SCREEN_BACKGROUND,
        flex: 1
    }
});
