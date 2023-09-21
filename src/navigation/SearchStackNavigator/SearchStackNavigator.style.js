import { StyleSheet } from "react-native";
import { colors, colorGreen } from "../../constants/colors";

export default styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    backgroundColor: colorGreen.primary,
    paddingVertical: 4,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  buttonBackHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 32,
  },
  textHeader: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 8,
    marginBottom: 2,
  },
});
