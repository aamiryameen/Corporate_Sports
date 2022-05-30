import React, { Component } from 'react';
import { View, FlatList, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { HomeGalleryData } from '../../utils/helper';
import CS_COLORS from '../../styles/colors';
interface HomeGalleryProps {
    navigation: any;
}
// create a component
const HomeGallery: React.FC<HomeGalleryProps> = ({ navigation }) => {

    const renderGalleryData = (item: any, index: number) => {
        return (
            <TouchableOpacity style={styles.galleryContainer} key={index} onPress={() => navigation.navigate('ImageDetails', { item: item.item.img })}>
                <Image source={item.item.img} style={styles.galleryImgStyle} resizeMode="contain" />
            </TouchableOpacity>
        );
    };

    return (
        <View style={{flex: 1, backgroundColor: CS_COLORS.SCREEN_BACKGROUND}}>
            <FlatList
                numColumns={3}
                overScrollMode='never'
                data={HomeGalleryData}
                renderItem={renderGalleryData}
            />
        </View>
    );
};

export default HomeGallery;
