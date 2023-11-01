import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts} from 'expo-font';
import * as Splashscreen from "expo-splash screen";
import { useCallback} from 'react';
export default function App() {
const [fontsLoaded] = useFonts({
    regular: require('./assets/fonts/regular.otf'),
    bold: require('./assets/fonts/bold.otf'),
    light: require('./assets/fonts/light.otf'),
    medium: require('./assets/fonts/medium.otf'),
    extraBold: require('./assets/fonts/extraBold.otf'),
});

const onLayoutRootView = useCallback(async () => {
    if(fontsLoaded){
        await Splashscreen.hideAsync()
    }
},[fontsLoaded]);
if(!fontsLoaded){
    return null;
}
  return (
    <View style={styles.container}>
      <Text style={style.textStyle}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle:{
    fontFamily:"bold",
    fontSize: 24
  }
});
