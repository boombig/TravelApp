import {Text, View,StyleSheet, TouchableOpacity} from "react-native";
import React from 'react';
import { SIZES } from "../../constants/theme";

const ReusableBtn = ({onPress, btnText, textColor, width, backgroundColor, borderWidth, borderColor}) => {
    return(
        <TouchableOpacity onPress={onPress} style={styles.btnStyle(width, backgroundColor, borderWidth, borderColor)}>

            <Text style={styles.btnText(textColor)}>{btnText}</Text>
        </TouchableOpacity>
    )
}

export default ReusableBtn;

const styles=StyleSheet.create({
    btnText: (textColor) =>({
        fontFamily:"medium",
        fontSize: SIZES.large,
        color: textColor
    }),
    btnStyle:(width, backgroundColor, borderWidth, borderColor) => ({
        width: width,
        backgroundColor: backgroundColor,
        alignItems:'center',
        justifyConten:'center',
        height: 40,
        borderRadius: SIZES.small,
        borderColor:borderColor,
        borderWidth: borderWidth,

    }),
})