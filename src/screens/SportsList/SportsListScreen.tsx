import React, { FC, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, Pressable } from 'react-native';
import styles from './styles';
import { AntDesign, Entypo } from '@expo/vector-icons';
import SportsContainer from '../../common/SportsContainer';
import SimpleButton from '../../common/SimpleButton';
import { SPORTS_LIST } from '../../utils/constants';
import colors from '../../styles/colors';

const SportsListScreen: FC = () => {
    const [SlectedItem, SetSlected] = useState([]);
    const [Data, setData] = useState(SPORTS_LIST);

    useEffect(() => {}, [SlectedItem, Data]);

    const AddItem = (index: any, item: any) => {
        {
            SlectedItem.some((n) => n == item.id) ? SlectedItem.pop(item.id) : SlectedItem.push(item.id);
        }

        setData(SPORTS_LIST);
    };

    const renderSeparator = () => {
        return <View style={{ height: 16 }} />;
    };

    const renderListView = (index: any, item: any) => {
        
        return (
            <TouchableOpacity style={styles.ListContainer} onPress={() => AddItem(index, item)}>
                <View style={styles.ImageContainer}>
                    <Image source={item.image} style={styles.image} />
                </View>
                <View style={styles.tab}>
                    <View style={styles.TitleContainer}>
                        <Text style={styles.title}>{item.title}</Text>
                    </View>
                    <View style={styles.SelectInfo}>
                        {SlectedItem.some((n) => n == item.id) ? (
                            <View style={styles.SelectedView}>
                                <AntDesign name="check" size={24} color={'#fff'} backgroundColor={'orange'} />
                            </View>
                        ) : (
                            <AntDesign name="check" size={24} color={colors.BLACK} />
                        )}
                    </View>
                </View>
            </TouchableOpacity>
        );
    };
    return (
        <SportsContainer>
            <View style={styles.Header}>
                <Text style={styles.HeaderText}>Pick your favorite{'\n'}sports</Text>
            </View>
            <View>
                <FlatList
                    data={Data}
                    keyExtractor={(item, index) => (index + 1).toString()}
                    ItemSeparatorComponent={renderSeparator}
                    overScrollMode='never'
                    showsVerticalScrollIndicator={false}
                    renderItem={({ index, item }) => renderListView(index, item)}
                />
            </View>
            <View style={styles.buttonContainer}>
                <SimpleButton
                    // without={false}
                    // loading={isLoading}
                    title="Save"
                    // onPress={() => {}}
                />
            </View>
        </SportsContainer>
    );
};

export default SportsListScreen;
