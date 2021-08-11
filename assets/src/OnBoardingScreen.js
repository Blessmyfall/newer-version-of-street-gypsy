import React from 'react'
import {
    SafeAreaView,
    Image,
    StyleSheet,
    FlatList,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import COLORS from './color';
import { useFonts } from 'expo-font';
import Lacquer from '../src/fonts/fonts/Lacquer-Regular.ttf';

const {width, height} = Dimensions.get('window');

const slides = [
    {
        id: '1',
        image: require('../../assets/src/img/baggu.jpg'),
        title: 'street☯gypsy',
        subtitle: 'are you unique?',
    },
    {
        id: '2',
        image: require('../../assets/src/img/palm.jpg'),
        title: 'street☯gypsy',
        subtitle: 'are you curious?',
    },
    {
        id: '3',
        image: require('../../assets/src/img/IceCubeGoals.jpg'),
        title: 'street☯gypsy',
        subtitle: 'for the unique and curious',
    },
];
const Slide = ({item}) => {
    return(
        <View style={{alignItems:'center'}}>
            <Image 
            source={item?.image} 
            style={{height: '75%', width, resizeMode: 'contain',}}
            />
            <View>
                <Text style={styles.title}>{item?.title}</Text>
                <Text style={styles.subtitle}>{item?.subtitle}</Text>
            </View>
        </View>
    );
};

const OnBoardingScreen = ({navigation}) => {
    const [loaded] = useFonts({ Lacquer })
    const [currentSlideIndex,setCurrentSlideIndex] = React.useState(0);
    const ref = React.useRef();
    const updateCurrentSlideIndex = e => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setCurrentSlideIndex(currentIndex);
    };
    const goToNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1;
        if (nextSlideIndex != slides.length) {
            const offset = nextSlideIndex * width;
            ref?.current.scrollToOffset({ offset });
            setCurrentSlideIndex(currentSlideIndex + 1);
        }
    };
    const skip = () => {
        const lastSlideIndex = slides.length - 1;
        const offset = lastSlideIndex * width;
        ref?.current.scrollToOffset({ offset });
        setCurrentSlideIndex(lastSlideIndex);
    };

    const Footer = () => {
        return(
            <View 
            style={{
                height: height* 0.25,
                justifyContent: 'space-between',
                paddingHorizontal: 20,
            }}>
                <View 
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop:20,
                    }}>
                        {slides.map((_,index) => (
                            <View 
                                key={index} 
                                style={[
                                    styles.indicator,
                                    currentSlideIndex == index && {
                                    backgroundColor: COLORS.nude12,
                                    width: 25,
                                },
                            ]}
                        />
                    ))}
                </View>
                <View style={{marginBottom: 20, }}>
                    { currentSlideIndex == slides.length - 1 ? (
                            <View style={{ height: 50 }}>
                                <TouchableOpacity 
                                style={styles.btn} 
                                onPress={() => navigation.replace('HomeScreen')}>
                                    <Text style={{ fontFamily: 'Lacquer', fontSize: 20,}}>
                                        get started
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        ) : (
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    style={[
                                        styles.btn,
                                        {
                                            fontFamily: 'Lacquer',
                                            backgroundColor: 'transparent',
                                            borderWidth: 1,
                                            borderColor: COLORS.nude12,
                                            marginBottom: 25,
                                        },
                                    ]}
                                onPress={skip}>
                                <Text
                                    style={{
                                        fontFamily: 'Lacquer',
                                        fontSize: 20,
                                        color: COLORS.white,
                                    }}>
                                    skip
                                </Text>
                            </TouchableOpacity>
                            <View style={{ width: 15 }} />
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={goToNextSlide}
                            style={styles.btn}>
                            <Text
                                style={{
                                    fontFamily: 'Lacquer',
                                    fontSize: 20,
                                }}>
                                next
                            </Text>
                        </TouchableOpacity>
                        </View>
                    )}
                </View>
            </View>
        );
    };

    return(
        <SafeAreaView 
        style={{flex:1, backgroundColor: COLORS.nude11}}>
            <StatusBar backgroundColor={COLORS.nude11}/>
            <FlatList 
            ref={ref}
            onMomentumScrollEnd={updateCurrentSlideIndex}
            contentContainerStyle={{ height: height * 0.75 }}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={slides}
            pagingEnabled
            renderItem={({item}) => <Slide item={item}/>}
            />
            <Footer/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    title: {
        color: COLORS.black,
        fontSize: 35,
        fontFamily: 'Lacquer',
        marginTop:30,
        textAlign: 'center'
    },
    subtitle: {
        color: COLORS.black,
        fontFamily: 'Lacquer',
        fontSize: 17,
        marginTop: -15,
        maxWidth: '70%',
        textAlign: 'center',
        lineHeight: 23,
    },
    indicator: {
        height: 15,
        width: 50,
        backgroundColor: COLORS.nude12,
        marginHorizontal: 3,
        borderRadius: 15,
        marginTop: -30,
    },
    btn: {
        flex:1,
        height: 40,
        borderRadius: 5,
        backgroundColor: COLORS.nude12,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -30,
        marginBottom: 37,
    },
});
export default OnBoardingScreen;
