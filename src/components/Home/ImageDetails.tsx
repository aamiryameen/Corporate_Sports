import React,{useState} from 'react'
import { useRoute } from '@react-navigation/native';
import { View, Text, Image, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import CS_COLORS from '../../styles/colors';
interface ImageDetailsProps {
    navigation: any
}

const ImageDetails: React.FC<ImageDetailsProps> = ({ navigation }) => {

    const { item } = useRoute().params;

    return (
        <View style={styles.container}>
            <Image source={item} style={styles.imgStyle} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: CS_COLORS.BLACK,
        justifyContent: 'center'
    },
    imgStyle: {
        height: '50%',
        width: '100%'
    }
})


export default ImageDetails
