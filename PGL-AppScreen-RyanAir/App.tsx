import React from "react";
import { StatusBar, ScrollView, View } from "react-native";
import HeaderBar from "./components/HeaderBar";
import Banner from "./components/Banner";
import QuickActions from "./components/QuickActions";
import ActionTile from "./components/ActionTile";
import InfoCard from "./components/InfoCard";
import BottomTabs from "./components/BottomTabs";
import { colors } from "./styles/styles";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.ryanairBlue }}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <HeaderBar />
        <Banner source={undefined} />
        <QuickActions />
        <View style={{ flexDirection: "row", gap: 12, marginTop: 12 }}>
          <ActionTile icon="suitcase-rolling" title="Bookings" subtitle="Manage trips" />
          <ActionTile icon="ticket-alt" title="Boarding Passes" subtitle="Your QR codes" />
          <ActionTile icon="mug-hot" title="Order To Seat" subtitle="Drinks & snacks" />
        </View>
        <View style={{ flexDirection: "row", gap: 12, marginTop: 16 }}>
          <InfoCard title="Bus and Train" text="Low cost bus & train transfers" image={undefined} />
          <InfoCard title="Digital Boarding Pass" text="Fully mobile boarding passes" image={undefined} />
          <InfoCard title="Ryanair Prime" text="Exclusive membership!" image={undefined} />
        </View>
      </ScrollView>
      <BottomTabs />
    </View>
  );
}
