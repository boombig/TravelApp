import { FlatList, StyleSheet, Text, View } from "react-native";
import React from 'react';
import { useRoute } from "@react-navigation/native";
import { AppBar, HeightSpacer, NetworkImage, Rating, ReusableText, WidthSpacer } from "../../components";
import { COLORS, SIZES } from "../../constants/theme";
import reusable from "../../components/Reusable/reusable.style";
const SelectedRoom = () => {
    const router = useRoute();
    const { item } = router.params;
    console.log(item);
    return (
        <View>
            <View style={{ height: 100 }}>
                <AppBar
                    top={50}
                    left={20}
                    right={20}
                    title={'Select Room'}
                    color={COLORS.white}
                    icon={'search1'}
                    onPress={() => navigation.goBack()}
                />
            </View>
            <View style={{ marginHorizontal: 20 }}>
                <View style={{backgroundColor:COLORS.lightWhite, borderRadius: 16}}>
                    <NetworkImage 
                    source={item.imageUrl}
                    width={"100%"}
                    height={200}
                    radius={16}
                    />

                    <HeightSpacer height={20} />

                    <View style={{ marginHorizontal: 10 }}>
                        <View style={reusable.rowWithSpace("space-between")}>
                            <ReusableText
                                text={item.title}
                                family={"medium"}
                                size={SIZES.medium}
                                color={COLORS.black}
                            />
                            <View style={reusable.rowWithSpace("flex-start")}>
                                
                                <Rating rating={item.rating}/>
                                
                                <WidthSpacer width={10}/>
                                
                                <ReusableText
                                text={`(${item.review})`}
                                family={"regular"}
                                size={SIZES.medium}
                                color={COLORS.gray}
                                />
                            </View>
                        </View>

                        <HeightSpacer height={10}/>

                        <ReusableText
                        text={item.location}
                        family={"medium"}
                        size={SIZES.medium}
                        color={COLORS.gray}
                        />
                        <View style={{borderWidth: 0.5, borderColor: COLORS.lightGrey, marginVertical: 15}}>

                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default SelectedRoom