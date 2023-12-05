import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import React from 'react';

const Successful = () => {
    const hotel = {
        "_id": "64c67442776ed29f19727fd7",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Luxury Hotel 1",
        "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/4fdc30c2-08c5-4bca-b05c-d8b8a60b020f-luxury1.webp",
        "rating": 4.7,
        "review": "1204 Reviews",
        "location": "New York City, NY"
    }
    return (
        <View >
            <View style={{ marginTop: "40%" }}>
                <Image data={require('../../assets/images/checked.png')}
                    width={'100%'}
                    height={200}
                    mode={'contain'}
                />
            </View>
        </View>
    )
}

export default Successful
const styles=StyleSheet.create

