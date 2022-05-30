import { View, Text, StyleSheet, Image, FlatList, Touchable, TouchableOpacityBase, TouchableOpacity } from 'react-native';
import React from 'react';
import { hpHeight, wpWidth } from '../../utils/constants';
import { weeklySportsData } from '../../utils/helper';
import CS_COLORS from '../../styles/colors';
import { CS_FONTS } from '../../styles/fonts';
import { normalizeY } from '../../utils/utils';
import { MaterialCommunityIcons } from '@expo/vector-icons';
interface ActiveSupportPracticeProps {
    navigation?: any;
}

const ActiveSupportPractice: React.FC<ActiveSupportPracticeProps> = ({ navigation }) => {

    const renderEvents = (item: any, index: number) => {
      
        return (
            <View style={styles.body}>
                <View style={styles.imgContianer}>
                    <Image source={item.img} style={styles.imgStyle} />
                    <View style={styles.imageTextContainer}>
                        <Text style={{ ...styles.eventTitle}}>{item.eventTitle}</Text>
                        <View style={styles.dateTimeTextContainer}>
                        <Text style={{...styles.dateText, color: CS_COLORS.BLACK}}>{item.days}</Text>
                        <Text style={styles.dateText}>{item.time}</Text>
                        </View>
                       
                        <View style={styles.sportImgContainer}>
                            <Text style={{  ...styles.sportText }}>Sports:</Text>
                            <Image source={item.volleyball} style={styles.img} resizeMode="contain" />
                        </View>
                    </View>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.eventContainer}>
            <View style={styles.textContainer}>
                <Text style={{ ...styles.titleText, color: CS_COLORS.BLACK}}>Active Sport {'\n'}Practices</Text>
            </View>
            <FlatList
                style={styles.listContainer}
                contentContainerStyle={styles.listStyle}
                data={weeklySportsData}
                overScrollMode='never'
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => renderEvents(item, index)}
            />
        </View>
    );
};

const styles = StyleSheet.create({

    eventContainer: {
        height: hpHeight(74),
        width: wpWidth(100),
        backgroundColor: '#f4f3f3'
    },
    body: {
        marginHorizontal: wpWidth(2),
        marginTop: hpHeight(2),
        borderRadius: 16
    },
    titleText: {
        color: 'white',
        fontFamily: CS_FONTS.MontserratExtraBold,
        lineHeight: 30.48,
        fontSize: 25,
        fontStyle: 'normal'
    },
    desText: {
        fontFamily: CS_FONTS.MontserratMedium,
        fontSize: 15,
        fontStyle: 'normal',
        color: 'white'
    },
    imgContianer: {
        height: hpHeight(58),
        width: wpWidth(88),
        borderRadius: 15,
        elevation: 4,
        backgroundColor: 'white'
    },
    imgStyle: {
        height: hpHeight(31),
        width: wpWidth(88),
        borderTopRightRadius: 11.4,
        borderTopLeftRadius: 11.4
    },
    sportImgContainer: {
        flexDirection: 'row',
        marginTop: hpHeight(1.4)
        // marginLeft: wpWidth(2)
    },
    textContainer: {
        marginLeft: wpWidth(3),
        marginTop: hpHeight(3),
        width: wpWidth(55)
    },
    img: {
        height: 25,
        width: 25,
        marginTop: hpHeight(0),
        marginLeft: wpWidth(3)
    },
    imageTextContainer: {
        marginLeft: wpWidth(5),
        marginTop: hpHeight(2.8),
        width: wpWidth(74),
    
    },
    listStyle: {
        marginVertical: 4,
        marginRight: 5
    },
    listContainer: {
        marginRight: wpWidth(8)
    },
    eventTitle: {
        color: CS_COLORS.BLACK,
         fontFamily: CS_FONTS.MontserratBold,
         lineHeight: 30.48,
         fontSize: 30,
       fontStyle: 'normal'
    },
    timeText:{
        color: CS_COLORS.PRIMARY,
         fontFamily: CS_FONTS.MontserratMedium 
    },
    sportText: {
        color: CS_COLORS.BLACK, 
        fontFamily: CS_FONTS.MontserratMedium,
         marginTop: hpHeight(0),
         fontSize: 18,
         fontStyle: 'normal',
    },
    dateText:{
        fontFamily: CS_FONTS.MontserratMedium,
        fontSize: 18,
        fontStyle: 'normal',
        color: CS_COLORS.PRIMARY
    },
    dateTimeTextContainer: {
        marginTop: normalizeY(13)
    }
});
export default ActiveSupportPractice;
