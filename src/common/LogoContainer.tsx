import React, { ReactElement } from 'react';
import { View, StyleSheet, Image,  } from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../styles/colors';
interface LayoutProps {
    children: ReactElement | ReactElement[];
}

function LogoContainer({ children }: LayoutProps) {
    return (
        <View style={styles.container}>
            <Image source={require('../asset/images/logo.png')} style={styles.image} />
            <View style={styles.radiusLayer} />
            
            <View style={styles.contentContainer}>{children}</View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE,
        paddingTop: hp(6),
    },
    radiusLayer: {
        marginHorizontal: '5%',
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        backgroundColor: '#f4f3f3',
        top: 25,
        height: 35,

    },
    contentContainer: {
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        backgroundColor: colors.GRAY,
        flex: 1,
        paddingHorizontal: '5%'
    },
    headingTextStyle: {
        fontSize: 24,
        textAlign: 'center',
        color: 'white'
    },

    textContainer: {
        marginVertical: '10%'
        // alignItems: "center",
        // justifyContent: "center",
    },
    buttonContainer: {
        marginTop: '10%'
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    forgotPassword: {
        color: '#BDBDBD'
    },
    image: {
        width: wp(45),
        height: hp(18),
        resizeMode: 'contain',
        alignSelf: 'center'
    }
});

export default LogoContainer;
