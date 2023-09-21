import { StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { CategoryTopTab } from "../screens";

const TopTab = createMaterialTopTabNavigator();

const HomeTopTabNavigator = ({ uniqueCategories }) => {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarLabelStyle: styles.tabLabel,
        tabBarItemStyle: styles.tabBarItem,
        tabBarContentContainerStyle: styles.tabBarContentContainer,
        indicatorStyle: styles.indicator,
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

const styles = StyleSheet.create({
  tabLabel: {
    fontSize: 10,
    letterSpacing: 1,
  },
  tabBarItem: {
    flex: 1,
    width: "auto",
    marginHorizontal: 50,
  },
  tabBarContentContainer: {
    flexDirection: "row",
  },
  navigationContainer: {
    backgroundColor: "#000",
    paddingTop: 8,
    paddingBottom: 50,
  },
});

export default HomeTopTabNavigator;
