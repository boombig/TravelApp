import {Text, View,StyleSheet} from 'react-native';
import React from 'react';
// import styles from '../Onboard/slides.style';
const ReusableText = ({text, family, size, color}) => {
    return(
       <Text style={styles.textStyles(family,size,color)}>{text}</Text>
    )
}

export default ReusableText

const styles = StyleSheet.create({
    textStyles:(family, size, color)=>({
        fontFamily:family,
        fontSize:size,
        color:color
    })
})