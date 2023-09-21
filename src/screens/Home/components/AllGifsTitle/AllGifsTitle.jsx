import React from "react";
import { View, Image, FlatList } from "react-native";
import styles from "./AllGifsTitle.style";
import { Sidebar } from "../../../../components";

const AllGifsTitle = ({ route }) => {
  const { gifs, title } = route.params || { gifs: [] };

  const filteredGifsByTitle = gifs.filter((item) => item.title === title);

  const uniqueGifs = [];

  for (const item of filteredGifsByTitle) {
    for (const gif of item.gifs) {
      const isDuplicate = uniqueGifs.some((uniqueGif) => uniqueGif === gif);

      {
        !isDuplicate && uniqueGifs.push(gif);
      }
    }
  }

  const renderItem = ({ item }) => (
    <Image source={{ uri: item }} style={styles.imageGif} />
  );

  return (
    <View style={styles.container}>
      <Sidebar title={title} />
      <FlatList
        data={uniqueGifs}
        numColumns={3}
        columnWrapperStyle={styles.wrapperStyle}
        renderItem={renderItem}
        keyExtractor={(gif) => gif}
      />
    </View>
  );
};

export default AllGifsTitle;
