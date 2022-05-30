import React, { useState, FC } from 'react';
import { StyleSheet, View, Dimensions, Text, TouchableOpacity, ScrollView, } from 'react-native';
import CS_COLORS from '../../styles/colors';
import { CS_FONTS } from '../../styles/fonts';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { Button } from '../../components/Events/Button';
import Modal from 'react-native-modal'

const windowWidth = Dimensions.get('window').width;

interface FilterModalProps {
    visible: Boolean;
    companyData: Array<String>;
    sportData: Array<String>;
    sportCount: Number;
    companyCount: Number;
    onContinue: () => void;
    onCompanies: () => void;
    onSport: () => void;
    onClearFilter: () => void;
    onApply: () => void;
    navigation?: any
}

export const FilterModal: FC<FilterModalProps> = ({ visible, companyData, sportData, sportCount, companyCount, onContinue, onCompanies, onSport, onClearFilter, onApply, navigation }) => {
    return (
        // <Modal visible={visible} style={{ flex: 1, margin: 0, justifyContent: 'flex-start', backgroundColor: 'transparent' }}>
            <ScrollView style={styles.modalContainer} showsVerticalScrollIndicator={false} overScrollMode='never' >
                <View style={{ paddingTop: '5%', marginBottom: '10%',}}>
                    <View style={{ ...styles.headingContainer, marginHorizontal: '5%' }}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.filterText2}>Filter results</Text>
                        </View>
                        <View style={{ marginRight: 5 }}>
                            <AntDesign onPress={onContinue} name={'close'} size={35} color={CS_COLORS.BLACK} />
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('FilterBySports')} style={styles.filterContainer}>
                        <View style={{ ...styles.headingContainer }}>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.filterText1}>Sports</Text>
                                {sportCount != 0 ? (
                                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: windowWidth * 0.8 }}>
                                        {sportData.map((item: any, index: any) => {
                                            return item.selected ? <Text style={styles.filterText}>{sportData.length - 1 == index ? item.post_title : `${item.post_title}, `}</Text> : null;
                                        })}
                                    </View>
                                ) : (
                                    <Text style={styles.filterText}>All</Text>
                                )}
                            </View>
                            <View style={{ marginRight: 5 }}>
                                <FontAwesome name={'angle-right'} size={30} color={CS_COLORS.GRAY} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.line} />
                    <TouchableOpacity onPress={() => navigation.navigate('FilterByCompanies')} style={styles.filterContainer}>
                        <View style={{ ...styles.headingContainer }}>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.filterText1}>Companies</Text>
                                {companyCount != 0 ? (
                                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: windowWidth * 0.8 }}>
                                        {companyData.map((item: any, index: any) => {
                                            return item.selected ? <Text style={styles.filterText}>{companyData.length - 1 == index ? item.post_title : `${item.post_title}, `}</Text> : null;
                                        })}
                                    </View>
                                ) : (
                                    <Text style={styles.filterText}>All</Text>
                                )}
                            </View>
                            <View style={{ marginRight: 5 }}>
                                <FontAwesome name={'angle-right'} size={30} color={CS_COLORS.GRAY} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.line} />
                    <View style={styles.btnContainer}>
                        <Button title={'Apply'} onPress={() => onApply()} />
                        <View style={{ marginTop: '5%' }}>
                            <Button title={'Clear Filter'} onPress={() => onClearFilter()} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        // </Modal>
    );
};

const styles = StyleSheet.create({
    line: {
        marginTop: '5%',
        height: 0.75,
        marginHorizontal: '5%',
        backgroundColor: CS_COLORS.BLACK
    },
    modalContainer: {
        flex: 1,
        // padding: "5%",
        backgroundColor: CS_COLORS.MODAL_BACKGROUND,
        // borderRadius: 15,
    },
    btnContainer: {
        marginHorizontal: '5%',
        marginVertical: '5%'
    },
    filterText: {
        fontSize: hp('1.65%'),
        fontFamily: CS_FONTS.MontserratBold,
        color: '#7A7878'
    },
    filterText1: {
        fontSize: hp('2.5%'),
        fontFamily: CS_FONTS.MontserratBold,
        color: CS_COLORS.BLACK
    },
    filterText2: {
        fontSize: hp('3.5%'),
        fontFamily: CS_FONTS.MontserratBold,
        color: CS_COLORS.BLACK
    },
    rowContainer: {
        marginTop: '5%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    filterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: '5%',
        marginTop: '5%',
        backgroundColor: CS_COLORS.WHITE,
        borderRadius: 5,
        padding: '2.5%'
        // paddingHorizontal: "5%"
    },
    headingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
        // marginHorizontal: "5%"
    }
});
