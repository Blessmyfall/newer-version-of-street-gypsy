import React, { useState }  from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView, Image, CheckBox } from 'react-native';
import COLORS from '../../src/color';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
    TextInput,
} from 'react-native-gesture-handler';

const customerInfo= ({navigation}) => {
    const [isSelected, setSelection] = useState(false);
    return (
        <SafeAreaView style={{ backgroundColor: COLORS.nude11 }}>
            <View style={styles.header}>
                <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
                <Text style={{ fontSize: 30, fontFamily: 'Lacquer'}}>customer information</Text>
            </View>
            <View style={styles.CartCard}>
            <Text style={{alignContent:'center'}}>Help a student in need. Donate R30.00</Text>
            <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
            />
            </View>
            <View style={styles.SignUp}>
                <Text style={{ fontSize: 30, fontFamily: 'Lacquer'}}>sign up</Text>
            </View>
            <View
                style={{
                    marginTop: 40,
                    flexDirection: "row",
                    paddingHorizontal: 20,
            }}>
            </View>
            <View style={styles.inputContainer}>
                <Icon name="search" size={28} />
                <TextInput style={{ flex: 1, fontSize: 18, fontFamily: 'Lacquer', marginTop: 8 }}
                    placeholder="e.g Tom@gmail.com"
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    header: {
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
        backgroundColor: COLORS.nude11,
    },
    CartCard: {
        height: 50,
        elevation: 15,
        borderRadius: 10,
        backgroundColor: COLORS.nude11,
        marginHorizontal: 30,
        marginVertical: 10,
        paddingHorizontal: -50,
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
    },
    SignUp: {
        alignItems: 'center',
        alignContent: 'center',
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
});

export default customerInfo;