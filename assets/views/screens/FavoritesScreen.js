import React from 'react'
import { Text, SafeAreaView, StyleSheet, View, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../src/color';
import { FlatList } from 'react-native-gesture-handler';
import ITEMS from '../../const/items';
import { useFonts } from 'expo-font';
import Lacquer from '../../src/fonts/fonts/Lacquer-Regular.ttf';

const { width } = Dimensions.get('screen');
const cardwidth = width / 2 - 20;

const FavoritesScreen = ({ navigation }) => {
    const [loaded] = useFonts({ Lacquer })
    const FavCard = ({ item }) => {
        return (
            <View style={style.FavCard}>
                <Image source={item.img} style={{ height: 100, width: 100, borderRadius: 100, }} />
                <View
                    style={{
                        height: 100,
                        alignItems: 'center',
                        paddingVertical: 20,
                        flex: 1,
                    }}>
                    <Text style={{ fontFamily: 'Lacquer', fontSize: 18}}>{item.name}</Text>

                    <Text style={{ fontSize: 18, fontWeight: 'bold'}}>{item.price}</Text>
                </View>
                <View style={{ marginRight: 20, alignItems: 'center' }}>
                    <View style={style.actionBtn}>
                        <Icon name="favorite" size={20} color={COLORS.nude12} />
                    </View>
                </View>
            </View>
        );
    };
    return (
        <SafeAreaView style={{ backgroundColor: COLORS.nude13, flex: 1, }}>
            <View style={style.header}>
                <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
                <Text style={{ fontSize: 30, fontFamily: 'Lacquer' }}>favorites</Text>
            </View>
            <FlatList showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 80 }}
                numColumns={2}
                data={ITEMS}
                renderItem={({ item }) => <FavCard item={item}
                />}
                ListFooterComponentStyle={{ paddingHorizontal: 20, marginTop: -5 }}
                ListFooterComponent={() => (
                    <View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginVertical: 15,
                            }}>
                        </View>
                    </View>)}
            />
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    header: {
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
    },
    FavCard: {
        height: 200,
        width: cardwidth,
        marginHorizontal: 10,
        marginBottom: 15,
        marginTop: 5,
        borderRadius: 15,
        elevation: 13,
        backgroundColor: COLORS.nude11,
        alignItems: 'center',
    },
    actionBtn: {
        paddingHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 10,
        left: 10,
        top: -5,
    },
});
export default FavoritesScreen;
