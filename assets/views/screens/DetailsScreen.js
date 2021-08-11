import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../src/color';
import { useFonts } from 'expo-font';
import Lacquer from '../../src/fonts/fonts/Lacquer-Regular.ttf';
import { SecondaryButton } from '../../componets/Button';

const DetailsScreen = ({ navigation, route }) => {
    const item = route.params;
    const [loaded] = useFonts({ Lacquer })

    return (
        <SafeAreaView style={{ backgroundColor: COLORS.nude11 }}>
            <View style={style.header}>
                <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
                <Text style={{ fontSize: 20, fontFamily: 'Lacquer', }}>details</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 280,
                    }}>
                    <Image source={item.img} style={{ height: 280, width: 300, borderRadius: 10 }} />
                </View>
                <View style={style.details}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>
                        <Text
                            style={{ fontSize: 25, fontFamily: 'Lacquer' }}>
                            {item.name}
                        </Text>
                        <View style={style.iconContainer}>
                            <TouchableOpacity>
                            <Icon name="favorite-border" color={COLORS.nude1} size={25} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={style.detailsText}>{item.more}
                    </Text>
                    <View style={{ marginTop: 80, marginBottom: 40 }}>
                        <SecondaryButton title="add to cart" />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    header: {
        paddingVertical: 25,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
        marginLeft: 10,
    },
    details: {
        paddingHorizontal: 20,
        paddingTop: 40,
        paddingBottom: 60,
        backgroundColor: COLORS.nude12,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
    },
    iconContainer: {
        backgroundColor: COLORS.nude13,
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    detailsText: {
        marginTop: 10,
        lineHeight: 22,
        fontSize: 16,
        color: COLORS.black,
    },
});

export default DetailsScreen;
