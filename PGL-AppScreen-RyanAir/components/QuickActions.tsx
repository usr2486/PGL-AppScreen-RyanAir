
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../styles/styles";


export default function QuickActions() {
    return (
        <View style={styles.wrap}>
            <Text style={styles.cta}>🔍 Book a flight</Text>
            <View style={styles.grid}>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrap: { marginTop: 12 },
    cta: {
        backgroundColor: colors.ryanairYellow,
        color: colors.ryanairBlueDark,
        fontWeight: "900",
        textAlign: "center",
        paddingVertical: 16,
        borderRadius: 12,
        fontSize: 20
    },
    grid: { marginTop: 12, flexDirection: "row", gap: 12 }
});
