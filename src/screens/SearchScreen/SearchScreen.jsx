import { View } from "react-native";
import styles from "./SearchScreen.style";
import { SearchInput } from "../../components";

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <SearchInput />
    </View>
  );
};

export default SearchScreen;
