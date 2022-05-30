import React, { Component, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { hpHeight, wpWidth } from '../../utils/constants';
import styles from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import CS_COLORS from '../../styles/colors';
import { CS_FONTS } from '../../styles/fonts';
import { Results } from './FilterModal/Results';
interface FilterComponentProps {
    navigation?: any;
    icon?: string;
    style?: any;
    onPress?: any
}
// create a component
const FilterComponent: React.FC<FilterComponentProps> = ({ navigation, icon, style, onPress }) => {

    const [filterModal, setfilterModal] = useState<Boolean>(false);

    return (
        <>
            <View style={styles.filterContainer}>
                <View style={styles.filterContentContainer}>
                    {icon ? (
                        <TouchableOpacity style={{ ...styles.backIconContainer }} onPress={ onPress ? onPress : () => navigation.goBack()}>
                            <Icon name={icon} size={18} color="#ffff" />
                        </TouchableOpacity>
                    ) : null}

                    <TouchableOpacity style={{ ...styles.filterContentStyle, ...style }} onPress={() => setfilterModal(true)}>
                        <Image source={require('../../asset/images/filterIcon.png')} style={styles.filterIcon} />
                        <View>
                            <Text style={{ ...styles.textStyle, textAlign: 'left' }}>Filter</Text>
                            <Text
                                style={styles.findResultText}>
                                Find results by company or sports.
                            </Text>
                        </View>
                        <Icon name="right" size={20} color={'rgba(60, 60, 67, 0.3)'} />
                    </TouchableOpacity>
                </View>
            </View>
            <Results filterModal={filterModal} setFilterModal={() => setfilterModal(false)} />
        </>
    );
};

export default FilterComponent;
