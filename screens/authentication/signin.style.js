import { FlatList, StyleSheet, Text, View } from "react-native";
import React from 'react';
import { COLORS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: COLORS.lightWhite
    },
    inputWrapper: (boderColor) => ({
        boderColor: boderColor,
        backgroundColor: COLORS.lightWhite,
        borderWidth: 1,
        height: 50,
        borderRadius: 12,
        flexDirection: "row",
        paddingHorizontal: 15,
        alignItems: "center"
    }),
    warapper: {
        marginBottom: 20
    },
    label: {
        fontFamily: 'regular',
        fontSize: SIZES.small,
        marginBottom: 5,
        marginEnd: 5,
        textAlign: "right"
    },
    errorsMessage: {
        color: COLORS.red,
        fontSize: SIZES.small,
        fontFamily: 'regular',
        marginTop: 5,
        marginLeft: 5,
    }
})

export default styles