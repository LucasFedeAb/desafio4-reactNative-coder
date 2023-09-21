import { Pressable, TextInput, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "./SearchInput.style";

const SearchInput = ({ onSearch, handleSearch }) => {
  const [value, setValue] = useState("");

  const clearInput = () => {
    setValue("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        style={styles.searchField}
        placeholder="Search..."
        placeholderTextColor="#010718"
      />

      <TouchableOpacity style={styles.searchIcon}>
        <Ionicons name={"search-outline"} size={22} color="#010718" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.closeIcon} onPress={clearInput}>
        <Ionicons name="close" size={25} color={"black"} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
