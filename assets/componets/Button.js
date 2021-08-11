import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import COLORS from '../src/color';

const PrimaryButton = ({ title, onPress = () => { } }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
            <View style={style.btnContainer}>
                <Text style={style.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const SecondaryButton = ({ title, onPress = () => {} }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
            <View style={{ ...style.btnContainer, backgroundColor: COLORS.nude11 }}>
                <Text style={{ ...style.title, color: COLORS.black, fontFamily: "Lacquer"}}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const style = StyleSheet.create({
    title: {
        fontSize: 18,
        color: COLORS.white,
    },
    btnContainer: {
        backgroundColor: COLORS.nude12,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        top: -40
    },
});

export { PrimaryButton, SecondaryButton };
