//import liraries
import React, { Component } from 'react';
import { View, Text, FlatList, Image, ScrollView, TouchableOpacity } from 'react-native';
import { hpHeight, wpWidth } from '../../../utils/constants';
import styles from '../styles';
import { CS_FONTS } from '../../../styles/fonts';
import FilterComponent from '../FilterComponent';
import { rankingResult } from '../../../utils/helper';
import WinnerScreen from './Winner';
import SimpleButton from '../../../common/SimpleButton';
import CS_COLORS from '../../../styles/colors';
interface RankingResultProps {
    navigation: any;
}
// create a component
const RankingResult: React.FC<RankingResultProps> = ({ navigation }) => {

    const renderRankingContent = (item: any, index: number) => {
        return (
            <View style={styles.logoPointContainer} >
                <Image source={item.logo} style={{ ...styles.sportLogoStyle, marginTop: hpHeight(2) }} />
                <TouchableOpacity style={{ ...styles.pointsContainer, marginTop: hpHeight(3) }}>
                    <Text style={{ ...styles.textStyle, color: '#000', fontFamily: CS_FONTS.MontserratExtraBold, fontSize: 25 }}>{item.name}</Text>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View style={styles.rankingContainer}>
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: hpHeight(2) }}>
                {/* Filter component */}
                <FilterComponent icon="left" navigation={navigation} />

                <View style={{ ...styles.rankingResultContentContainer }}>
                    <Text style={{ ...styles.textStyle, color: '#7A7878', textAlign: 'left', marginLeft: wpWidth(6), marginTop: hpHeight(2), fontFamily: CS_FONTS.MontserratExtraBold }}>Top 3</Text>
                    <FlatList
                        data={rankingResult}
                        overScrollMode='never'
                        contentContainerStyle={{ height: hpHeight(40) }}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item, index }) => renderRankingContent(item, index)}
                        keyExtractor={(index: any) => index.toString()}
                    />
                    <TouchableOpacity onPress={() => navigation.navigate('Ranking')} style={{ ...styles.btnStyle, marginVertical: hpHeight(2), width: '90%' }}>
                        <Text style={{ ...styles.descriptionStyle, color: CS_COLORS.WHITE }}>View All</Text>
                    </TouchableOpacity>
                </View>
                {/* Winner component */}
                <WinnerScreen navigation={navigation} />

                <SimpleButton
                    onPress={() => navigation.goBack()}
                    title="Results"
                    btnStyle={styles.resultBtnStyle}
                />
            </ScrollView>
        </View>
    );
};

export default RankingResult;
