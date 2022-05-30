import React, { FC } from 'react';
import { View, StyleSheet, Text, Platform, Image, FlatList, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CS_COLORS from '../../styles/colors';
import { CS_FONTS } from '../../styles/fonts';
import { GAME_PLANNINGS } from '../../utils/constants';
interface GamePlanningProps {}

export const GamePlanning: FC<GamePlanningProps> = ({}) => {
    const renderListView = (index: any, item: any) => {
        return (
            <TouchableOpacity activeOpacity={0.5} style={styles.container}>
                <Text style={styles.title}>
                    {item.points} - {item.pitch}
                </Text>
                <View style={styles.ListContainer}>
                    <View style={styles.iconContainer}>
                        <Image source={item.image} style={styles.image} />
                    </View>
                    <View style={styles.iconContainer}>
                        <Text style={styles.vs}>VS</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Image source={item.image0} style={styles.image} />
                    </View>
                </View>
            </TouchableOpacity>
        );
    };
    return (
        <View>
            {/* <Text style={styles.title}>My Pictures</Text> */}
            <FlatList
                // numColumns={3}
                overScrollMode='never'
                data={GAME_PLANNINGS}
                keyExtractor={(item, index) => (index + 1).toString()}
                showsVerticalScrollIndicator={false}
                renderItem={({ index, item }) => renderListView(index, item)}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        width: wp(93),
        alignSelf: 'center',
        marginTop: hp(1.5),
    },
    title: {
        fontFamily: CS_FONTS.MontserratBold,
        color: CS_COLORS.TEXT_DARKBLACK,
        fontSize: hp(2),
        fontWeight: Platform.OS === 'ios' ? '900' : 'bold'
        // marginLeft: 6,
        // marginBottom: hp(3)
    },
    vs: {
        fontFamily: CS_FONTS.MontserratBold,
        color: CS_COLORS.TEXT_DARKBLACK,
        fontSize: hp(3),
        fontWeight: Platform.OS === 'ios' ? '900' : 'bold'
        // marginLeft: 6,
        // marginBottom: hp(3)
    },
    ListContainer: {
        height: hp(15),
        width: wp(93),
        backgroundColor: CS_COLORS.WHITE,
        flexDirection: 'row',
        borderRadius:12
    },
    image: {
        height: hp(7),
        width: wp(14),
        resizeMode: 'contain',
        borderWidth: 1.5,
        backgroundColor: CS_COLORS.WHITE,
    },
    iconContainer: {
        height: hp(15),
        width: wp(31),
        backgroundColor: CS_COLORS.WHITE,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:12

    }
});
