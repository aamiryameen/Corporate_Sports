import React, { FunctionComponent } from 'react';
import { View, StyleSheet, Text, Platform, FlatList, TouchableOpacity, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CS_COLORS from '../../styles/colors';
import { CS_FONTS } from '../../styles/fonts';
import { GELLERY_IMAGES } from '../../utils/constants';
interface GalleryProps{
    navigation: any
}

const Gallery: React.FC<GalleryProps> = ({navigation}) => {
    
    const renderListView = (index: any, item: any) => {
        return (
            <TouchableOpacity activeOpacity={0.5}  
            key={index}
            onPress={() => navigation.navigate('ImageDetails', {item: item.image})}
            >
                <Image source={item.image} style={styles.image} />
            </TouchableOpacity>
        );
    };
    return (
        <View style={styles.container}>
           
            <Text style={styles.title}>My Pictures</Text>
            <FlatList
                numColumns={3}
                data={GELLERY_IMAGES}
                keyExtractor={(item, index) => (index + 1).toString()}
                showsVerticalScrollIndicator={false}
                renderItem={({ index, item }) => renderListView(index, item)}
            />
        </View>
    );
};

export default Gallery;

const styles = StyleSheet.create({
    container: {
        width: wp(93),
        alignSelf: 'center',
        marginTop: hp(6)
    },
    title: {
        fontFamily: CS_FONTS.MontserratExtraBold,
        color: CS_COLORS.TEXT_DARKBLACK,
        fontSize: 25,
        // fontWeight: Platform.OS === 'ios' ? '900' : 'bold',
        marginLeft: 6,
        marginBottom: hp(3)
    },
    ListContainer: {
        height: hp(16),
        width: wp(30),
        borderWidth: 3,
        borderColor: '#fff'
    },
    image: {
        height: hp(16),
        width: wp(31),
        resizeMode: 'contain',
        borderWidth: 1.5,
        borderColor: '#fff'
    }
});
