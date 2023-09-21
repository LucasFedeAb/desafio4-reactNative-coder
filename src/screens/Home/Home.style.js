import { StyleSheet } from "react-native";
import { spacing } from "../../constants/spacing";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgLight,

    paddingBottom: spacing.xxl,
  },

  cardCategory: {
    padding: spacing.m,
  },
});
