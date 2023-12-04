import {FlatList, StyleSheet, Text, View} from "react-native";
import React from 'react';
import { ProfileTile } from "../../components";

const TopInfo = () => {
    return(
        <View style={{margin:20}}>
            <ProfileTile title={"Personal Information"} icon={'user'}/>
            <ProfileTile title={"Payments"} icon={'creditcard'}/>
            <ProfileTile title={"Settings"} icon={'setting'}/>
        </View>
    )
}

export default TopInfo