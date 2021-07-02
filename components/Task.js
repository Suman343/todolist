import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Task({ text }) {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square} />
                <Text style={styles.itemText}>{text}</Text>
            </View>
            <View style={styles.circular} />
        </View>
    )
}
const styles = StyleSheet.create({
    circular: {
        borderColor: '#55BCF6',
        borderRadius: 5,
        borderWidth: 2,
        height: 12,
        width: 12,
    },
    item: {
        alignItems: "center",
        backgroundColor: '#fff',
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 15,
        padding: 15,
    },
    itemLeft: {
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    itemText: {
        maxWidth: "80%",
    },
    square: {
        backgroundColor: "#55bcf6",
        borderRadius: 5,
        height: 24,
        marginRight: 15,
        opacity: 0.4,
        width: 24,
    },

})