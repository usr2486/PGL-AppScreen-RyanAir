
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../styles/styles";


type PillProps = { text: string };
export default function Pill({ text }: PillProps) {
  return (
    <View style={styles.pill}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  pill: {
    backgroundColor: colors.card,
    borderRadius: 12,
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignSelf: "flex-start",
  },
  text: {
    color: colors.text,
    fontWeight: "600",
  },
});
