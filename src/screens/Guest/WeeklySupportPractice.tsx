import { View, Text, StyleSheet, Image, FlatList, Touchable, TouchableOpacityBase, TouchableOpacity } from 'react-native';
import React from 'react';
import { hpHeight, wpWidth } from '../../utils/constants';
import { weeklySportsData } from '../../utils/helper';
import { CS_FONTS } from '../../styles/fonts';
import CS_COLORS from '../../styles/colors';

interface WeeklySupportPracticeProps {
    navigation: any;
}

export const WeeklySupportPractice: React.FC<WeeklySupportPracticeProps> = ({ navigation }) => {

    const renderEvents = (item: any, index: number) => {
        return (
            <>
                <View style={styles.body} key={index}>
                    <View style={styles.imgContianer}>
                        <Image source={item.img} style={styles.imgStyle} />

                        <View style={styles.textImgContainer}>
                            <Text style={{ ...styles.eventTitle }}>{item.eventTitle}</Text>
                            <Text style={{ ...styles.desText, ...styles.dateStyle }}>{item.days}</Text>
                            <Text style={{ ...styles.desText, ...styles.timeStyle }}>{item.time}</Text>
                            <View style={styles.sportImgContainer}>
                                <Text style={{ ...styles.desText, ...styles.sportsText }}>Sports:</Text>
                                <Image source={item.volleyball} style={styles.volleyballImgStyle} resizeMode="contain" />
                            </View>
                        </View>
                    </View>
                </View>
            </>
        );
    };

    return (
        <View style={styles.eventContainer}>
            <View style={{ marginHorizontal: wpWidth(4) }}>
                <View style={styles.textContainer}>
                    <Text style={{  ...styles.weeklySportsText }}>Weekly Sport Practices</Text>
                    <Text style={{ ...styles.desText, color: CS_COLORS.BLACK,  }}>
                        We organize weekly practice and training sessions for individuals or teams who want to play their favorite sports and meet like-minded people who share their passion.
                    </Text>
                </View>
                <FlatList
                    data={weeklySportsData}
                    horizontal={true}
                    overScrollMode='never'
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => renderEvents(item, index)}
                />
                <TouchableOpacity style={{ ...styles.btnStyle, backgroundColor: CS_COLORS.PRIMARY }} onPress={() => navigation.navigate('SentInvitation')}>
                    <Text style={{ ...styles.desText, ...styles.inviteHr }}>Send an invite to your HR</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    eventContainer: {
        flex: 1,
        width: wpWidth(100),
        backgroundColor:'#f4f3f3'
    },
    body: {
        marginHorizontal: wpWidth(2),
        marginVertical: hpHeight(3),
        borderRadius: 15
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
        color: 'white'
    },
    imgContianer: {
        height: hpHeight(54),
        width: wpWidth(88),
        borderRadius: 11.4,
        elevation: 2,
        marginTop: hpHeight(0),
        backgroundColor: 'white'
    },
    imgStyle: {
        height: hpHeight(29),
        width: wpWidth(88),
        borderTopRightRadius: 11.4,
        borderTopLeftRadius: 11.4
    },
    sportImgContainer: {
        flexDirection: 'row',
        marginTop: hpHeight(1.3)
        // marginLeft: wpWidth(2)
    },
    btnStyle: {
        height: hpHeight(7),
        width: wpWidth(92),
        backgroundColor: 'black',
        alignSelf: 'center',
        marginTop: hpHeight(1.2),
        borderRadius: 11.4,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: hpHeight(2),
        elevation: 2
    },
    textContainer: {
        marginHorizontal: wpWidth(2.4),
        marginTop: hpHeight(3)
    },
    volleyballImgStyle: {
        height: 25,
        width: 25,
        marginTop: hpHeight(0),
        marginLeft: wpWidth(3)
    },
    textImgContainer: {
        marginLeft: wpWidth(6),
        marginTop: hpHeight(2)
    },
    eventTitle: {
        color: CS_COLORS.BLACK,
        fontFamily: CS_FONTS.MontserratBold,
        lineHeight: 30.48,
        fontSize: 30,
        
    },
    dateStyle: {
        color: CS_COLORS.BLACK,
        fontSize: 18,
        fontFamily: CS_FONTS.MontserratMedium,
        marginTop: hpHeight(1.5)
    },
    timeStyle: {
        color: CS_COLORS.PRIMARY,
        fontFamily: CS_FONTS.MontserratMedium
    },
    sportsText: {
        color: CS_COLORS.BLACK,
        fontFamily: CS_FONTS.MontserratMedium,
        marginTop: hpHeight(0.3)
    },
    inviteHr: {
        color: CS_COLORS.WHITE,
        fontFamily: CS_FONTS.MontserratBold
    },
    weeklySportsText: {
        color: CS_COLORS.BLACK,
        fontFamily: CS_FONTS.MontserratExtraBold,
        width: wpWidth(55),
        lineHeight: 30.48,
        fontSize: 25,
        
    }
});
export default WeeklySupportPractice;
