import {FlatList, StyleSheet, Text, View} from "react-native";
import React from 'react';
import { useRoute } from "@react-navigation/native";
const PlaceDetails = () => {
    const route=useRoute();
    const id= route.params
    console.log(id);
   return(
        <View>

        </View>
    )
}

export default PlaceDetails