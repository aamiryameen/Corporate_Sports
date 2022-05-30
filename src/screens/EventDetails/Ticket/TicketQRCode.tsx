import React, { FC } from 'react';
import { View, StyleSheet, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CS_COLORS from '../../../styles/colors';
import QRCode from 'react-native-qrcode-svg';

interface QRCodeProps {
    id:String
}

export  const TicketQRCode: FC<QRCodeProps> = ({id}) => {
    return (
        <View style={styles.container}>
            <QRCode
                id="123456"
                //QR code value
                value={id}
                //size of QR Code
                size={240}
                //Color of the QR Code (Optional)
                color="black"
                //Background Color of the QR Code (Optional)
                backgroundColor="white"
                //Logo of in the center of QR Code (Optional)
                // logo={{
                //     url:
                //         'https://raw.githubusercontent.com/AboutReact/sampleresource/master/logosmalltransparen.png',
                // }}
                //Center Logo size  (Optional)
                logoSize={30}
                //Center Logo margin (Optional)
                logoMargin={2}
                //Center Logo radius (Optional)
                logoBorderRadius={15}
                //Center Logo background (Optional)
                logoBackgroundColor="yellow"
                // getRef={(c) => setSvg(c)}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
        width:wp(94), 
        height:hp(45), 
        backgroundColor:CS_COLORS.WHITE, 
        alignItems:'center', 
        justifyContent:'center', 
        alignSelf:'center', 
        marginTop:hp(1.8), 
        marginBottom:hp(1.8), 
        borderRadius:12
    }
});
