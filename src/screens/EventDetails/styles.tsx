import { ViewStyle, TextStyle, StyleSheet, ImageStyle } from 'react-native';
import { CS_FONTS, FontSizes, FontWeights } from '../../styles/fonts';
import { hpHeight, wpWidth } from '../../utils/constants';
import colors from '../../styles/colors';
import { normalizeX, normalizeY } from '../../utils/utils';
import CS_COLORS from '../../styles/colors';
interface Style {
    container?: ViewStyle;
    body?: ViewStyle;
    sportText?: ViewStyle;
    dataContainer?: ViewStyle;
    imgContainer?: ViewStyle;
    imgStyle?: ViewStyle;
    textStyle?: ViewStyle;
    textContainer?: ViewStyle;
    sportsDetailsContainer?: ViewStyle;
    sportsDetailsBody?: ViewStyle;
    sportsDetailsImgStyle?: ViewStyle;
    textLogoContainer?: ViewStyle;
    detailSportsDataContainer?: ViewStyle;
    sportLogoStyle?: ViewStyle;
    descriptionStyle?: ViewStyle;
    awardsContainer?: ViewStyle;
    awardContentContainer?: ViewStyle;
    medalLogo?: ViewStyle;
    btnStyle?: ViewStyle;
    backIconContainer?: ViewStyle;
    filterContainer?: ViewStyle;
    filterContentContainer?: ViewStyle;
    filterContentStyle?: ViewStyle;
    rankingContainer?: ViewStyle;
    rankingBody?: ViewStyle;
    rankingContentContainer?: ViewStyle;
    logoPointContainer?: ViewStyle;
    pointsContainer?: ViewStyle;
    rankingResultContentContainer?: ViewStyle;
    winnerContainer?: ViewStyle;
    galleryContainer?: ViewStyle;
    galleryImgStyle?: ViewStyle;
    aboutResult?: ViewStyle;
    aboutResultContainer?: ViewStyle;
    aboutResultContentContainer?: ViewStyle;
    aboutResultLogoContainer?: ViewStyle;
    pointNumberContainer?: ViewStyle;
    medalLogoContainer?: ViewStyle;
    medalLogoContainerRight?: ViewStyle;
    medalLogoRight?: ViewStyle;
    rankingBtnStyle?: ViewStyle
    pointLogoContainer?: ViewStyle
    medalLogoStyle?: ViewStyle
    sportsLogo?: ViewStyle
    iconContainer?: ViewStyle,
    titleContainer?: ViewStyle,
    resultBtnStyle?: ViewStyle,
    winnerTextContainer?: ViewStyle,
    imageContainer?: ViewStyle
    filterIcon?: ViewStyle,
    listStyle?: ViewStyle,
    findResultText?: ViewStyle

}

