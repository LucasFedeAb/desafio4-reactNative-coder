import { View, StyleSheet } from "react-native";
import CategoryDetail from "./CategoryDetail/CategoryDetail";

const CategoryTopTab = ({ route }) => {
  const { category } = route.params;

  return (
    <>
      <View style={styles.navigationContainer}>
        <CategoryDetail category={category} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  navigationContainer: {
    backgroundColor: "#f2f2f2",
    paddingTop: 8,
  },
});

export default CategoryTopTab;
