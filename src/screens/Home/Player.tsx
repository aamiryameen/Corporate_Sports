import { View, Text, StyleSheet, FlatList, Image, ImageStyle } from 'react-native';
import React from 'react';
import { hpHeight, wpWidth } from '../../utils/constants';
import { playerData } from '../../utils/helper';
import { CS_FONTS } from '../../styles/fonts';
import CS_COLORS from '../../styles/colors';
interface PlayerProps {
    navigation?: any;
}

const Player: React.FC<PlayerProps> = ({ navigation }) => {

    const renderPlayers = (item: any, index: number) => {
        return (
            <View style={styles.boxContainer} key={index}>
                <View style={styles.textContainer}>
                    <Text style={styles.playerText}>{item.player}</Text>
                    <Text style={{ ...styles.titleText, color: 'black', fontFamily: CS_FONTS.MontserratExtraBold }}>{item.name}</Text>
                    <View style={styles.sportImgContainer}>
                        <Text style={{ ...styles.desText, color: 'black', fontFamily: CS_FONTS.MontserratMedium }}>Plays:</Text>
                        <View style={styles.imageContainer}>
                            <Image source={item.football} style={styles.ImageStyle} resizeMode="contain" />
                            <Image source={item.badminton} style={{ ...styles.ImageStyle, marginLeft: wpWidth(1) }} resizeMode="contain" />
                        </View>
                    </View>
                </View>
                <View style={styles.logoContainer}>
                    <Image source={item.logo} style={styles.logoStyle} />
                </View>
            </View>
        );
    };

    return (
        <FlatList
            horizontal={true}
            data={playerData}
            overScrollMode='never'
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => renderPlayers(item, index)}
        />
    );
};

const styles = StyleSheet.create({
    container: {},
    boxContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: hpHeight(16),
        width: wpWidth(90),
        borderRadius: 11.4,
        backgroundColor: 'white',
        elevation: 4,
        marginBottom: 4,
        marginTop: hpHeight(3),
        marginHorizontal: 5
    },
    textContainer: {
        marginLeft: wpWidth(2),
        marginTop: hpHeight(1)
    },
    logoContainer: {},
    sportImgContainer: {
        flexDirection: 'row',
        marginTop: hpHeight(1)
        // marginLeft: wpWidth(2)
    },
    desText: {
        fontWeight: '400',
        fontSize: 15,
        fontStyle: 'normal',
        color: 'white'
    },
    logoStyle: {
        height: 70,
        width: 70,
        marginTop: hpHeight(2.1),
        marginRight: wpWidth(2)
    },
    titleText: {
        color: 'white',
        fontWeight: '900',
        lineHeight: 30.48,
        fontSize: 25,
        fontStyle: 'normal'
    },
    playerText: {
        fontFamily: CS_FONTS.MontserratRegular,
        color: CS_COLORS.LIGHT_BLACK,
        fontSize: 12
    },
    imageContainer: {
        marginTop: hpHeight(-0.6),
        flexDirection: 'row',
        marginLeft: wpWidth(2)
    },
    ImageStyle: {
        height: 22,
        width: 22,
        marginTop: hpHeight(0.5)
    }
});

export default Player;
