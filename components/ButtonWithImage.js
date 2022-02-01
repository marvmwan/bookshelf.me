import React from 'react';
import { TouchableOpacity, Image, View, StyleSheet, Text } from "react-native";


import { FONTS, COLORS } from '../constants'

const ImageButton = ({onPress, text, icon}) => {
    return (
        <View style={{padding: 0}}>
            <TouchableOpacity 
                onPress={onPress} 
                style={styles.button}
                activeOpacity={.9}
            >   
                <Text style={styles.text}>{text}</Text>
                <Image source={icon} style={styles.icon} />
            </TouchableOpacity>
        </View>
            
        
        
    )
}

const styles = StyleSheet.create({
    text: {
        ...FONTS.body1,
        color: COLORS.white,
        paddingRight: 5
    
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
        flexDirection: 'row'
    },
    icon: {
        width: 15,
        height: 15,
        marginBottom: 2
    }
})

export default ImageButton;