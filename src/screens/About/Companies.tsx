import React, { FC } from 'react';
import { View, StyleSheet,  Text, Platform, Image, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CS_COLORS from '../../styles/colors';
import { CS_FONTS } from '../../styles/fonts';
import {COMPANIES} from '../../utils/constants'
interface CompaniesProps {
}

export const Companies:FC<CompaniesProps> = ({}) => {

    const renderHorizontalSeparator = () => {
        return <View style={{width: 20}} />;
      };
      const renderData = (index: any, item: any) => {
        return (
        <View style={styles.listContainer}>
            <Image  source={item.image} style={styles.image}/>
        </View>
        )
      };
        return (
            <View style={styles.container}>
                <Text style={styles.companies}>Companies</Text>
                <FlatList
                overScrollMode='never'
                data={COMPANIES}
                keyExtractor={(item:any, index:any) => (index + 1).toString()}
                horizontal={true}
                contentContainerStyle={styles.contentContanier}
                ItemSeparatorComponent={renderHorizontalSeparator}
                showsHorizontalScrollIndicator={false}
                renderItem={({index ,item}) =>
                  renderData(index, item)
                }
              />
            </View>
        );
}

const styles = StyleSheet.create({
    container:{
        width:wp(100),
        alignSelf:'center'
    },
    companies: {
        fontFamily: CS_FONTS.MontserratBold,
        color: CS_COLORS.TEXT_DARKBLACK,
        fontWeight: Platform.OS === 'ios' ? '900' : 'bold',
        fontSize: hp(3),
        lineHeight: hp(5),
        marginTop: hp(5),
        marginLeft:wp(3.5)
    },
    contentContanier: {
        paddingHorizontal: '5%',
        paddingTop: '5%',
      },
    listContainer:{
        height:hp(14),
        width:wp(22),
        borderRadius:12,
        backgroundColor:CS_COLORS.WHITE,
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        width:hp(7),
        height:wp(12)
    }
});