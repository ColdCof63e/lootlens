import React from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
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
        initialRegion={{
          latitude: 43.6532,
          longitude: -79.3832,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
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
