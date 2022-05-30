import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

import { StatusBar, View } from 'react-native';
import { SplashScreen } from '../screens/Onboarding/SplashScreen';
import { Signup } from '../screens/Onboarding/Signup';
import PasswordRecover from '../screens/Onboarding/PasswordRecovery';
import PasswordOTP from '../screens/Onboarding/PasswordOTP';
import PasswordReset from '../screens/Onboarding/PasswordReset';
import PRSuccess from '../screens/Onboarding/PRSuccess';
import Welcome from '../screens/Onboarding/Welcome';
import AuthOTP from '../screens/Onboarding/AuthOTP';
import UserSetup from '../screens/Onboarding/Settup';
import EmailLogin from '../screens/Onboarding/EmailLogin';
import SportsList from '../screens/Onboarding/SportsList';
import CSEvents from '../screens/Guest/CSEvents';

// Event Details Screens
import HomeSports from '../screens/EventDetails/HomeSports';
import SportsDetails from '../screens/EventDetails/SportsDetails';
import FilterComponent from '../screens/EventDetails/FilterComponent';
import Ranking from '../screens/EventDetails/Ranking/Ranking';
import RankingResult from '../screens/EventDetails/Ranking/ResultRanking';
import HomeGallery from '../screens/EventDetails/HomeGallery';
import AboutResult from '../screens/EventDetails/AboutResult';
import About from '../screens/About/About';

import ImageDetails from '../components/Home/ImageDetails';

import SentInvitation from '../screens/Guest/SentInvitation';
import InviteSuccess from '../screens/Guest/InviteSuccess';
import AppIntroScreen from '../screens/Onboarding/AppIntroScreens';
import TabNavigator from './BottomTabNavigation';
import GuestAbout from '../screens/Guest/GuestAbout';
import { Settings } from '../screens/Admin/Settings';
import { AdminLogIn } from '../screens/Admin/AdminLogIn';
import { Terms } from '../screens/Admin/Terms';
import { Privacy } from '../screens/Admin/Privacy';
import { EditProfile } from '../screens/Admin/EditProfile';
import { FilterByCompaniesModal } from '../screens/EventDetails/FilterModal/FilterByCompanies';
import { FilterBySportsModal } from '../screens/Events/FilterBySports';
import { TicketSetting } from '../common/TicketSetting';

const CustomStatusBar = ({
    backgroundColor,
    barStyle = 'dark-content'
    //add more props StatusBar
}) => {
    const insets = useSafeAreaInsets();

    return (
        <View style={{ height: insets.top, backgroundColor }}>
            <StatusBar animated={true} backgroundColor={backgroundColor} barStyle={barStyle} />
        </View>
    );
};
const navigatorOptions = {
    headerShown: false,
    cardStyle: { backgroundColor: 'transparent' },
    cardStyleInterpolator: ({ current: { progress } }) => ({
      cardStyle: {
        opacity: progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
        }),
      },
      overlayStyle: {
        opacity: progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.5],
          extrapolate: 'clamp',
        }),
      },
    }),
  }
const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <CustomStatusBar backgroundColor="white" />
                <Stack.Navigator
                    initialRouteName="SplashScreen"
                    mode="modal"
                    screenOptions={navigatorOptions}
                >
                    <Stack.Screen name="SplashScreen" component={SplashScreen} />
                    <Stack.Screen name="AppIntro" component={AppIntroScreen} />
                    <Stack.Screen name="About" component={About} />
                    <Stack.Screen name="Welcome" component={Welcome} />
                    <Stack.Screen name="AuthOTP" component={AuthOTP} />
                    <Stack.Screen name="UserSetup" component={UserSetup} />
                    <Stack.Screen name="EmailLogin" component={EmailLogin} />
                    <Stack.Screen name="SportsList" component={SportsList} />
                    <Stack.Screen name="Signup" component={Signup} />
                    <Stack.Screen name="PasswordRecover" component={PasswordRecover} />
                    <Stack.Screen name="PasswordOTP" component={PasswordOTP} />
                    <Stack.Screen name="GuestAbout" component={GuestAbout} />
                    <Stack.Screen name="CSEvents" component={CSEvents} />
                    <Stack.Screen name="PasswordReset" component={PasswordReset} />
                    <Stack.Screen name="PRSuccess" component={PRSuccess} />
                    <Stack.Screen name="SentInvitation" component={SentInvitation} />
                    <Stack.Screen name="Invite" component={InviteSuccess} />
                    <Stack.Screen name="HomeSports" component={HomeSports} />
                    <Stack.Screen name="SportsDetails" component={SportsDetails} />
                    <Stack.Screen name="FilterComponent" component={FilterComponent} />
                    <Stack.Screen name="RankingResult" component={RankingResult} />
                    <Stack.Screen name="Ranking" component={Ranking} />
                    <Stack.Screen name="HomeGallery" component={HomeGallery} />
                    <Stack.Screen name="AboutResult" component={AboutResult} />
                    <Stack.Screen name="ImageDetails" component={ImageDetails} />
                    <Stack.Screen name="AdminTicket" component={TicketSetting} />
                    <Stack.Screen name="TermsAndCondition" component={Terms} />
                    <Stack.Screen name="PrivacyPolicy" component={Privacy} />
                    <Stack.Screen name="EditProfile" component={EditProfile} />
                    <Stack.Screen name="TabNavigator" component={TabNavigator} />
                    <Stack.Screen name="Settings" component={Settings} />
                    <Stack.Screen name="AdminLogIn" component={AdminLogIn} />
                    <Stack.Screen name="FilterByCompanies" component={FilterByCompaniesModal} />
                    <Stack.Screen name="FilterBySports" component={FilterBySportsModal} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default Router;
