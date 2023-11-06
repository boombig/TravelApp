import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import React from 'react';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { TopBookings, TopInfo, TopTrips } from "../screens";
import { AppBar, HeightSpacer, NetworkImage, ReusableText } from "../components";
import { COLORS, SIZES } from "../constants/theme";
import styles from "./topTab.style";
const Tab = createMaterialTopTabNavigator();
const TopTab = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{backgroundColor:COLORS.lightWhite}}>
                <View >
                    <NetworkImage
                        source={
                            "data:image/jpeg;base64,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"
                        }
                        width={'100%'}
                        height={300}
                        radius={0}
                    />
                    <AppBar
                    top={40}
                    left={20}
                    right={20}
                    color={COLORS.white}
                    icon={'logout'}
                    color1={COLORS.white}
                    onPress1={()=>{}}
                    />
                    <View style={styles.profile}>
                        <Image source={{
                            uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWsOXQLjEY3wx24uU3waeCqQV2iw2fs3XQww&usqp=CAU"
                        }}
                            style={styles.image}
                            />
                            <HeightSpacer height={5}/>
                            
                                <View style={{alignItems:"center"}}>
                                <ReusableText
                                text={'King'}
                                family={"medium"}
                                size={SIZES.medium}
                                color={COLORS.black}
                                />
                                </View>
                            
                            <HeightSpacer height={5}/>
                            <View style={styles.name}>
                                <View style={{alignItems:"center"}}>
                                <ReusableText
                                text={'truongngoctan@gmail.com'}
                                family={"medium"}
                                size={SIZES.medium}
                                color={COLORS.white}
                                />
                               </View>
                            </View>
                    </View>
                </View>
            </View>
            <Tab.Navigator>
                <Tab.Screen name='Bookings' component={TopBookings} />
                <Tab.Screen name='Trips' component={TopTrips} />
                <Tab.Screen name='Info' component={TopInfo} />
            </Tab.Navigator>
        </View>
    )
}

export default TopTab