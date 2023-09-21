import { Text, View } from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import styles from "./SearchScreen.style";
import { SearchInput, Sidebar } from "../../components";
import gifsData from "../../data/gifsData";

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Sidebar title={"Buscar Gifs"} />
      <SearchInput />
    </View>
  );
};

export default SearchScreen;
