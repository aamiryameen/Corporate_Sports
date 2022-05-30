import * as Font from "expo-font";
const DEBUG_KEY = "[AUTH ACTIONS]"





//this function will be called when user will open app it's beneficial for authentication where we can check user's token and    it to desired screen
export const tryAutoLogin = (navigation: any) => async () => {
   navigation.navigate("AppIntro");
};

export const loadInitialAssets =async () => {
    // Fonts are required initially. Using expo fonts for loading fonts. Developer should download fonts and place in root assets/fonts folder and import below 

    const fontPromise = cacheFonts({
      "ABeeZee-Italic":require("../../../../assets/fonts/ABeeZee-Italic.ttf"),
      "ABeeZee-Regular":require("../../../../assets/fonts/ABeeZee-Regular.ttf"),
      "Poppins-Black":require("../../../../assets/fonts/Poppins-Black.ttf"),
      "Poppins-BlackItalic":require("../../../../assets/fonts/Poppins-BlackItalic.ttf"),
      "Poppins-Bold":require("../../../../assets/fonts/Poppins-Bold.ttf"),
      "Poppins-BoldItalic":require("../../../../assets/fonts/Poppins-BoldItalic.ttf"),
      "Poppins-ExtraBold":require("../../../../assets/fonts/Poppins-ExtraBold.ttf"),
      "Poppins-ExtraBoldItalic":require("../../../../assets/fonts/Poppins-ExtraBoldItalic.ttf"),
      "Poppins-ExtraLight":require("../../../../assets/fonts/Poppins-ExtraLight.ttf"),
      "Poppins-ExtraLightItalic":require("../../../../assets/fonts/Poppins-ExtraLightItalic.ttf"),
      "Poppins-Italic":require("../../../../assets/fonts/Poppins-Italic.ttf"),
      "Poppins-Light":require("../../../../assets/fonts/Poppins-Light.ttf"),
      "Poppins-LightItalic":require("../../../../assets/fonts/Poppins-LightItalic.ttf"),
      "Poppins-Medium":require("../../../../assets/fonts/Poppins-Medium.ttf"),
      "Poppins-MediumItalic":require("../../../../assets/fonts/Poppins-MediumItalic.ttf"),
      "Poppins-Regular":require("../../../../assets/fonts/Poppins-Regular.ttf"),
      "Poppins-SemiBold":require("../../../../assets/fonts/Poppins-SemiBold.ttf"),
      "Poppins-SemiBoldIalic":require("../../../../assets/fonts/Poppins-SemiBoldItalic.ttf"),
      "Poppins-Thin":require("../../../../assets/fonts/Poppins-Thin.ttf"),
      "Poppins-ThinItalic":require("../../../../assets/fonts/Poppins-ThinItalic.ttf"),
      "SFProDisplay-Bold":require("../../../../assets/fonts/SFProDisplay-Bold.ttf"),
      "SFProDisplay-Light":require("../../../../assets/fonts/SFProDisplay-Light.ttf"),
      "SFProDisplay-Regular":require("../../../../assets/fonts/SFProDisplay-Regular.ttf"),
      "SFProDisplay-SemiBold":require("../../../../assets/fonts/SFProDisplay-SemiBold.ttf"),
      "SFProDisplay-Thin":require("../../../../assets/fonts/SFProDisplay-Thin.ttf"),
      "Montserrat-Italic-VariableFont_wght":require("../../../../assets/fonts/Montserrat-Italic-VariableFont_wght.ttf"),
      "Montserrat-Bold":require("../../../../assets/fonts/Montserrat-Bold.ttf"),
      "Montserrat-Regular":require("../../../../assets/fonts/Montserrat-Regular.ttf"),
      "Montserrat-ExtraBold":require("../../../../assets/fonts/Montserrat-ExtraBold.ttf"),
      "Montserrat-Thin":require('../../../../assets/fonts/Montserrat-Thin.ttf'),
      "Montserrat-Black":require('../../../../assets/fonts/Montserrat-Black.ttf'),
      "Montserrat-Medium":require("../../../../assets/fonts/Montserrat-Medium.ttf"),
      
 
    });
  return Promise.all([...fontPromise]).catch((err) => {
      console.log(`${DEBUG_KEY} Error in loading assets`, err);
    });
  };

 function cacheFonts(fonts:any) {
    return [Font.loadAsync(fonts)];
  }
