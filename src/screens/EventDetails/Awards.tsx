import React, { Component } from 'react';
import { View, Text, FlatList, Image, ScrollView } from 'react-native';
import { hpHeight, wpWidth } from '../../utils/constants';
import styles from './styles';
import { CS_FONTS } from '../../styles/fonts';
import { normalizeY } from '../../utils/utils';
interface AwardsProps {
    navigation: any,
    imgSource: any
}
// create a component
const Awards: React.FC<AwardsProps> = ({ navigation, imgSource }) => {

return (
    <>
    <View style={{ marginTop: normalizeY(8)}}>
    <ScrollView style={{}} showsVerticalScrollIndicator={false} overScrollMode='never'>
        <View style={styles.awardsContainer}>
            <View style={styles.awardContentContainer}>
                <View style={{}}>
                    <Image source={imgSource} style={styles.medalLogoStyle} />
                </View>
                <View style={{ marginTop: hpHeight(1) }}>
                    <Text style={{...styles.textStyle, textAlign: 'left', marginLeft: wpWidth(4), fontSize: 18}}>Gold Medals</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', }}>
                        <Text style={{...styles.descriptionStyle, marginTop: 3, fontFamily: CS_FONTS.MontserratRegular}}>Total </Text>
                        <Text style={{ ...styles.textStyle, color: '#15B5D0', fontSize: 18 }}>1,500 AED</Text>
                    </View>
                </View>
            </View>
        </View>
        </ScrollView>
    </View>
</>
)
};

export default Awards;
