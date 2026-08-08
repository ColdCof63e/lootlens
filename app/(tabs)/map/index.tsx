import React from 'react'
import { View } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

export default function MapScreen() {
    return (
        <View style={styles.container}>
            <MapView provider={PROVIDER_GOOGLE}
            style={styles.map}
            initialRegion={{
                latitude: 43.6532,
                longitude: -79.3832,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            }}/>
        </View>
    )
}

const styles = {
    container: {
        flex:1,
        backgroundColor: "#000"
    },

    map: {
        flex: 1
    }
}