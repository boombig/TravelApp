import { FlatList, StyleSheet, Text, View } from "react-native";
import React from 'react';
import { AssetImage } from '../../components'

const SelectRoom = () => {
    return(
        <View>
        <AssetImage data={require('../../assets/images/checked.png')}
            width={'100%'}
            height={200}
        />
    </View>
    )
}

export default SelectRoom