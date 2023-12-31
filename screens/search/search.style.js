import { StyleSheet } from "react-native";
import { COLORS,SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        marginHorizontal: SIZES.small,
        borderColor: COLORS.blue,
        borderWidth: 1,
        borderRadius: SIZES.medium,
        marginVertical: SIZES.medium,
        height: 50
    }, 
    input:{
        fontFamily:'regular',
        width:"120%",
        height:"100%",
        paddingHorizontal:70,
        backgroundColor:COLORS.white,
        borderRadius:SIZES.large
    },
    searchImage:{
        resizeMode:"contain",
        width:"100%",
        height:SIZES.height,
        paddingHorizontal:20    
    },
    searchWrapper:{
        flex:1,
        marginRight:SIZES.small,
        borderRadius:SIZES.small
    },
    searchBtn:{
        width:50,
        height:"100%",
        borderRadius:SIZES.small,
        justifyContent: "center",
        alignContent: "center",
        backgroundColor:COLORS.lightBlue
    },
    title:{
        marginHorizontal:12,
        marginBottom:10
    }
})

export default styles