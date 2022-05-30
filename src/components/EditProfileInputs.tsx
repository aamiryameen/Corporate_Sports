import React from 'react';
import { View, StyleSheet, TextInput, Image, Text } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Formik } from 'formik';
import { CS_FONTS } from '../styles/fonts';
import { EditProfileInput } from '../common/EditProfileInput';

interface EditProfileInputsProps {}

export const EditProfileInputs: React.FC<EditProfileInputsProps> = ({}) => {
    return (
        <>
            <View style={styles.container}>
                <Formik
                    initialValues={{
                        name: 'Aamir Yameen',
                        companyName: 'Idevsol',
                        email: 'amir.teamhome.ae',
                        phoneNumber: '+44776050020012'
                    }}
                    onSubmit={async (value, { resetForm }) => {
                        resetForm();
                    }}
                    validateOnBlur={true}
                    enableReinitialize={true}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, setFieldValue }) => (
                        <>
                            <EditProfileInput title={'Name'} value={values.name} showIcon={false} bottomBorder={false} />
                            <EditProfileInput showIcon={false} title={'Compnay Name'} value={values.companyName} bottomBorder={false} />
                            <EditProfileInput showIcon={false} title={'Email Address*'} value={values.email} bottomBorder={false} />
                            <EditProfileInput showIcon={false} title={'Phone Number'} value={values.phoneNumber} bottomBorder={true} />
                        </>
                    )}
                </Formik>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        height: hp('35%'),
        borderWidth: 1,
        borderColor: 'rgba(60, 60, 67, 0.3)',
        marginTop: 40,
        borderLeftWidth: 0,
        borderRightWidth: 0
    }
});
