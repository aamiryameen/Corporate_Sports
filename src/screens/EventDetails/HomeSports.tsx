//import liraries
import React, { Component } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { hpHeight, wpWidth } from '../../utils/constants';
import { sportsData } from '../../utils/helper';
import styles from './styles';
interface HomeSportsProps {
    navigation: any;
}
// create a component
const HomeSports: React.FC<HomeSportsProps> = (props: any) => {

    const renderSportsData = (item: any, index: number) => {

        return (
            <TouchableOpacity style={styles.dataContainer} key={index} activeOpacity={1} onPress={() => props.navigation.navigate('SportsDetails')}>
                <Image source={item.img} style={styles.imgStyle} />
                <View style={{ ...styles.textContainer, marginTop: hpHeight(3) }}>
                    <Text style={{ ...styles.textStyle }}>{item.name}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.sportText}>Sports</Text>
            <View style={{ flex: 1 }}>
                <FlatList
                overScrollMode='never'
                    style={styles.listStyle}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    data={sportsData}
                    renderItem={({ item, index }) => renderSportsData(item, index)} />
            </View>
        </View>
    );
};

export default HomeSports;
