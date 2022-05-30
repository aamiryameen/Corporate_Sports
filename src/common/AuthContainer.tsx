
import React, { ReactElement } from 'react';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import colors from '../styles/colors'
import { TabBar } from 'react-native-tab-view';
interface LayoutProps {
    children: ReactElement | ReactElement[]
}

function AuthContainer({ children }: LayoutProps) {

    return (
        <KeyboardAvoidingView style={styles.container}  >
            <View style={styles.radiusLayer} />
            <View style={styles.contentContainer}>
                {children}
            </View>
        </KeyboardAvoidingView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE,
        paddingTop:'10%'
    },
    radiusLayer: {
        marginHorizontal: "5%",
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        backgroundColor: '#f4f3f3',
        top: 5,
        height: 15
    },
    contentContainer: {
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        backgroundColor: colors.GRAY,
        flex: 1,
        paddingHorizontal: "5%",
    },
    headingTextStyle: {
        fontSize: 24,
        textAlign: "center",
        color: colors.WHITE
    },

    textContainer: {
        marginVertical: "10%",
        // alignItems: "center",
        // justifyContent: "center",
    },
    buttonContainer: {
        marginTop: "10%",
    },
    rowContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    forgotPassword: {
        color: "#BDBDBD",
    }

});


export default AuthContainer;