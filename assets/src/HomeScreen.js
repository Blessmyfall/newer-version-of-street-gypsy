import React from 'react';
import {
    Text,
    SafeAreaView,
    StyleSheet,
    View,
    Image,
    Dimensions,
} from 'react-native';
import {
    FlatList,
    ScrollView,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
} from 'react-native-gesture-handler';
import COLORS from './color';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useFonts } from 'expo-font';
import Lacquer from '../src/fonts/fonts/Lacquer-Regular.ttf';
import categories from '../const/categories';
import ITEMS from '../const/items';

const { width } = Dimensions.get('screen');
const cardwidth = width / 2 - 20;

const HomeScreen = ({navigation}) => {

    const [] = useFonts({
        Lacquer: require('../src/fonts/fonts/Lacquer-Regular.ttf'),
      });

    const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);

    const [loaded] = useFonts({ Lacquer })

    const ListCategories = () => {
        return (
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={style.categoriesListContainer}>
                {categories.map((categories, index) => (
                    <TouchableOpacity
                        key={index}
                        activeOpacity={0.8}
                        onPress={() => setSelectedCategoryIndex(index)}>
                        <View
                            style={{
                                backgroundColor:
                                    selectedCategoryIndex == index
                                        ? COLORS.nude12
                                        : COLORS.nude11,
                                ...style.categoryBtn
                            }}>
                            <View style={style.categoryBtnImgCon}>
                                <Image
                                    source={categories.image}
                                    style={{
                                        height: 35,
                                        width: 35,
                                        resizeMode: 'cover',
                                        borderRadius: 30,
                                    }}
                                />
                            </View>
                            <Text
                                style={{
                                    fontFamily: 'Lacquer',
                                    fontSize: 15,
                                    marginLeft: 8,
                                    color: selectedCategoryIndex == index
                                        ? COLORS.black
                                        : COLORS.grey,
                                }}>
                                {categories.name}
                            </Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        );
    };

    const Card = ({ ITEMS }) => {
        return (
            <TouchableHighlight
                underlayColor={COLORS.nude1}
                activeOpacity={0.9}
                onPress={() => navigation.navigate('DetailsScreen', ITEMS)}>
                <View style={style.card}>
                    <View style={{ alignItems: 'center', top: -40 }}>
                        <Image source={ITEMS.img} style={{ height: 120, width: 120, borderRadius: 120 }} />
                    </View>
                    <View style={{ marginHorizontal: 20 }}>
                        <Text style={{ fontFamily: 'Lacquer', fontSize: 18, marginTop: -35 }}>{ITEMS.name}</Text>
                        <Text style={{ fontSize: 14, color: COLORS.grey, marginTop: 2 }}>{ITEMS.about}</Text>
                    </View>
                    <View
                        style={{
                            marginTop: 10,
                            marginHorizontal: 20,
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{ITEMS.price}</Text>
                        <View style={style.addToCartBtn}>
                            <TouchableOpacity>
                            <Icon name="add" size={20} color={COLORS.nude13} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>

        );
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.nude13 }}>
            <View style={style.header}>
                <View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 26, marginTop: 30 }}>Hello,</Text>
                        <Text style={{ fontSize: 28, marginLeft: 10, fontFamily: 'Lacquer', marginTop: 28 }}>
                            kimmy
                        </Text>
                    </View>
                    <Text style={{ marginTop: -10, fontSize: 15 }}>Lets start shopping</Text>
                </View>
                <Image 
                source={require('../src/img/Box.jpg')}
                    style={{
                        marginTop: 30,
                        height: 50,
                        width: 50,
                        borderRadius: 25,
                    }} />
            </View>
            <View
                style={{
                    marginTop: 40,
                    flexDirection: "row",
                    paddingHorizontal: 20,
                }}>
                <View style={style.inputContainer}>
                    <Icon name="search" size={28} />
                    <TextInput style={{ flex: 1, fontSize: 18, fontFamily: 'Lacquer', marginTop: 8 }}
                        placeholder="search"
                    />
                </View>
                <TouchableOpacity onPress = {()=> navigation.navigate('customerInfo')}>
                <View style={style.sortBtn} > 
                    <Icon 
                        name="tune" size={30}
                    />
                </View>
                </TouchableOpacity>
            </View>
            <View>
                <ListCategories />
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                numColumns={2}
                data={ITEMS}
                renderItem={({ item }) => <Card ITEMS={item} />}
            />
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    header: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    inputContainer: {
        flex: 1,
        height: 50,
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: COLORS.nude11,
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    sortBtn: {
        width: 30,
        height: 50,
        marginLeft: 10,
        marginTop: 10,
    },
    categoriesListContainer: {
        paddingVertical: 10,
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    categoryBtn: {
        height: 50,
        width: 140,
        marginRight: 7,
        borderRadius: 30,
        alignItems: 'center',
        paddingHorizontal: 5,
        flexDirection: 'row',
        top: 1,
    },
    categoryBtnImgCon: {
        height: 35,
        width: 35,
        backgroundColor: COLORS.nude13,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        height: 220,
        width: cardwidth,
        marginHorizontal: 10,
        marginBottom: 20,
        marginTop: 50,
        borderRadius: 15,
        elevation: 13,
        backgroundColor: COLORS.nude11,
    },
    addToCartBtn: {
        height: 30,
        width: 30,
        borderRadius: 20,
        backgroundColor: COLORS.nude12,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default HomeScreen;
