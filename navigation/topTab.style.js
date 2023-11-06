import {FlatList, StyleSheet, Text, View} from "react-native";
import { COLORS } from "../constants/theme";

const styles = StyleSheet.create({
    profile:{
        position:"absolute",
        left:0,
        right:0,
        top:110,
        alignContent:"center"
    },
    image:{
        resizeMode:"cover",
        width:100,
        height:100,
        borderColor:COLORS.lightWhite,
        borderWidth:2,
        borderRadius:90,
        marginLeft:160
    },
    name:{
        backgroundColor:COLORS.lightBlue,
        padding:5,
        borderRadius:12,
        width:250,
        left:80
        
    }
})

export default styles