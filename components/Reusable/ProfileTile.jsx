import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from 'react';
import { AntDesign } from "@expo/vector-icons"
import ReusableText from "./ReusableText";
import WidthSpacer from "./WidthSpacer";
import reusable from "./reusable.style";
import { COLORS, SIZES } from "../../constants/theme";
const ProfileTile = ({ onPress, icon, title }) => {
    return (
        <TouchableOpacity style={styles.tile} onPress={onPress}>
            <View style={reusable.rowWithSpace("space-between")}>
                <View style={reusable.rowWithSpace("flex-start")}>
                    <AntDesign name={icon} size={20} />
                    <WidthSpacer width={10} />
                    <ReusableText
                        text={title}
                        family={"regular"}
                        size={SIZES.medium}
                        color={COLORS.gray}
                    />
                    <AntDesign name="right" size={20} color={COLORS.dark} />
                </View>
            </View>
        </TouchableOpacity>
    )
}
export default ProfileTile
const styles = StyleSheet.create({
    tile: {
        padding: 15,
        backgroundColor: COLORS.lightWhite,
        borderRadius: 12,
        marginBottom: 10
    },
})