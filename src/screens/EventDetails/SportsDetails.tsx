//import liraries
import React, { Component } from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import { hpHeight, wpWidth } from '../../utils/constants';
import Awards from './Awards';
import styles from './styles';
import { CS_FONTS } from '../../styles/fonts';
import CS_COLORS from '../../styles/colors';
import { normalizeY } from '../../utils/utils';

interface SportsDetailsProps {
    navigation: any;
}

const SportsDetails: React.FC<SportsDetailsProps> = ({ navigation }) => {

    return (
        <View style={styles.sportsDetailsContainer}>
            <ScrollView showsVerticalScrollIndicator={false} overScrollMode='never'>
               
                <View style={styles.sportsDetailsBody}>

                    <View style={styles.iconContainer}>
                        <Icon name={'left'} size={18} color={CS_COLORS.WHITE} onPress={() => navigation.goBack()} />
                    </View>
                    <Image source={require('../../asset/images/gellery6.png')} style={styles.sportsDetailsImgStyle} />
                   
                    <View style={styles.textLogoContainer}>
                        <View style={styles.titleContainer}>
                            <Text style={{ ...styles.textStyle, fontFamily: CS_FONTS.MontserratExtraBold, fontSize: 30 }}>PADEL TENNIS</Text>
                        </View>
                        <View style={{ flexGrow: 0.75, alignItems: 'flex-end' }}>
                            <Image source={require('../../asset/images/sp1.png')} style={styles.sportsLogo} />
                        </View>
                    </View>
<View style={{marginTop: normalizeY(10)}}>
    
                    <Text style={{ ...styles.descriptionStyle, marginLeft: wpWidth(5), }} > 1 Set 6-6 Tie break {"\n"} Min 2- Max 2 Players / Team {"\n"} Group Stages, Knockouts</Text>
                    </View>
                    <Text style={{ ...styles.textStyle, textAlign: 'left', marginLeft: wpWidth(5), marginTop: hpHeight(2), fontFamily: CS_FONTS.MontserratExtraBold, fontSize: 18 }}>Awards</Text>

                    {/* Awards Component */}
                    <Awards navigation={navigation} imgSource ={require('../../asset/images/medal_logo_1.png')}/>
                    <Awards navigation={navigation} imgSource ={require('../../asset/images/medal_logo.png')} />
                    <TouchableOpacity style={{ ...styles.btnStyle, marginVertical: hpHeight(2), marginTop: hpHeight(2),     width: wpWidth(78), }}>
                        <Text style={{ ...styles.descriptionStyle, color: 'white', fontFamily: CS_FONTS.MontserratMedium }}>Rules & Regulations</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

export default SportsDetails;
