import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { CategoryTopTab } from "../../../screens/Home/components";
import styles from "./HomeTopTabNavigator.style";

const TopTab = createMaterialTopTabNavigator();

const HomeTopTabNavigator = ({ uniqueCategories }) => {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarLabelStyle: styles.tabLabel,
        tabBarItemStyle: styles.tabBarItem,
        tabBarContentContainerStyle: styles.tabBarContentContainer,
      }}
    >
      {uniqueCategories.map((category) => (
        <TopTab.Screen
          name={category}
          component={CategoryTopTab}
          initialParams={{ category }}
          key={category}
        />
      ))}
    </TopTab.Navigator>
  );
};

export default HomeTopTabNavigator;
