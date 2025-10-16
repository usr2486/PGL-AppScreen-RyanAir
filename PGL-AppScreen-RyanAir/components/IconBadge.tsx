import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { colors } from "../styles/styles";

interface IconBadgeProps {
  name: string;
  label: string;
}

export default function IconBadge({ name, label }: IconBadgeProps) {
  return (
    <View style={styles.container}>
      <FontAwesome5 name={name as any} size={18} color={colors.card} />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: colors.ryanairBlue,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 999,
  },
  label: { color: colors.card, fontWeight: "700" },
});
