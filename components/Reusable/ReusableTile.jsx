import {FlatList, StyleSheet, Text, View,TouchableOpacity} from "react-native";
import React from 'react';
import reusable from "./reusable.style";
import { COLORS, SIZES } from "../../constants/theme";
import {HeightSpacer, NetworkImage,WidthSpacer, ReusableText,Rating} from "../../components/index";

const ReusableTile = ({item, onPress }) => {
   return(
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={reusable.rowWithSpace('flex-start')}>
            <NetworkImage source={item.imageUrl} width={80} height={80}  radius={12}/>

            <WidthSpacer width={15}/>
            <View>
            <ReusableText
                text={item.title}
                family={"medium"}
                size={SIZES.medium}
                color={COLORS.black}
                />
            <HeightSpacer height={8}/>

            <ReusableText
                text={item.location}
                family={"medium"}
                size={14}
                color={COLORS.gray}
                />
            <HeightSpacer height={8}/>
            <Rating rating={item.rating}/>
            <View style={reusable.rowWithSpace("flex-start")}>
            <ReusableText
                text={`(${item.review})`}
                family={"medium"}
                size={14}
                color={COLORS.gray}
                />
            </View>
            </View>
        </View>
    </TouchableOpacity>
       
    )
}

export default ReusableTile

const styles=StyleSheet.create({
    container:{
        padding:10,
        backgroundColor:COLORS.lightWhite,
        borderRadius:12
    }
})