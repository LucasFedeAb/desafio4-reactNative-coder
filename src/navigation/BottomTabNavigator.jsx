import React from "react";
import HomeTopTabNavigator from "./HomeTopTabNavigator";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors, colorGreen } from "../constants/colors";
import HomeStackNavigator from "./HomeStackNavigator";
import SearchStackNavigator from "./SearchStackNavigator";

const BottomTab = createBottomTabNavigator();

function CustomCreateIcon({ focused }) {
  return (
    <View style={focused ? styles.iconPlusStyleFocus : styles.iconPlusStyle}>
      <Ionicons name="add-circle" size={40} color={colors.primary} />
      {focused && <Text style={styles.tabLabelFocusPlus}>Crear</Text>}
    </View>
  );
}

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let labelText;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
            labelText = "Inicio";
          } else if (route.name === "Saves") {
            iconName = focused ? "bookmarks" : "bookmark-outline";
            labelText = "Guardados";
          } else if (route.name === "Create") {
            return <CustomCreateIcon focused={focused} />;
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "search-outline";
            labelText = "Buscar";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
            labelText = "Perfil";
          }

          return (
            <React.Fragment>
              <Ionicons
                name={iconName}
                size={25}
                color={focused ? colors.primary : "#000"}
              />
              {focused && <Text style={styles.tabLabelFocus}>{labelText}</Text>}
            </React.Fragment>
          );
        },
      })}
    >
      <BottomTab.Screen name="Home" component={HomeStackNavigator} />
      <BottomTab.Screen name="Search" component={SearchStackNavigator} />
    </BottomTab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colorGreen.quaternary,
    alignItems: "center",
    height: 55,
  },

  tabLabelFocus: {
    color: colors.primary,
    fontSize: 10,
    fontWeight: "600",
  },
  iconPlusStyle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colorGreen.tertiary,
    fontSize: 40,
    borderRadius: 60,
    bottom: 5,
    paddingHorizontal: 6.5,
    color: colors.primary,
    padding: 5,
  },
  iconPlusStyleFocus: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colorGreen.tertiary,
    fontSize: 40,
    borderRadius: 60,
    bottom: 5,
    paddingHorizontal: 6.5,
    color: colors.primary,
    padding: 5,
    transform: [{ translateY: -10 }],
  },
  tabLabelFocusPlus: {
    color: colors.primary,
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    paddingTop: 4,
  },
});

export default BottomTabNavigator;
