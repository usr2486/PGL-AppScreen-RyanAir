import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../styles/styles";


export default function Banner({source}:{source:any}){
  return (
    <View style={styles.container}>
      <Image source={source} style={styles.image} />
      <LinearGradient
        colors={[colors.bannerGradientTop, colors.bannerGradientBottom]}
        start={{x:0,y:0}} end={{x:0,y:1}}
        style={StyleSheet.absoluteFillObject}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ borderRadius:16, overflow:"hidden", height:150, backgroundColor:"#ddd" },
  image:{ width:"100%", height:"100%" }
});
