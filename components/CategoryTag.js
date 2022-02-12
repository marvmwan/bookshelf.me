import React from 'react';
import {View, Text, StyleSheet } from "react-native";


import {FONTS, COLORS } from '../constants'

const CategoryTag = ({category}) => {
    return (
        <View style={styles.container} > 
            <Text style={styles.text}>{category}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    text: {
        ...FONTS.body1,
        color: COLORS.blue,
        alignSelf: 'center',
        lineHeight: 22,
        height: 22,
    },
    container: {
        borderRadius: 6,
        backgroundColor: 'rgba(0,0,0,0)',
        height: 35,
        alignSelf: 'flex-start',
        borderColor: COLORS.blue,
        borderWidth: 2,
        justifyContent: 'center',
        shadowColor: '#959DA5',
        shadowOffset: {width: 0, height: 7},
        shadowRadius: 15,
        shadowOpacity: .5,
        padding: 10
    }
})

export default CategoryTag;