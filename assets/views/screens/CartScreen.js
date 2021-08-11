import React from 'react'
import { Text, SafeAreaView, StyleSheet, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../src/color';
import { FlatList } from 'react-native-gesture-handler';
import ITEMS from '../../const/items';
import { FontDisplay, useFonts } from 'expo-font';
import Lacquer from '../../src/fonts/fonts/Lacquer-Regular.ttf';
import { PrimaryButton } from '../../componets/Button';

const CartScreen = ({ navigation }) => {
    const [loaded] = useFonts({ Lacquer })
    const CartCard = ({ item }) => {
        return (
            <View style={style.CartCard}>
                <Image source={item.img} style={{ height: 80, width: 80, borderRadius: 80 }} />
                <View
                    style={{
                        height: 100,
                        marginLeft: 10,
                        paddingVertical: 20,
                        flex: 1,
                    }}>
                    <Text style={{ fontFamily: 'Lacquer', fontSize: 16 }}>{item.name}</Text>

                    <Text style={{ fontSize: 13, fontWeight: 'bold' }}>{item.price}</Text>
                </View>
                <View style={{ marginRight: 20, alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>3</Text>
                    <View style={style.actionBtn}>
                        <Icon name="remove" size={20} color={COLORS.black} />
                        <Text>l</Text>
                        <Icon name="add" size={20} color={COLORS.black} />
                    </View>
                </View>
            </View>
        );
    };
    return (
        <SafeAreaView style={{ backgroundColor: COLORS.nude13, flex: 1, }}>
            <View style={style.header}>
                <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
                <Text style={{ fontSize: 30, fontFamily: 'Lacquer' }}>cart</Text>
            </View>
            <FlatList showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 80 }}
                data={ITEMS}
                renderItem={({ item }) => <CartCard item={item}
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
                            <Text
                                style={{
                                    fontWeight: 'bold',
                                    fontSize: 18
                                }}>
                                Total Price:
                            </Text>
                            <Text
                                style={{
                                    fontWeight: 'bold',
                                    fontSize: 18
                                }}>
                                $100,000,000.00
                            </Text>
                        </View>
                        <View style={{ marginHorizontal: 30, marginTop: 40, }}>
                            <PrimaryButton title="checkout" />
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
    CartCard: {
        height: 100,
        elevation: 15,
        borderRadius: 10,
        backgroundColor: COLORS.nude11,
        marginHorizontal: 30,
        marginVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    actionBtn: {
        height: 30,
        width: 80,
        backgroundColor: COLORS.nude12,
        borderRadius: 30,
        paddingHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 10,
        top: -1
    },
});
export default CartScreen;
