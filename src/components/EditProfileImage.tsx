import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

interface EditProfileImageProps {}

export const EditProfileImage: React.FC<EditProfileImageProps> = ({}) => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <TouchableOpacity>
                        <Image source={require('../asset/images/candidate.png')} style={styles.image} />
                        <View style={styles.iconContainer}>
                            <Image source={require('../asset/icons/editPhoto.png')} style={styles.icon} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        borderRadius: 90,
        borderColor: '#AAAAAA',
        borderWidth: 1,
        alignSelf: 'center',
        backgroundColor: 'white',
        marginTop: 20
    },
    imageContainer: {
        width: 150,
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        zIndex: 1
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        overflow: 'hidden'
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: 'white',
        height: 24,
        width: 24,
        position: 'absolute',
        bottom: 10,
        right: 10,
        zIndex: 2
    },
    icon: {
        width: 30,
        height: 30,
        resizeMode: 'contain'
    }
});
