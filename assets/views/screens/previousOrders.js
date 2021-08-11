import React from 'react';
import { Dimensions, StyleSheet, View, Text} from 'react-native';
import COLORS from '../../src/color';
import MapView, { Callout, Circle, Marker } from 'react-native-maps';
import { useFonts } from 'expo-font';
import Lacquer from '../../src/fonts/fonts/Lacquer-Regular.ttf';

export default function previousOrders(){
    const [pin, setPin] = React.useState({
        latitude: 37.78825,
        longitude: -122.4324,
    })
    return(
        <View style={styles.container}>
            <MapView 
                style={styles.map}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}
            >
                <Marker
                    coordinate={pin}
                    pinColor="black"
                    draggable={true}
                    onDragStart={(e) => {
                        console.log("Drag start", e.nativeEvent.coordinates)
                    }}
                    onDragEnd={(e) => {
                        setPin({
                            latitude: e.nativeEvent.coordinate.latitude,
                            longitude: e.nativeEvent.coordinate.longitude,
                        })
                    }}
                >
                    <Callout>
                        <Text style ={{fontFamily: 'Lacquer'}}>I'm here</Text>
                    </Callout>
                </Marker>
                <Circle 
                    center={pin} 
                    radius={1000}
                />
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: "center",
        justifyContent: "center"
    },
    map: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height
    }
})