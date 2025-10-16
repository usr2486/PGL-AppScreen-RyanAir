
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { colors } from "../styles/styles";


const Tab = ({name,label}:{name:string;label:string}) => (
  <View style={styles.tab}>
    <FontAwesome5 name={name as any} size={18} color={colors.ryanairBlue} />
    <Text style={styles.label}>{label}</Text>
  </View>
);

export default function BottomTabs(){
  return (
    <View style={styles.bar}>
      <Tab name="home" label="Home" />
      <Tab name="plane-departure" label="Assistant" />
      <Tab name="clipboard-check" label="Check-in" />
      <Tab name="ellipsis-h" label="More" />
    </View>
  );
}

const styles = StyleSheet.create({
  bar:{ flexDirection:"row", justifyContent:"space-between", paddingHorizontal:22, paddingVertical:12, backgroundColor:colors.card, borderTopWidth:1, borderTopColor:"#E9EDF2" },
  tab:{ alignItems:"center", gap:6 },
  label:{ color: colors.subtleText, fontSize:12, fontWeight:"600" }
});
