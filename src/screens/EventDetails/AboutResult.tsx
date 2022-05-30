import React, { FunctionComponent, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

import { hpHeight, wpWidth } from '../../utils/constants';
import styles from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import CS_COLORS from '../../styles/colors';
import { CS_FONTS } from '../../styles/fonts';
import { aboutResultData, HomeGalleryData } from '../../utils/helper';
import FilterComponent from './FilterComponent';
import { Results } from './FilterModal/Results';
import SimpleButton from '../../common/SimpleButton';
interface AboutResultProps {
    navigation: any;
}

const AboutResult: React.FC<AboutResultProps> = ({ navigation }) => {

    const renderAboutResultData = (item: any, index: number) => {
        return (
            <View  key={index}>
                <View style={styles.aboutResultContainer} >
                    <View style={styles.aboutResultContentContainer}>
                        <Text style={{ ...styles.textStyle, marginTop: hpHeight(2), fontSize: 30, width: wpWidth(64), }}>{item.name}</Text>

                        <View style={styles.aboutResultLogoContainer}>
                            <View style={styles.medalLogoContainer}>
                                <Image source={item.img1} style={styles.medalLogo} />
                            </View>

                            <Text style={styles.textStyle}>VS</Text>
                            <View style={styles.medalLogoContainerRight}>
                                <Image source={item.img2} style={styles.medalLogoRight} />
                            </View>
                        </View>

                        <View style={styles.pointLogoContainer}>
                            <View style={{ ...styles.pointNumberContainer, }}>
                                <Text style={{ ...styles.textStyle, color: '#693880', fontFamily: CS_FONTS.MontserratExtraBold }}>{item.rankingPointOne}</Text>
                            </View>
                            <View style={styles.pointNumberContainer}>
                                <Text style={{ ...styles.textStyle, color: 'black', fontFamily: CS_FONTS.MontserratExtraBold }}>{item.rankingPointTwo}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.aboutResult}>
            <View style={{ flex: 1, marginBottom: 10 }}>
                {/* Filter Component */}
                <FilterComponent icon="left" navigation={navigation} onPress={() => navigation.navigate('EventsHome')} />
                <FlatList
                    data={aboutResultData}
                    overScrollMode='never'
                    showsVerticalScrollIndicator={false}
                    renderItem={({item,index}) => renderAboutResultData(item,index)}
                />
                <SimpleButton
                    onPress={() => navigation.navigate('RankingResult')}
                    title="Rankings"
                    btnStyle={styles.rankingBtnStyle}
                />
            </View>

        </View>
    );
};

export default AboutResult;
