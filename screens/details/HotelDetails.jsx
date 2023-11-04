import {FlatList, StyleSheet, Text, View, ScrollView} from "react-native";
import React from 'react';
import { AppBar } from "../../components";
import { COLORS } from "../../constants/theme";

const HotelDetails = ({navigation}) => {
    return(
        <ScrollView>
            <View style={{height:80}}>
                <AppBar
                    top={50}
                    left={20}
                    right={20}
                    title={'dsdad'}
                    color={COLORS.white}
                    icon={"search1"}
                    color1={COLORS.white}
                    onPress={()=>navigation.goBack()}
                    onPress1={()=>{}}
                />
            </View>
        </ScrollView>
    )
}

export default HotelDetails