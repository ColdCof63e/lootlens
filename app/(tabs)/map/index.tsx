import React from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";
import { darkMapStyle } from "../../../constants/MapStyle";

export default function MapScreen() {
  return (
    <SafeAreaView style={styles.container} 
    edges={["top"]}
    >
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        customMapStyle={darkMapStyle}
        showsUserLocation={true}
        showsMyLocationButton={true}
        initialRegion={{
          latitude: 43.6532,
          longitude: -79.3832,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {/* Sample Gameplay Loot Marker */}
        <Marker
        coordinate={{latitude: 43.6552, longitude: -79.3852}}
        title="Loot Drop #1"
        description="Rare item node detected"/>
      </MapView>
    </SafeAreaView>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  map: {
    flex: 1,
  },
};
