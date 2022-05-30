import React, { Fragment, FunctionComponent, useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, ScrollView } from 'react-native';
import { Avatar } from 'react-native-elements';
import { NOTIFICATION_DATA } from '../../utils/constants';
import CS_COLORS from '../../styles/colors';
import { CS_FONTS } from '../../styles/fonts';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

interface NotificationMapProps {}

export const NotificationMap: React.FC<NotificationMapProps> = ({}) => {
    const renderSeparator = () => {
        return <View style={{ height: 10 }} />;
    };
    const renderListView = (index: any, item: any) => {
        return (
            <View style={styles.ListContainer}>
                <View style={styles.imageContainer}>
                    <Avatar source={item.image} avatarStyle={{ height: hp(7), width: wp(14) }} containerStyle={{ height: hp(7), width: wp(14) }} />
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.des}</Text>
                </View>
                <View style={styles.timeContainer}>
                    <Text style={styles.Time}>{item.days}</Text>
                </View>
            </View>
        );
    };

    return (
        <ScrollView style={styles.container} overScrollMode='never' showsVerticalScrollIndicator={false}>
            <View style={styles.HeaderContainer}>
                <Text style={styles.Header_Text}>Notifications</Text>
            </View>
            <FlatList
                data={NOTIFICATION_DATA}
                keyExtractor={(item, index) => (index + 1).toString()}
                ItemSeparatorComponent={renderSeparator}
                showsVerticalScrollIndicator={false}
                overScrollMode='never'
                renderItem={({ index, item }) => renderListView(index, item)}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: CS_COLORS.WHITE
    },
    HeaderContainer: {
        width: wp(93),
        backgroundColor: 'transparent',
        height: hp(10),
        paddingTop: 20,
        padding: 17,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    Header_Text: {
        fontFamily: CS_FONTS.MontserratExtraBold,
        fontSize: 24,
        color: CS_COLORS.TEXT_DARKBLACK
    },
    ListContainer: {
        width: wp(93),
        height: hp(10),
        backgroundColor: CS_COLORS.LIGHT_GRAY,
        alignSelf: 'center',
        borderRadius: 16,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    imageContainer: {
        width: wp(20),
        alignItems: 'center',
        justifyContent: 'center'
    },
    infoContainer: {
        width: wp(53),
        justifyContent: 'center'
    },
    title: {
        fontSize: hp(2.2),
        color: CS_COLORS.TEXT_DARKBLACK,
        fontFamily: CS_FONTS.MontserratBold
    },
    description: {
        fontSize: hp(1.7),
        color: '#89888E'
    },
    timeContainer: {
        width: wp(20),
        alignItems: 'center',
        justifyContent: 'center'
    },
    Time: {
        fontSize: hp(1.4),
        color: '#89888E'
    }
});
