import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from 'react';
import styles from './signin.style.js';
import { Formik } from 'formik';
import * as Yup from 'yup'
import { COLORS } from "../../constants/theme";
const validationSchema = Yup.object().shape({
    password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required('Required'),
    email: Yup.string()
        .email("Provide a vaild email")
        .required('Required')
})
const Signin = () => {
    const [{ loader, setLoader }] = useState(false)
    const [{ responseData, setResponseData }] = useState(null)
    const [{ obsecureText, setObsecureText }] = useState(false)
    return (
        <View style={styles.container}>
            <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={(value) => { }}
            >
                {({
                    handleChange,
                    touched,
                    handleSubmit,
                    values,
                    errors,
                    isValid,
                    setFieldError
                }) => (
                    <View >
                        <View style={styles.warapper}>
                            <Text style={styles.label}>Email</Text>
                            <View>
                                <View
                                    style={styles.inputWrapper(
                                        touched.email ? COLORS.lightBlue : COLORS.gray)}>

                                </View>
                            </View>
                        </View>
                    </View>
                )}
            </Formik>
        </View>
    )
}

export default Signin