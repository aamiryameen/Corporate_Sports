import { View, Text, StyleSheet, Dimensions, Image, FlatList, TouchableOpacity, Animated } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { hpHeight, wpWidth } from '../../utils/constants';
import { eventData } from '../../utils/helper';
import { CS_FONTS } from '../../styles/fonts';
import CS_COLORS from '../../styles/colors';
import { normalizeX, normalizeY } from '../../utils/utils';
const { width, height } = Dimensions.get('window');
interface CSEventsProps {
    navigation: any;
    style?: any;
}
export const CSEvents: React.FC<CSEventsProps> = ({ navigation, style }) => {

    const scrollx = useRef(new Animated.Value(0)).current;
    const [dataIndex, setDataIndex] = useState(0);
    const [currentItem, setCurrentItem] = useState<any>('#15B5D0');

    useEffect(() => {
        try {
            scrollx.addListener(({ value }) => {
                let index = Math.round(value / Math.round(width / 1.8));
                setDataIndex(index);
            });
            return () => {
                scrollx.removeAllListeners();
            };
        } catch (error) {
            console.log(error);
        }
    }, [scrollx, dataIndex]);

    const renderEvents = (item: any, index: number) => {

        return (
            <TouchableOpacity activeOpacity={0.7} style={styles.imgContainer} onPress={() => navigation.navigate('EventsTab')}>
                <Image source={item.img} style={styles.imgStyle} />

                <View style={styles.textContainer}>
                    <Text style={{...styles.sportTitle }}>Winter Tournament</Text>
                    <Text style={{...styles.dateStyle}}>19th of February, 2021</Text>

                    <View style={styles.sportImgContainer}>
                        <Text style={{...styles.dateStyle }}>Sports:</Text>

                        <View style={styles.imageContainer}>
                            <Image source={item.football} style={styles.logoStyle} resizeMode="contain" />
                            <Image source={item.badminton} style={{...styles.logoStyle, marginLeft: normalizeX(3)}} resizeMode="contain" />
                        </View>
                    </View>
                </View>

            </TouchableOpacity>
        );
    };

    const onViewRef = React.useRef(({ viewableItems }) => {
        setCurrentItem(viewableItems[0].item.bgColor);
        // Use viewable items in state or as intended
    });
    const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 });

    return (
        <View style={{ ...styles.eventContainer, backgroundColor: currentItem, ...style }}>
            <View style={styles.body}>
                <Text style={styles.corporateSportText}>Corporate Sports Events 2022</Text>
                <Text style={{ ...styles.desText, marginTop: hpHeight(2) }}>We organize single or multi-sports, industry or company-specific, indoor, or outdoor tournaments, all year round.</Text>

                <FlatList
                    data={eventData}
                    onViewableItemsChanged={onViewRef.current}
                    horizontal={true}
                    overScrollMode='never'
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => renderEvents(item, index)}
                    viewabilityConfig={viewConfigRef.current}
                    keyExtractor={(item, index) => (index + 1).toString()}
                    scrollEventThrottle={5}
                />
                <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btnStyle}>
                    <Text style={{...styles.desText, fontFamily: CS_FONTS.MontserratMedium, fontSize: 17}}>View All Events</Text>
                </TouchableOpacity>
                </View>
           
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    eventContainer: {
        marginTop: hpHeight(4),
        height: hpHeight(99),
        width: '100%',
    },
    body: {
        marginHorizontal: '2%',
        marginTop: hpHeight(5)
    },
    titleText: {
        color: 'white',
        fontWeight: '900',
        lineHeight: 30.48,
        fontSize: 25,
        fontFamily: CS_FONTS.MontserratBold
    },
    desText: {
        fontFamily: CS_FONTS.MontserratRegular,
        fontSize: 15,
        color: '#FFFFFF',
        marginLeft: wpWidth(1.7)
    },
    imgContainer: {
        height: hpHeight(58),
        width: wpWidth(88),
        borderRadius: 11.4,
        marginTop: hpHeight(3),
        backgroundColor: '#fff',
        alignSelf: 'center',
        marginHorizontal: wpWidth(1.2)
    },
    imgStyle: {
        height: hpHeight(33),
        width: wpWidth(88),
        borderTopRightRadius: 11.4,
        borderTopLeftRadius: 11.4
    },
    sportImgContainer: {
        flexDirection: 'row',
        marginTop: hpHeight(4),
        marginLeft: wpWidth(1),
        alignItems: 'center'
    },
    btnStyle: {
        height: hpHeight(6.5),
        width: wpWidth(80),
        backgroundColor: 'black',
        alignSelf: 'center',
        borderRadius: 11,
        // marginTop: normalizeY(30),
        alignItems: 'center',
        justifyContent: 'center'
    },
    footballText: {
        height: 22,
        width: 22,
        marginTop: hpHeight(0.5)
    },
    textContainer: {
        marginLeft: wpWidth(6),
        marginTop: hpHeight(4),
        width: wpWidth(55)
    },
    logoStyle: {
        height: 22,
        width: 22,
        marginTop: hpHeight(0.5)
    },
    imageContainer: {
        marginTop: hpHeight(-0.6),
        flexDirection: 'row',
        marginLeft: wpWidth(2)
    },
corporateSportText: {
    fontFamily: CS_FONTS.MontserratExtraBold, 
    marginLeft: wpWidth(1.7), 
    width: wpWidth(70),
    lineHeight: 30.48,
    fontSize: 25,
    color: CS_COLORS.WHITE
},
sportTitle: {
    color: CS_COLORS.BLACK,
     fontFamily: CS_FONTS.MontserratBold,
     lineHeight: 30.48,
     fontSize: 30,
},
dateStyle: {
    color: CS_COLORS.BLACK,
     fontFamily: CS_FONTS.MontserratMedium,
     fontSize: 18,
     marginLeft: wpWidth(1.7)
},
btnContainer: {
    height: normalizeY(114),
     alignItems: 'center',
      justifyContent: 'center'
    }
});
export default CSEvents;
