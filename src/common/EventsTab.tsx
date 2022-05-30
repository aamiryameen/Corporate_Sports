import * as React from 'react';
import { View, useWindowDimensions, Text, Image, Dimensions } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import TEST_IMAGE from '../asset/icons/tab_about.png';
import TEST_IMAGE1 from '../asset/icons/tab_sports.png';
import TEST_IMAGE3 from '../asset/icons/tab_result.png';
import TEST_IMAGE2 from '../asset/icons/ticket.png';
import TEST_IMAGE4 from '../asset/icons/tab_gallary.png';
import { CS_FONTS } from '../styles/fonts';
import HomeSports from '../screens/EventDetails/HomeSports';
import { Ticket } from '../screens/EventDetails/Ticket/Ticket';
import EventsAbout from '../screens/EventDetails/EventsAbout/EventsAbout';
import AboutResult from '../screens/EventDetails/AboutResult';
import About from '../screens/About/About';
import HomeGallery from '../screens/EventDetails/HomeGallery';
import CS_COLORS from '../styles/colors';


interface TabTestProps {
    navigation: any;
}

export const EventsTab: React.FC<TabTestProps> = ({ navigation }) => {
    const layout = useWindowDimensions();

    const renderScene = ({ route }) => {
        switch (route.key) {
            case 'about':
                return <EventsAbout navigation={navigation} />;
            case 'sports':
                return <HomeSports navigation={navigation} />;
            case 'ticket':
                return <Ticket showBackButton={true} navigation={navigation} />;
            case 'results':
                return <AboutResult navigation={navigation} />;
            case 'gallary':
                return <HomeGallery navigation={navigation} />;
                
            default:
                return null;
        }
    };

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'about', title: 'About', icon: TEST_IMAGE },
        { key: 'sports', title: 'Sports', icon: TEST_IMAGE1 },
        { key: 'ticket', title: 'Ticket', icon: TEST_IMAGE2 },
        { key: 'results', title: 'Results', icon: TEST_IMAGE3 },
        { key: 'gallary', title: 'Gallery', icon: TEST_IMAGE4 }
    ]);

    const renderTabBar = (props: any) => {
        return (
            <TabBar
                pressColor="transparent"
                
                bounces={true}
                renderIcon={({ route, focused, color }) => (
                    <Image
                        source={route.icon}
                        style={{ resizeMode: 'contain', height: 28, width: 28, bottom: route.key === 'ticket' || route.key === 'results' ? 2 : null, opacity: !focused ? 0.4 : 2 }}
                    />
                )}
                renderLabel={({ route, focused, color }) => (
                    <Text
                        style={{
                            color: focused ? 'black' : '#828282',
                            fontSize: 11,
                            justifyContent: 'center',
                            fontFamily: CS_FONTS.SFProDisplayRegular,
                            alignItems: 'center',
                            fontWeight: focused ? '400' : '300'
                        }}
                    >
                        {route.title}
                    </Text>
                )}
                {...props}
                indicatorStyle={{
                    height: hp(7.5),
                    borderRadius: 12,
                    backgroundColor: 'transparent'
                }}
                style={{
                    borderRadius: 12,
                    width: wp('90%'),
                    height: hp(8.2),
                    justifyContent: 'center',
                    alignSelf: 'center',
                    backgroundColor: CS_COLORS.WHITE,
                    marginBottom: 9
                }}
            />
        );
    };

    return (
        <View style={{ flex: 1,  }}>
            <TabView
                lazy
                swipeEnabled={false}
                // style={{backgroundColor: 'rgba(2, 2, 2, 0.08)'}}
                tabBarPosition="bottom"
                renderTabBar={renderTabBar}
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: Dimensions.get('window').width }}
            />
        </View>
    );
};
