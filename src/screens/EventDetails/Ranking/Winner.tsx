
//import liraries
import React, { Component } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { hpHeight, wpWidth } from '../../../utils/constants';
import styles from '../styles';
import { winnerData } from '../../../utils/helper';
import { defaultStyle } from '../../../styles/index';
interface WinnerProps {
    navigation: any
}

const WinnerScreen: React.FC<WinnerProps> = ({ navigation }) => {

    const renderWinnerData = (item: any, index: number) => {
        return (
            <View key={index} style={styles.winnerContainer} >

                <View style={styles.winnerTextContainer}>
                    <Text style={{ ...styles.textStyle, fontSize: 30 }}>{item.name}</Text>
                    <Text style={{ ...styles.textStyle, color: '#7A7878', fontSize: 20 }}>{item.winner}</Text>
                    <View style={styles.imageContainer}>
                        <Image source={item.logo} style={{ ...styles.imgStyle, height: 244, width: 244 }} resizeMode="contain" />
                    </View>

                </View>
            </View>
        )
    }

    return (
        <>
            <FlatList
            overScrollMode='never'
                data={winnerData}
                renderItem={ ({item, index}) => renderWinnerData(item, index)}
            />
        </>
    );
};

export default WinnerScreen;
