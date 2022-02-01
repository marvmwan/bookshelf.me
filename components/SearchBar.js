import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { DebugInstructions } from 'react-native/Libraries/NewAppScreen';

import { FONTS, COLORS, icons } from '../constants'

const SearchBar = ({ onPress, navigation }) => {
    return (
        <>
            <View
                style={styles.searchBox}
            >   
                <TouchableOpacity  
                    onPress={onPress}
                    activeOpacity={1}
                    style={{flexDirection: 'row', alignItems: 'center'}}
                >
                    <Image
                    style={{
                        width: 15,
                        height: 15,
                        marginLeft: 20,
                        tintColor: COLORS.gray1

                    }} 
                    source={icons.search}
                    />
                    <Text
                        style={{
                            marginLeft: 12,
                            color: COLORS.gray,
                            ...FONTS.body5,
                            marginRight: 75
                        }}
                    >
                        {/* Search text placeholder */}
                        Search books, authors, etc...
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    activeOpacity={1}
                    onPress={() => navigation.navigate('Profile')}
                >
                    <Image 
                        source={icons.profile}
                        style={{
                            width: 24,
                            height: 24,
                            borderRadius: 100,
                            marginLeft: 20
                        }}
                    />
                </TouchableOpacity>
                
            </View>
        </>
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
