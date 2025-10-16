import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { colors } from "../styles/styles";

interface InfoCardProps {
  title: string;
  text: string;
  image: any; 
}

export default function InfoCard({ title, text, image }: InfoCardProps) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} resizeMode="cover" />
      <View style={styles.body}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: colors.card,
    borderRadius: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  image: { width: "100%", height: 90 },
  body: { padding: 14 },
  title: { fontWeight: "800", fontSize: 18, color: colors.text, marginBottom: 6 },
  text: { color: colors.subtleText },
});
