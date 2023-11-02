import {FlatList, StyleSheet, Text, View} from "react-native";
import React from 'react';
import { useRoute } from "@react-navigation/native";
const CountryDetails = ({navigation}) => {
    const route=useRoute();
    const {item}=route.params;
    console.log(item);
    return(
        <View>

        </View>
    )
}

export default CountryDetails