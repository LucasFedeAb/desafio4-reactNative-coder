import { View } from "react-native";
import gifsData from "../../data/gifsData";
import styles from "./Home.style";
import { Sidebar } from "../../components";
import HomeTopTabNavigator from "../../navigation/HomeStackNavigator/HomeTopTabNavigator/HomeTopTabNavigator";

const Home = () => {
  const uniqueCategories = [];

  for (const item of gifsData) {
    if (!uniqueCategories.includes(item.category)) {
      uniqueCategories.push(item.category);
    }
  }

  return (
    <View style={styles.container}>
      <Sidebar title={"Home"} />
      <HomeTopTabNavigator uniqueCategories={uniqueCategories} />
    </View>
  );
};

export default Home;
