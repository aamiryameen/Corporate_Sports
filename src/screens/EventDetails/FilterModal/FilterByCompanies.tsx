import React, { FC } from "react";
import { StyleSheet, View, Platform, Text, TouchableOpacity, FlatList } from 'react-native';
import CS_COLORS from "../../../styles/colors";
import { CS_FONTS } from "../../../styles/fonts";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'
import { Button } from '../../../components/Events/Button'
import Modal from 'react-native-modal'
import { normalizeY } from '../../../utils/utils';
interface FilterByCompaniesProps {
  visible: Boolean
  companyCount: Number
  companyData: Array<String>
  setCompanyData: () => void
  onApply: () => void
  onContinue: () => void
  updateCompanyCount: () => void

}

export const FilterByCompaniesModal: FC<FilterByCompaniesProps> = ({ visible, companyData, companyCount, onApply, onContinue, setCompanyData, updateCompanyCount }) => {

  const _renderCompanyItem = (index: any, item: any) => {
    return (
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: "4%" }}>
        <Text style={styles.filterText}>{item.title}</Text>
        <TouchableOpacity style={{ borderWidth: 0.5, borderRadius: 5, padding: item.selected ? "1.5%" : "5%" }} onPress={() => {
          let array = [...companyData];
          let count = companyCount;
          if (array[index].selected) {
            array[index] = { ...array[index], selected: false }
            count = count - 1
          } else {
            array[index] = { ...array[index], selected: true }
            count = count + 1
          }
          updateCompanyCount(count)
          setCompanyData(array)
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

    <Modal visible={visible} style={styles.container} aackdropColor="transparent" animationOut="slideOutDown" animationIn="slideInUp"   >
      <View style={styles.modalContainer}>
        <View style={styles.body}>
          <View style={{ ...styles.headingContainer, marginHorizontal: "4%", justifyContent: 'space-between' }}>
            <Text style={styles.filterText2} >Filter by companies</Text>
            <MaterialCommunityIcons onPress={onContinue} name={"keyboard-backspace"} size={35} color={CS_COLORS.BLACK} />
          </View>

          <View style={{ flex: 1 }}>
            <FlatList data={companyData}
              overScrollMode='never'
              renderItem={({ index, item }) => _renderCompanyItem(index, item)}
              contentContainerStyle={{ paddingVertical: "5%" }}
              keyExtractor={(item, index) => ((index + 1).toString())}
              ItemSeparatorComponent={VerticalSpacer} />
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

    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    justifyContent: "flex-start"
  },
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
    marginTop: "5%"
  },
  filterText: {
    fontSize: hp("2.2%"),
    fontFamily: CS_FONTS.MontserratBold,
    textTransform: "capitalize",
    // fontWeight:Platform.OS === 'ios' ? '900' : 'bold'
  },
  filterText1: {
    fontSize: hp("2.5%"),
    fontFamily: CS_FONTS.MontserratBold,
    color: CS_COLORS.BLACK,
    fontWeight: Platform.OS === 'ios' ? '900' : 'bold'

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
  },
  headingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
    justifyContent: "center"
  }
})

