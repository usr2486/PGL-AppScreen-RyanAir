import React from "react";
import { View, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { colors } from "../styles/styles";
import IconBadge from "./IconBadge";

export default function HeaderBar() {
  return (
    <View style={styles.wrap}>
      <View style={styles.row}>
        <FontAwesome5 name="kiwi-bird" size={26} color="white" />
        <View style={{ flex: 1 }} />
        <IconBadge name="user-circle" label="myRyanair Portal" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: colors.ryanairBlue,
    paddingTop: 46,
    paddingBottom: 14,
    paddingHorizontal: 16,
  },
  row: { flexDirection: "row", alignItems: "center", gap: 12 },
});
