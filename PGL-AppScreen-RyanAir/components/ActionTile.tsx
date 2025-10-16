import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { colors } from "../styles/styles";

interface ActionTileProps {
  icon: string;
  title: string;
  subtitle: string;
}

export default function ActionTile({ icon, title, subtitle }: ActionTileProps) {
  return (
    <View style={styles.card}>
      <View style={styles.iconWrap}>
        <FontAwesome5 name={icon as any} size={22} color={colors.ryanairBlue} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 16,
    height: 140,
    justifyContent: "center",
    alignItems: "flex-start",
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  iconWrap: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: "#EEF2FF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  title: { fontWeight: "800", fontSize: 18, color: colors.text },
  subtitle: { color: colors.subtleText, marginTop: 4 },
});
