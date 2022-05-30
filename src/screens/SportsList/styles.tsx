import { ViewStyle, TextStyle, StyleSheet, ImageStyle } from 'react-native';
import { CS_FONTS } from '../../styles/fonts';
interface Style {
    container: ViewStyle;
    Header: ViewStyle;
    rowContainer: ViewStyle;
    buttonContainer: ViewStyle;
    ListContainer: ViewStyle;
    tab: ViewStyle;
    ImageContainer: ViewStyle;
    image: ImageStyle;
    TitleContainer: ViewStyle;
    title: TextStyle;
    SelectInfo: ViewStyle;
    SelectedView: ViewStyle;
    HeaderText: TextStyle;
}

export default StyleSheet.create<Style>({
    container: {
        flex: 1,
        backgroundColor: 'red'
    },

    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    Header: {
        alignItems: 'center',
        marginTop: 36,
        marginBottom: 37,
        justifyContent: 'center'
    },
    HeaderText: {
        fontFamily: CS_FONTS.MontserratMedium,
        fontWeight: '500',
        fontSize: 20,
        lineHeight: 33,
        color: '#121212',
        textAlign: 'center'
    },
    buttonContainer: {
        marginTop: 52
    },
    ListContainer: {
        width: '100%',
        height: 56,
        backgroundColor: 'transparent',
        alignSelf: 'center',
        borderRadius: 16,
        // justifyContent: 'center',
        flexDirection: 'row'
    },
    tab: {
        width: '80%',
        height: 56,
        backgroundColor: '#E3E3E3',
        alignSelf: 'center',
        borderRadius: 16,
        // justifyContent: 'center',
        flexDirection: 'row'
    },
    ImageContainer: {
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        height: 34,
        width: 34
    },
    TitleContainer: {
        width: '80%',
        paddingLeft: 18,
        justifyContent: 'center'
    },
    title: {
        fontFamily: CS_FONTS.ABeeZeeRegular,
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 33,
        color: '#3C434A'
    },
    SelectInfo: {
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    SelectedView: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: '#E37C00',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
