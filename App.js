import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import fonts from "./src/global/fonts";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import styles from "./App.Style.js";
import BottomTabNavigator from "./src/navigation/BottomTabNavigator/BottomTabNavigator";

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar animated={true} style="light" backgroundColor="#698e71" />
      <View style={{ flex: 1 }}>
        <NavigationContainer>
          <BottomTabNavigator />
        </NavigationContainer>
      </View>
    </View>
  );
}
