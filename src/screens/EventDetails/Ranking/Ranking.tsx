//import liraries
import React, { Component } from 'react';
import { View, Text, FlatList, Image, ScrollView, TouchableOpacity } from 'react-native';
import { hpHeight, wpWidth } from '../../../utils/constants';
import styles from '../styles';
import { CS_FONTS } from '../../../styles/fonts';
import FilterComponent from '../FilterComponent';
import { rankingData } from '../../../utils/helper';
interface RankingProps {
    navigation: any;
}
// create a component
const Ranking: React.FC<RankingProps> = ({ navigation }) => {
   
    const renderRankingContent = (item: any, index: number) => {
        return (
            <View style={styles.logoPointContainer}>
                <Image source={item.item.logo} style={{ ...styles.sportLogoStyle, marginTop: hpHeight(3) }} />
                <TouchableOpacity style={styles.pointsContainer}>
                    <Text style={{ ...styles.textStyle, color: '#000', fontFamily: CS_FONTS.MontserratExtraBold, fontSize: 25 }}>{item.item.name}</Text>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View style={styles.rankingContainer}>
            <ScrollView showsVerticalScrollIndicator={false} overScrollMode='never'>
                {/*  filter component */}
                <FilterComponent icon="left" navigation={navigation} />
                <Text style={{ ...styles.textStyle, fontSize: 30, textAlign: 'left', marginLeft: wpWidth(4), marginVertical: hpHeight(2) }}>Ranking</Text>

                <View style={styles.rankingContentContainer}>
                    <Text style={{ ...styles.textStyle, color: '#7A7878', textAlign: 'left', marginLeft: wpWidth(6), marginTop: hpHeight(2) }}>Top 3</Text>
                    <FlatList
                    overScrollMode='never'
                        data={rankingData}
                        renderItem={renderRankingContent}
                    />
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ ...styles.btnStyle, marginVertical: hpHeight(2) }}>
                        <Text style={{ ...styles.descriptionStyle, color: 'white' }}>Back</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

export default Ranking;
