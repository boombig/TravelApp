import {FlatList, StyleSheet, Text, View, TouchableOpacity} from "react-native";
import React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import reusable from "../../components/Reusable/reusable.style";
import { SIZES, TEXT } from "../../constants/theme";
import {AntDesign} from "@expo/vector-icons";
import styles from "./home.style";
import { HeightSpacer, ReusableText,Places, Recommendation, BestHotels } from "../../components/index";
import { COLORS } from "../../constants/theme";
const Home = () => {
    return(
        <SafeAreaView style={reusable.container.container}>
            <View>
                <View style={reusable.rowWithSpace('space-between')}>
                <ReusableText
                text={'Hey User!'}
                family={"regular"}
                size={TEXT.large}
                color={COLORS.black}
                />
                <TouchableOpacity style={styles.box}
                onPress={()=> navigation.navigate('Search')}>
                    <AntDesign
                    name='search1'
                    size={26}
                    />
                </TouchableOpacity>
                </View>

                
                <HeightSpacer height={SIZES.xLarge}/>

                <ReusableText
                text={'Places'}
                family={"medium"}
                size={TEXT.large}
                color={COLORS.black}
                />
                <Places/>
                <HeightSpacer height={15}/>

                <Recommendation/>

                <HeightSpacer height={30}/>

                <BestHotels/>

            </View>
        </SafeAreaView>
    )
}

export default Home