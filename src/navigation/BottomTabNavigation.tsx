import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Text, Image, Animated } from 'react-native';

//assets
import HOME from '../asset/icons/Home.png';
import EVENTS from '../asset/icons/Events.png';
import NEWS_FEED from '../asset/icons/NewsFeed.png';
import NOTIFICATIONS from '../asset/icons/Notification.png';
import CS_COLORS from '../styles/colors';

//screens
import { ReadDetails } from '../screens/NewsFeed/ReadDetails';
import { Notification } from '../screens/Notification/Notification';
import { EventsTab } from '../common/EventsTab';
import ParticipantHome from '../screens/Home/ParticipantHome';
import HomeFeed from '../screens/Home/HomeFeed';
import { NewsFeed } from '../screens/NewsFeed/NewsFeed';
import { Settings } from '../screens/Admin/Settings';
import { EditProfile } from '../screens/Admin/EditProfile';
import { Terms } from '../screens/Admin/Terms';
import { Privacy } from '../screens/Admin/Privacy';
import { NotificationList } from '../screens/Notification/NotificationList';

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false,animationEnabled: false, }}>
            <HomeStack.Screen name="HomeFeed" component={HomeFeed} />
            <HomeStack.Screen name="Settings" component={Settings} />
            <HomeStack.Screen name="EditProfile" component={EditProfile} />
            <HomeStack.Screen name="Terms" component={Terms} />
            <HomeStack.Screen name="Privacy" component={Privacy} />
        </HomeStack.Navigator>
    );
}

const EventsStack = createStackNavigator();
function EventsStackScreen() {
    return (
        <EventsStack.Navigator screenOptions={{ headerShown: false }}>
            <EventsStack.Screen name="EventsHome" component={ParticipantHome} />
            <EventsStack.Screen name="EventsTab" component={EventsTab} />
        </EventsStack.Navigator>
    );
}

const NewsFeedStack = createStackNavigator();
function NewsFeedStackScreen() {
    return (
        <NewsFeedStack.Navigator screenOptions={{ headerShown: false }}>
            <NewsFeedStack.Screen name="NewsFeedDetails" component={NewsFeed} />
            <NewsFeedStack.Screen name="ReadDetails" component={ReadDetails} />
        </NewsFeedStack.Navigator>
    );
}

const NotificationsStack = createStackNavigator();
function NotificationsStackScreen() {
    return (
        <NotificationsStack.Navigator screenOptions={{ headerShown: false,  }}>
            <NotificationsStack.Screen name="NotificationsList" component={NotificationList} />
            <NotificationsStack.Screen name="NotificationsDetails" component={Notification} />
        </NotificationsStack.Navigator>
    );
}

export default function TabNavigator() {
    return (
        <Tab.Navigator
        
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarStyle: {
                    shadowOffset: { width: 0, height: 2 },
                    shadowColor: '#000000',
                    shadowOpacity: 0.5,
                    shadowRadius: 5,
                 
                },
                tabBarLabel: ({ focused }) => {
                    return (
                        <Text
                            style={{
                                fontSize: 10,
                                fontWeight: 'normal',
                                color: focused ? CS_COLORS.PRIMARY : '#BCBCBC'
                            }}
                        >
                            {!focused ? route.name : route.name}
                        </Text>
                    );
                },

                tabBarIcon: ({ focused }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused ? HOME : HOME;
                    } else if (route.name === 'Events') {
                        iconName = focused ? EVENTS : EVENTS;
                    } else if (route.name === 'NewsFeed') {
                        iconName = focused ? NEWS_FEED : NEWS_FEED;
                    } else if (route.name === 'Notifications') {
                        iconName = focused ? NOTIFICATIONS : NOTIFICATIONS;
                    }
                    return (
                        <>
                            <Image
                                source={iconName}
                                style={{
                                    width: 25,
                                    height: 25,
                                    marginTop: 10
                                }}
                                resizeMode="contain"
                            />
                        </>
                    );
                },
                headerShown: false
            })}
        >
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="Events" component={EventsStackScreen} />
            <Tab.Screen name="NewsFeed" component={NewsFeedStackScreen} />
            <Tab.Screen name="Notifications" component={NotificationsStackScreen} />
        </Tab.Navigator>
    );
}
