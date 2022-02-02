import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, TextInput, FlatList } from 'react-native';

import { FONTS, COLORS, icons } from '../constants'
import SearchCard from './SearchCard';



const debounce = (fn, delay) => {
    let timerId;
    return (...args) => {
        clearTimeout(timerId);
        timerId = setTimeout(fn, delay, [...args]);
    };
};



const SectionHeaders = ({header}) => {
    return (
        <Text 
            style={{
                ...FONTS.h2,
                color: COLORS.blue,
            }}
        >
            {header}
        </Text>
    )
}


const Banner = (textSearch) => {
    if(textSearch.searchBox == ''){
        return (
            <View style={{alignSelf: 'center', marginTop: 150}}>
                <Text style={{...FONTS.largeTitle, color: '#4A4A4A'}} >Find your favorite books here 🔎</Text>
            </View>
        )
    } else {
        return (
            <View style={{alignSelf: 'center', marginTop: 150}} >
                <Text style={{...FONTS.largeTitle, color: '#4A4A4A'}}> Loading...🕵️‍♂️</Text>
            </View>
        )
    }
}


let cancelToken;

const SearchScreen = ({ onPress, navigation }) => {

    const [textSearch, setTextSearch] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [books, setBooks] = useState([]);
    


    const handleSearchChange = debounce(async (query) => {
        setIsLoading(true);
        setTextSearch(query);
        if(query == ''){
            return;
        }
        const searchTerm = query


        //Check if there are any previous pending requests
        if (cancelToken != undefined) {
            console.log('api call canceled')
            cancelToken.cancel("Operation canceled due to new request.")
        }

        //Save the cancel token for the current request
        cancelToken = axios.CancelToken.source()


        try {
            const results =  await axios.get(
                `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&printType=books&key=AIzaSyCiQS2OJqWvr2_ysbwwnh_l0r_hj5Lp0ic`,
                { cancelToken: cancelToken.token } //Pass the cancel token to the current request
            )
            .then( response => {
                //console.log(response);
                setBooks(response.data.items)
            })
            //console.log("Results for " + searchTerm + ": ", results.data)
        } catch (error) {
            console.log(error)
        }
        setIsLoading(false);
    }, 400)





    return (  
        <>
            <View style={{backgroundColor: 'rgba(240,240,240, 0.87)', height: 110}}>
                <View
                    style={{
                        top: 60, 
                        marginLeft: 14.7,
                        width:358,
                        flexDirection: 'row',
                    }}
                >
                    <TextInput
                        style={styles.searchBox}
                        placeholder='Search books, authors, etc...'
                        onChangeText={(newText) => handleSearchChange(newText)}

                    />
                    <View style={{justifyContent: 'center', alignItems: 'center', marginLeft: 7}}>
                        <TouchableOpacity onPress={onPress} activeOpacity={1}><Text>Cancel</Text></TouchableOpacity>
                    </View>
                </View>
            </View>

            {isLoading ? (<Banner searchBox={textSearch}/>) : (
                <FlatList
                style={{marginTop: 7}}
                contentContainerStyle={{alignSelf:'center'}}
                data={books}
                renderItem={({item, index, separators}) => <SearchCard item={item} navigation={navigation}/>}
                ListEmptyComponent={<Text>Loading...</Text>}
                keyExtractor={( item ) => item.id}
                ListHeaderComponent={<SectionHeaders header={"All books"}/>}
                />
            )}
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
        width: 300,
        borderRadius: 7,
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 10


     }
 })

export default SearchScreen;
