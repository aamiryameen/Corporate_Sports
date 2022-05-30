import React, { useState, FC } from 'react';
import { StyleSheet, View, Platform, Dimensions, Text, TouchableOpacity, ScrollView } from 'react-native';
import CS_COLORS from '../../../styles/colors';
import { CS_FONTS } from '../../../styles/fonts';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { Button } from '../../../components/Events/Button';
import Modal from 'react-native-modal';
import SimpleButton from '../../../common/SimpleButton';
import Welcome from '../../Guest/Welcome';
import { normalizeY } from '../../../utils/utils';
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
}

export const FilterModal: FC<FilterModalProps> = ({ visible, companyData, sportData, sportCount, companyCount, onContinue, onCompanies, onSport, onClearFilter, onApply }) => {
    return (
        <Modal visible={visible} swipeDirection={'down'} style={styles.modalStyle}>
            <ScrollView style={styles.modalContainer} showsVerticalScrollIndicator={false} overScrollMode='never'>
                <View style={styles.body}>
                    <View style={{ ...styles.headingContainer, marginHorizontal: '5%' }}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.filterText2}>Filter results</Text>
                        </View>
                        <View style={{ marginRight: 5 }}>
                            <AntDesign onPress={onContinue} name={'close'} size={35} color={CS_COLORS.BLACK} />
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => onSport()} style={styles.filterContainer}>
                        <View style={{ ...styles.headingContainer }}>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.filterText1}>Sports</Text>
                                {sportCount != 0 ? (
                                    <View style={styles.dataContainer}>
                                        {sportData.map((item: any, index: any) => {
                                            return item.selected ? <Text style={styles.filterText}>{sportData.length - 1 == index ? item.title : `${item.title}, `}</Text> : null;
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
                    <TouchableOpacity onPress={() => onCompanies()} style={styles.filterContainer}>
                        <View style={{ ...styles.headingContainer }}>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.filterText1}>Companies</Text>
                                {companyCount != 0 ? (
                                    <View style={styles.dataContainer}>
                                        {companyData.map((item: any, index: any) => {
                                            return item.selected ? <Text style={styles.filterText}>{companyData.length - 1 == index ? item.title : `${item.title}, `}</Text> : null;
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
                        {/* <Button style={styles.btnStyle} title={'Apply'} onPress={() => onApply()} /> */}
                        <Button style={{ ...styles.btnStyle, marginTop: normalizeY(10) }} title={'Apply'} onPress={() => onClearFilter()} />
                    </View>
                </View>
            </ScrollView>
        </Modal>
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
        backgroundColor: CS_COLORS.MODAL_BACKGROUND
        // borderRadius: 15,
    },
    btnContainer: {
        width: '100%',
        marginVertical: '5%',
        alignItems: 'center'

    },
    filterText: {
        fontSize: hp('1.65%'),
        fontFamily: CS_FONTS.MontserratBold,
        color: '#7A7878',
        fontWeight: Platform.OS === 'ios' ? '900' : 'bold'
    },
    filterText1: {
        fontSize: hp('2.5%'),
        fontFamily: CS_FONTS.MontserratExtraBold,
        color: CS_COLORS.BLACK,
        // fontWeight: Platform.OS === 'ios' ? '900' : 'bold'
    },
    filterText2: {
        fontSize: hp('3.5%'),
        fontFamily: CS_FONTS.MontserratExtraBold,
        color: CS_COLORS.BLACK,
        // fontWeight: Platform.OS === 'ios' ? '900' : 'bold'
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
    },
    btnStyle: {
        borderRadius: 4,
        width: '90%'
    },
    modalStyle: {
        flex: 1,
        margin: 0,
        justifyContent: 'flex-start'
    },
    body: {
        paddingTop: '5%',
        marginBottom: '10%'
    },
    dataContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: windowWidth * 0.8
    }
});
