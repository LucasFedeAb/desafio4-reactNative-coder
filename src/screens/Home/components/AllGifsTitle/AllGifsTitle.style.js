import { StyleSheet } from "react-native";
import { colors } from "../../../../constants/colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgLight,
  },

  containerScroll: {
    flex: 1,
    backgroundColor: colors.bgDark,
  },
  wrapperStyle: { justifyContent: "space-evenly" },
  imageGif: {
    width: 120,
    height: 120,
    marginVertical: 16,
  },
  scrollContainer: {
    width: "100%",
    marginTop: 140,
  },
  containerCategory: {
    height: 500,
    width: "100%",
  },
  flat: {
    width: "50%",
  },
  scrollViewContent: {
    flexDirection: "row",
    paddingHorizontal: 16,
    width: "100%",
  },
  containerImg: {
    justifyContent: "space-between",
    alignItems: "center",
  },
});
