import {Text, View,Image} from 'react-native';
import React from 'react';
import styles from './slides.style';
import ReusableText from "../Reusable/ReusableText";
import { COLORS,SIZES} from '../../constants/theme';
const Slides = ({item}) => {
    return(
        <View>
            <Image source={item.image} style={styles.name}/>
            <View style={styles.stack}>
                <ReusableText
                text={item.title}
                family={'medium'}
                size={SIZES.xxlarge}
                color={COLORS.white}
                />
            </View>
        </View>
    )
}

export default Slides