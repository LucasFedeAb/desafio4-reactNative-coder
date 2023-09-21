import { StyleSheet } from "react-native";
import { colors } from "./src/constants/colors";
import { spacing } from "./src/constants/spacing";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
  },
  navigationContainer: {
    backgroundColor: colors.bgLight,
    paddingTop: 90,
    paddingBottom: spacing.xxl,
  },
});
