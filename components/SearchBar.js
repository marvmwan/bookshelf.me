import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { DebugInstructions } from 'react-native/Libraries/NewAppScreen';

import { FONTS, COLORS, icons } from '../constants'

const SearchBar = ({ onPress, navigation }) => {
    return (
    
        <TouchableOpacity  
                    onPress={onPress}
                    activeOpacity={1}
                    style={{flexDirection: 'row', alignItems: 'center'}}
        >
            <View
                style={styles.searchBox}
            >   
                    <Image
                    style={{
                        width: 18,
                        height: 18,
                        marginLeft: 20,
                        tintColor: COLORS.gray1

                    }} 
                    source={icons.search}
                    />
                    <Text
                        style={{
                            marginLeft: 12,
                            color: COLORS.gray,
                            ...FONTS.body6,
                            marginRight: 75
                        }}
                    >
                        {/* Search text placeholder */}
                        Search books, authors, etc...
                    </Text>
                
            </View>
        </TouchableOpacity>
        
    )
}


 const styles = StyleSheet.create({
     searchBox: {
        backgroundColor: '#FFFFFF',
        shadowColor: 'rgba(100, 100, 111, 0.2)',
        shadowOffset: {width: 0, height: 7},
        shadowRadius: 29,
        shadowOpacity: 1,
        height: 40,
        width: 358,
        borderRadius: 7,
        alignItems: 'center',
        flexDirection: 'row'


     }
 })

export default SearchBar;
