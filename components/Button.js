import React from 'react';
import { TouchableOpacity, Image, View, Text, StyleSheet } from "react-native";


import { icons, FONTS, COLORS } from '../constants'

const Button = ({onPress, text}) => {
    return (
        <View style={{padding: 0}}>
            <TouchableOpacity 
                onPress={onPress} 
                activeOpacity={.9}
                style={styles.button}
            >   
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
        </View>
            
        
        
    )
}


const styles = StyleSheet.create({
    text: {
        ...FONTS.body1,
        color: COLORS.white
    
    },
    button: {
        borderRadius: 20, 
        backgroundColor: COLORS.blue,
        height: 42, 
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#959DA5',
        shadowOffset: {width: 0, height: 7},
        shadowRadius: 20,
        shadowOpacity: .5,
        padding: 10
    }
})

export default Button;