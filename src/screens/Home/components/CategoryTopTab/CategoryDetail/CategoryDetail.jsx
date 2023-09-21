import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "./CategoryDetail.style";
import gifsData from "../../../../../data/gifsData";
import { useNavigation } from "@react-navigation/native";

const CategoryDetail = ({ category }) => {
  const filteredItemsByCategory = gifsData.filter(
    (item) => item.category === category
  );
  const navigation = useNavigation();

  const handleAllGifsByTitle = (title) => {
    navigation.navigate("AllGifsTitle", {
      gifs: filteredItemsByCategory,
      category,
      title,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerCategory}>
        <Image
          source={{ uri: filteredItemsByCategory[0]?.imageCategory }}
          style={styles.imageCategory}
        />
      </View>
      <ScrollView style={styles.scrollContainer}>
        {filteredItemsByCategory.map((item) => (
          <View style={styles.containerGifsCharacter} key={item.id}>
            <View style={styles.headerListGifs}>
              <Text style={styles.title}>{item.title}</Text>
              <TouchableOpacity
                onPress={() => handleAllGifsByTitle(item.title)}
              >
                <Text style={styles.label}>{`Ver más`}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.gifsContainer}>
              {item.gifs.slice(0, 3).map((gif, index) => (
                <Image
                  source={{ uri: gif }}
                  style={styles.imageGif}
                  key={index}
                />
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoryDetail;
