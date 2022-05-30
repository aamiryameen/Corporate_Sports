import React, { FC, useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Text, Platform, Image, FlatList, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CS_COLORS from '../../styles/colors';
import { CS_FONTS } from '../../styles/fonts';
import { FilterModal } from './FilterModal';
import { SPORTS_LIST } from '../../utils/constants';
import { COMPANIES_LIST } from '../../utils/constants';
import { FilterBySportsModal } from './FilterBySports';
import {FilterByCompaniesModal} from './FilterByCompanies'
interface ResultsProps {}

export const Results: FC<ResultsProps> = ({}) => {
    const [filterModal, setFilterModal] = useState(false);
    const [companyModal, setCompanyModal] = useState(false);
    const [sportModal, setSportModal] = useState(false);
    const [companyData, setCompanyData] = useState<any>([]);
    const [sportData, setSportData] = useState<any>([]);
    const [sportCount, setSportCount] = useState(0);
    const [companyCount, setCompanyCount] = useState(0);

    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        try {
            setCompanyData(COMPANIES_LIST);
            setSportData(SPORTS_LIST);
        } catch (error) {}
    }, []);

    const handleApply = () => {
        // setLoading(true);
        setFilterModal(false);
        
    }
    return (
        <View>
            <TouchableOpacity onPress={() => setFilterModal(true)} style={styles.button}>
                <Text>Filter</Text>
            </TouchableOpacity>
          
            <FilterModal
                visible={filterModal}
                companyData={companyData}
                sportData={sportData}
                sportCount={sportCount}
                companyCount={companyCount}
                onCompanies={() => {
                    setTimeout(() => {
                        setCompanyModal(true);
                    }, 500);
                    setFilterModal(false);
                }}
                onSport={() => {
                    setFilterModal(false);
                    setSportModal(true);
                }}
                onContinue={() => {
                    let array = [...companyData];
                    array.map((item, index) => {
                        array[index] = { ...array[index], selected: false };
                    });
                    setCompanyData(array);
                    let arraySport = [...sportData];
                    arraySport.map((item, index) => {
                        arraySport[index] = { ...arraySport[index], selected: false };
                    });
                    setSportData(arraySport);
                    setFilterModal(false);
                }}
                onClearFilter={() => {
                    let array = [...companyData];
                    array.map((item, index) => {
                        array[index] = { ...array[index], selected: false };
                    });

                    let arraySport = [...sportData];
                    arraySport.map((item, index) => {
                        arraySport[index] = { ...arraySport[index], selected: false };
                    });
                    setCompanyData(array);
                    setCompanyCount(0);
                    setSportCount(0);
                    setSportData(arraySport);
                    setLoading(true);
                    setFilterModal(false);
                    // getResults();
                }}
                onApply={() => handleApply}
            />
            <FilterByCompaniesModal
                visible={companyModal}
                companyData={companyData}
                setCompanyData={(array:any) => setCompanyData(array)}
                onApply={() => {
                    setCompanyModal(false);
                    setFilterModal(true);
                }}
                companyCount={companyCount}
                updateCompanyCount={(count:any) => setCompanyCount(count)}
                onContinue={() => {
                    let array = [...companyData];
                    array.map((item, index) => {
                        array[index] = { ...array[index], selected: false };
                    });
                    setCompanyCount(0);
                    setCompanyData(array);
                    setCompanyModal(false);
                    setFilterModal(true);
                }}
            />
            <FilterBySportsModal
                sportData={sportData}
                setSportData={(array: any) => setSportData(array)}
                visible={sportModal}
                onApply={() => {
                    setSportModal(false);
                    setFilterModal(true);
                }}
                sportCount={sportCount}
                updateSportCount={(count:any) => setSportCount(count)}
                onContinue={() => {
                    let array = [...sportData];
                    array.map((item, index) => {
                        array[index] = { ...array[index], selected: false };
                    });
                    setSportCount(0);
                    setSportData(array);
                    setSportModal(false);
                    setFilterModal(true);
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        width: wp(93),
        height: hp(7),
        backgroundColor: CS_COLORS.SECONDARY,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