export default StyleSheet.create<Style>({
    container: {
        flex: 1,
        backgroundColor: CS_COLORS.SCREEN_BACKGROUND
    },
    body: {
        marginHorizontal: wpWidth(0.2),
        flex: 1
    },
    sportText: {
        fontFamily: CS_FONTS.MontserratBold,
        fontSize: 32,
        marginTop: hpHeight(2),
        marginLeft: wpWidth(4.2)
    },
    dataContainer: {
        height: 200,
        width: '46%',
        borderRadius: 11.5,
        marginVertical: hpHeight(0.8),
        elevation: 3,
        marginLeft: 10,
        backgroundColor: colors.WHITE
    },
    imgStyle: {
        height: 130,
        width: '100%',
        borderTopLeftRadius: 11.5,
        borderTopRightRadius: 11.5
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: hpHeight(4)
    },
    textStyle: {
        fontFamily: CS_FONTS.PoppinsExtraBold,
        fontSize: 16,
        textAlign: 'center'
    },
    sportsDetailsContainer: {
        backgroundColor: colors.SCREEN_BACKGROUND,
        flex: 1,
        borderRadius: 12,
    },
    sportsDetailsBody: {
        marginHorizontal: 5,
        elevation: 3,
        backgroundColor: colors.WHITE,
        flex: 1,
        width: '94%',
        alignSelf: 'center',
        marginTop: hpHeight(2),
        borderRadius: 11.5355,
        marginBottom: hpHeight(1)
    },
    sportsDetailsImgStyle: {
        height: hpHeight(25),
        width: '100%',
        borderTopLeftRadius: 11.5,
        borderTopRightRadius: 11.5
    },
    detailSportsDataContainer: {
        marginHorizontal: wpWidth(2)
    },
    textLogoContainer: {
        flexDirection: 'row',
        marginTop: hpHeight(3)
    },
    sportLogoStyle: {
        height: 70,
        width: 70
    },
    sportsLogo: {
        height: 40,
        width: 40
    },
    descriptionStyle: {
        color: colors.INPUT_BACKGROUND,
        fontFamily: CS_FONTS.MontserratMedium,
        fontSize: 16,
        marginLeft: wpWidth(4),
        lineHeight: 19.5
    },
    awardsContainer: {
        height: hpHeight(15),
        width: '92%',
        backgroundColor: colors.LIGHT_GRAY,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    awardContentContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 324
    },
    medalLogo: {
        height: hpHeight(18),
        width: hpHeight(18),
    },
    medalLogoStyle: {
        height: hpHeight(10),
        width: hpHeight(10)
    },
    btnStyle: {
        height: normalizeY(40),
        width: wpWidth(86),
        borderRadius: 12,
        backgroundColor: '#15B5D0',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: hpHeight(6)
    },
    backIconContainer: {
        backgroundColor: '#C4C4C4',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: hpHeight(2.3),
        marginLeft: wpWidth(0.5),
        height: 34,
        width: 34,
        borderRadius: 50
    },
    filterContainer: {},
    filterContentContainer: {
        flexDirection: 'row',
        marginTop: hpHeight(2),
        marginHorizontal: normalizeX(10)
    },
    filterContentStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        elevation: 3,
        height: 48,
        width: '84%',
        alignItems: 'center',
        borderRadius: 4,
        marginTop: hpHeight(1),
        marginLeft: wpWidth(4)
    },
    rankingContainer: {
        flex: 1,
        backgroundColor: colors.GRAY
    },
    rankingBody: {
        width: '97%'
    },
    rankingContentContainer: {
        elevation: 4,
        backgroundColor: colors.WHITE,
        width: '92%',
        alignSelf: 'center',
        flex: 1,
        borderRadius: 11.5,
        marginBottom: 5,
        marginHorizontal: wpWidth(2)
    },
    logoPointContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    pointsContainer: {
        width: 176,
        height: 62,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#F5EFEF',
        marginTop: hpHeight(4)
    },
    rankingResultContentContainer: {
        elevation: 4,
        backgroundColor: colors.WHITE,
        width: '92%',
        height: '31%',
        borderRadius: 11.5,
        marginBottom: 5,
        alignSelf: 'center',
        marginTop: hpHeight(2)
    },
    winnerContainer: {
        height: 344,
        width: '92%',
        elevation: 3,
        borderRadius: 11.54,
        backgroundColor: colors.WHITE,
        alignSelf: 'center',
        alignItems: 'center',
        marginVertical: hpHeight(1.5)
    },
    galleryContainer: {
        backgroundColor: CS_COLORS.SCREEN_BACKGROUND,
        flex: 1
    },
    galleryImgStyle: {
        height: 128,
        width: 128,
        margin: 1
    },
    aboutResult: {
        flex: 1,
        backgroundColor: colors.GRAY
    },
    aboutResultContainer: {
        marginHorizontal: 9,
        alignItems: 'center',
        flex: 1
    },
    aboutResultContentContainer: {
        height: hpHeight(50),
        width: '96%',
        borderRadius: 11.54,
        backgroundColor: colors.WHITE,
        alignItems: 'center',
        marginTop: hpHeight(2)
    },
    aboutResultLogoContainer: {
        flexDirection: 'row',
        marginTop: hpHeight(1.4),
        alignItems: 'center'
    },
    pointNumberContainer: {
        height: hpHeight(10),
        width: hpHeight(10),
        borderRadius: 10,
        backgroundColor: '#F5EFEF',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5
    },
    medalLogoContainer: {
        height: hpHeight(20),
        width: hpHeight(20),
    
    },
    medalLogoContainerRight: {
        height: hpHeight(13),
        width: hpHeight(13),
 
        marginLeft: wpWidth(4)
    },
    medalLogoRight: {
        height: hpHeight(13),
        width: hpHeight(13),
        marginTop: hpHeight(0)
    },
    rankingBtnStyle: {
        backgroundColor: colors.SECONDARY,
        width: wpWidth(90),
        marginVertical: hpHeight(2),
        alignSelf: 'center',
        fontSize: 16,
        fontFamily: CS_FONTS.MontserratMedium
    },
    pointLogoContainer: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        width: '100%',
        height: hpHeight(10),
        marginVertical: normalizeY(6),
    },
    iconContainer: {
        position: 'absolute',
        backgroundColor: 'rgba(196, 196, 196, 0.6)',
        height: 23,
        width: 23,
        borderRadius: 50,
        top: 6,
        elevation: 4,
        zIndex: 1000,
        left: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleContainer: {
        flexGrow: 0.1,
        marginLeft: wpWidth(3)
    },
    resultBtnStyle: {
        backgroundColor: colors.SECONDARY,
        width: wpWidth(90),
        marginVertical: hpHeight(2),
        alignSelf: 'center',
        fontFamily: CS_FONTS.MontserratMedium
    },
    winnerTextContainer: {
        alignItems: 'center',
        marginTop: hpHeight(4)
    },
    imgContainer: {
        justifyContent: 'center',
        alignContent: 'center',
        flex: 0.9
    },
    filterIcon: {
        height: 18.22,
        width: 18.01
    },
    listStyle: {
        marginTop: hpHeight(2.7),
        marginHorizontal: wpWidth('1.2%'),
    },
findResultText: {
    marginLeft: wpWidth(-0.2),
     fontSize: 9,
      color: 'rgba(60, 60, 67, 0.6)',
        fontFamily: CS_FONTS.MontserratExtraBold,
        marginTop: hpHeight(-0.4)
},
imageContainer: {
    // backgroundColor: 'red',
    height: 210, 
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
    marginTop: normalizeY(-7)
}
});
