import { View, Text, StyleSheet, Dimensions, Image, FlatList, TouchableOpacity, Animated } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { hpHeight, wpWidth } from '../../utils/constants';
import { eventHomeData } from '../../utils/helper';
import { CS_FONTS } from '../../styles/fonts';
import CS_COLORS from '../../styles/colors';
import { normalizeY } from '../../utils/utils';
const { width, height } = Dimensions.get('window');
interface CSEventsProps {
    navigation: any;
    style?: any;
}
export const CSEvents: React.FC<CSEventsProps> = ({ navigation, style }) => {
    const scrollx = useRef(new Animated.Value(0)).current;
    const [dataIndex, setDataIndex] = useState(0);
    const [currentItem, setCurrentItem] = useState<any>(CS_COLORS.PRIMARY);
    const dataSlider = useRef(null);

    useEffect(() => {
        scrollx.addListener(({ value }) => {
            let index = Math.round(value / (width / 1.8));
            setDataIndex(index);
        });
        return () => {
            scrollx.removeAllListeners();
        };
    }, []);

    const renderEvents = (item: any, index: number) => {
        return (
            <TouchableOpacity style={styles.imgContainer} onPress={() => navigation.navigate('EventsTab')} key={index}>
                <Image source={item.img} style={styles.imgStyle} />
                <View style={styles.imageTextContainer}>
                    <Text style={styles.eventTitle}>{item.eventTitle}</Text>
                    <Text style={styles.dateStyle}>19th of February, 2021</Text>
                    <View style={styles.sportImgContainer}>
                        <Text style={styles.dateStyle}>Sports:</Text>
                        <View style={styles.imageContainer}>
                            <Image source={item.football} style={styles.sportsLogo} resizeMode="contain" />
                            <Image source={item.badminton} style={{ ...styles.sportsLogo, marginLeft: wpWidth(2) }} resizeMode="contain" />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    const onViewRef = React.useRef(({ viewableItems }) => {
        setCurrentItem(viewableItems[0].item.bgColor);

    });
    const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 });
    return (
        <View style={{ ...styles.eventContainer, backgroundColor: currentItem, ...style }}>
            <View style={styles.body}>
                <Text style={styles.corporateSportText}>Corporate Sports Events 2022</Text>
                <FlatList
                    onViewableItemsChanged={onViewRef.current}
                    data={eventHomeData}
                    horizontal={true}
                    overScrollMode='never'
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => renderEvents(item, index)}
                    viewabilityConfig={viewConfigRef.current}
                    keyExtractor={(item, index) => (index + 1).toString()}
                    // pagingEnabled
                    scrollEventThrottle={5} />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    eventContainer: {
        marginTop: hpHeight(2),
        height: hpHeight(73.5),
        width: '100%',
        borderRadius: 12
    },
    body: {
        marginHorizontal: '2%',
        marginTop: hpHeight(3)
    },
    titleText: {
        color: 'white',
        fontWeight: '900',
        lineHeight: 30.48,
        fontSize: 25,
        fontStyle: 'normal'
    },
    desText: {
        fontFamily: CS_FONTS.MontserratRegular,
        fontSize: 15,
        fontStyle: 'normal',
        color: 'white',
        marginLeft: wpWidth(1.7)
    },
    imgContainer: {
        height: hpHeight(54),
        width: wpWidth('79%'),
        borderRadius: 11.4,
        marginTop: hpHeight(3),
        backgroundColor: 'white',
        alignSelf: 'center',
        marginHorizontal: wpWidth(1.2)
    },
    imgStyle: {
        height: hpHeight(30),
        width: wpWidth(79),
        borderTopRightRadius: 11.4,
        borderTopLeftRadius: 11.4
    },
    sportImgContainer: {
        flexDirection: 'row',
        marginTop: hpHeight(2.1),
        marginLeft: wpWidth(1),
        alignItems:'center'
    },
    btnStyle: {
        height: hpHeight(6),
        width: wpWidth(67),
        backgroundColor: 'black',
        alignSelf: 'center',
        marginTop: hpHeight(1.9),
        borderRadius: 11,
        alignItems: 'center',
        justifyContent: 'center'
    },
    footballText: {
        height: 22,
        width: 22,
        marginTop: hpHeight(0.5)
    },
    imageTextContainer: {
        marginLeft: wpWidth(5),
        marginTop: hpHeight(3),
        width: wpWidth(58),
       
    },
    imageContainer: {
     
        flexDirection: 'row',
        marginLeft: wpWidth(5)
    },
    sportsLogo: {
        height: 30,
        width: 27,
        marginTop: hpHeight(0.5)
    },
    eventTitle: {
        color: CS_COLORS.BLACK,
        fontFamily: CS_FONTS.MontserratBold,
        lineHeight: 30.48,
        fontSize: 30,
        fontStyle: 'normal'
    },
    dateStyle: {
        color: CS_COLORS.BLACK,
        fontFamily: CS_FONTS.MontserratMedium,
        fontSize: 18,
        fontStyle: 'normal',
        marginLeft: wpWidth(1.7)
    },
    corporateSportText: {
        fontFamily: CS_FONTS.MontserratExtraBold,
        marginLeft: wpWidth(1.7),
        width: '75%',
        color: 'white',
        fontWeight: '900',
        lineHeight: 30.48,
        fontSize: 25,
        fontStyle: 'normal'
        
        
    }
});
export default CSEvents;
