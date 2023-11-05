import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

const styles= StyleSheet.create({
    container:{
        paddingTop:20,
        marginHorizontal:20
    },
    titleContainer:{
        margin:15,
        backgroundColor:COLORS.lightWhite,
        height:130,
        position:"absolute",
        top:170,
        left:0,
        right:0,
        borderRadius:20
    },
    titleColumn:{
        padding:20
    }
})

export default styles