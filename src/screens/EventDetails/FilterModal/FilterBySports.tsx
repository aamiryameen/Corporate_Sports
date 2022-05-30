import React, { useState, FC } from "react";
import { StyleSheet, View, Platform, Text, TouchableOpacity, FlatList, } from 'react-native';
import CS_COLORS from "../../../styles/colors";
import { CS_FONTS } from "../../../styles/fonts";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { AntDesign, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'
import { Button } from '../../../components/Events/Button'
import Modal from 'react-native-modal'
import { normalizeY } from '../../../utils/utils';

interface FilterBySportsProps {
  visible: Boolean
  sportData: Array<String>
  sportCount: Number
  companyCount: Number
  onCompanies: () => void
  onSport: () => void
  onContinue: () => void
  onClearFilter: () => void
  onApply: () => void
  setSportData: () => void
  updateSportCount: () => void
}

export const FilterBySportsModal: FC<FilterBySportsProps> = ({ visible, sportData, sportCount, onCompanies, onSport, onContinue, onApply, onClearFilter, setSportData, updateSportCount }) => {


  const _renderSportsItem = (index: any, item: any) => {
    return (
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: "4%" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.filterText}>{item.title}</Text>
        </View>

        <TouchableOpacity style={{ borderWidth: 0.5, borderRadius: 5, padding: item.selected ? "1.5%" : "5%" }} onPress={() => {
          let array = [...sportData];
          let count = sportCount;
          if (array[index].selected) {
            array[index] = { ...array[index], selected: false }
            count = count - 1
          } else {
            array[index] = { ...array[index], selected: true }
            count = count + 1
          }
          updateSportCount(count)
          setSportData(array)
        }}>
          {
            item.selected ?
              <Ionicons name="checkmark" size={25} color={CS_COLORS.BLACK} />
              :
              null
          }
        </TouchableOpacity>
      </View >
    )
  }
  const VerticalSpacer = () => {
    return (
      <View style={{ height: hp(2) }}></View>
    )
  }
  return (

    <Modal visible={visible} style={styles.modalStyle} backdropColor="transparent" animationOut="slideOutDown" animationIn="slideInUp" >
      <View style={styles.modalContainer}>
        <View style={styles.body}>
          <View style={{ ...styles.headingContainer, marginHorizontal: "4%", justifyContent: 'space-between' }}>
            <Text style={styles.filterText2} >Filter by sports</Text>
            <MaterialCommunityIcons onPress={onContinue} name={"keyboard-backspace"} size={35} color={CS_COLORS.BLACK} />
          </View>
          <View style={{ flex: 1 }}>
            <FlatList data={sportData}
              overScrollMode='never'
              renderItem={({ index, item }) => _renderSportsItem(index, item)}
              contentContainerStyle={{ paddingVertical: "5%" }}
              keyExtractor={(item, index) => ((index + 1).toString())}
              ItemSeparatorComponent={VerticalSpacer}
            />
          </View>
          <View style={styles.lineContainer}>
            <View style={styles.line} />
            <View style={styles.btnContainer}>
              <Button style={styles.btnStyle} title={'Apply'} onPress={onApply} />
              <Button style={{ ...styles.btnStyle, marginTop: normalizeY(10) }} title={'Clear Filter'} onPress={onContinue} />
            </View>
          </View>
        </View>
      </View>

    </Modal >
  );
};

const styles = StyleSheet.create({
  line: {
    marginTop: "5%",
    height: 0.75,
    marginHorizontal: "5%",
    backgroundColor: CS_COLORS.BLACK
  },
  modalContainer: {
    flex: 1,
    backgroundColor: CS_COLORS.MODAL_BACKGROUND,
  },
  btnContainer: {
    marginHorizontal: "5%",
    marginTop: "5%",
  },
  filterText: {
    fontSize: hp("2.2%"),
    fontFamily: CS_FONTS.MontserratBold,
    color: CS_COLORS.BLACK,
    // fontWeight:Platform.OS === 'ios' ? '900' : 'bold'
  },
  filterText1: {
    fontSize: hp("2.5%"),
    fontFamily: CS_FONTS.MontserratBold,
    color: CS_COLORS.BLACK,
  },
  filterText2: {
    fontSize: hp("3.2%"),
    fontFamily: CS_FONTS.MontserratExtraBold,
    color: CS_COLORS.BLACK,
    // fontWeight:Platform.OS === 'ios' ? '900' : 'bold'
  },
  rowContainer: {
    marginTop: "5%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  filterContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: "5%",
    marginTop: "5%",
    backgroundColor: CS_COLORS.WHITE,
    borderRadius: 5,
    padding: "2.5%",
    // paddingHorizontal: "5%"
  },
  headingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // marginHorizontal: "5%"
  },
  btnStyle: {
    borderRadius: 4,
    width: '100%'
  },
  body: {
    paddingTop: "5%",
    marginBottom: "10%",
    flex: 1
  },
  lineContainer: {
    flex: 0.2,
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
  modalStyle: {
    flex: 1,
    margin: 0,
    justifyContent: "flex-start"
  }
})

