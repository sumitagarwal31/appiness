import React, { useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    StatusBar
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";

const DashboardScreen = () => {
    const { user } = useSelector(s => s.user)
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor='#fff' barStyle='dark-content' />
            <View style={{justifyContent:'center', alignItems:'center'}}>
                <Text style={styles.header}>Dashboard Screen</Text>
            </View>
            <ScrollView>
                <View>
                    {user?.map(k => <View style={styles.view}>
                        <Text style={styles.text}>Name: {k.name}</Text>
                        <Text style={styles.text}>Age: {k.age}</Text>
                        <Text style={styles.text}>Gender: {k.gender}</Text>
                        <Text style={styles.text}>Email: {k.email}</Text>
                        <Text style={styles.text}>PhoneNo: {k.phone}</Text>
                    </View>)}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    view: {
        height: 150,
        backgroundColor: '#c3c3c3',
        marginTop: 20,
        marginHorizontal: 20,
        padding: 20,
        borderRadius: 8
    },
    header: {
        color: '#000',
        fontSize: 22,
        fontWeight: '500'
    },
    text: {
        color: '#000',
        fontSize: 18,
        fontWeight: '500'
    }
})

export default DashboardScreen