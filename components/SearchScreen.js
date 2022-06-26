import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import _ from 'lodash';
import { View, TouchableOpacity, Text, StatusBar, StyleSheet, TextInput, FlatList } from 'react-native';

import { FONTS, COLORS, icons, SIZES } from '../constants'
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

let tokenSource;

const SearchScreen = ({ onPress, navigation }) => {

    const [textSearch, setTextSearch] = useState('');
    const [searchQuery, setSearchQuery] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [books, setBooks] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');
    
    
    const onChange = (query) => {
        setTextSearch(query);
        
        //setIsLoading(true);
        const search = _.debounce(sendQuery, 500);

        setSearchQuery(prevSearch => {
          if (prevSearch.cancel) {
            prevSearch.cancel();
          }
          return search;
        });
    
        search(query);
        //setIsLoading(false);
      };
    
    const sendQuery = async value => {
        setIsLoading(true);
        const { cancelPrevQuery, result } = await fetchData(value);

        if (cancelPrevQuery) return;

        if (result !== undefined) {
            setBooks(result);
            setErrorMsg('');
            setIsLoading(false);
        } else {
            setBooks([]);
            setErrorMsg("There was an error. Try again");
            console.log(errorMsg);
            setIsLoading(false);
        }
    };

    // const fetchData = (query) => {
    // setIsLoading(true);
    // setTextSearch(query);
    // if(query == ''){
    //     return;
    // }
    // const searchTerm = query;

    // try {
    //     const results =  await axios.get(
    //         `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&printType=books&key=${API_KEY}`
    //     )
    //     .then( response => {
    //         //console.log(response);
    //         setBooks(response.data.items)
    //     })
    //     //console.log("Results for " + searchTerm + ": ", results.data)
    // } catch (error) {
    //     console.log(error);
    //     setErrorMsg("There was an error. Try again");
    // }
    // setIsLoading(false);


    // }

    const fetchData = async keyword => {
        setTextSearch(keyword);
        try {
            if (typeof tokenSource !== typeof undefined) {
            tokenSource.cancel('Operation canceled due to new request.');
            }

            // save the new request for cancellation
            tokenSource = axios.CancelToken.source();
            axios.defaults.baseURL = 'https://bookshelf-api-proxy-server.herokuapp.com'
            const { data } = await axios.get(`/api?q=${keyword}`, {
            cancelToken: tokenSource.token
            });

            return { result: data.items };
        } catch (err) {
            if (axios.isCancel(err)) return { cancelPrevQuery: true };
            return [err];
        }
    };
    // const handleSearchChange = debounce( async (query) => {
    //     setIsLoading(true);
    //     setTextSearch(query);
    //     if(query == ''){
    //         return;
    //     }
    //     const searchTerm = query;


    //     //Check if there are any previous pending requests
    //     if (cancelToken != undefined) {
    //         console.log('api call canceled');
    //         cancelToken.cancel("Operation canceled due to new request.");
    //     }

    //     //Save the cancel token for the current request
    //     cancelToken = axios.CancelToken.source()


    //     try {
    //         const results =  await axios.get(
    //             `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&printType=books&key=AIzaSyCiQS2OJqWvr2_ysbwwnh_l0r_hj5Lp0ic`,
    //             { cancelToken: cancelToken.token } //Pass the cancel token to the current request
    //         )
    //         .then( response => {
    //             //console.log(response);
    //             setBooks(response.data.items)
    //         })
    //         //console.log("Results for " + searchTerm + ": ", results.data)
    //     } catch (error) {
    //         console.log(error)
    //     }
    //     setIsLoading(false);
    // }, 400)



    return (  
        <>
            <StatusBar
                animated={true}
                backgroundColor="#61dafb"
                barStyle={'dark-content'}
                showHideTransition={'fade'}
                //hidden={hidden} 
            />
            <View style={{backgroundColor: 'rgba(240,240,240, 0.87)', height: 110, alignSelf: 'center', width: SIZES.width}}>
                <View
                    style={{
                        top: 60, 
                        // marginLeft: 14.7,
                        width: SIZES.width*.95,
                        flexDirection: 'row',
                        alignSelf: 'center'
                    }}
                >
                    <TextInput
                        style={styles.searchBox}
                        placeholder='Search books, authors, etc...'
                        autoFocus
                        onChangeText={(text) => {
                            text = text.split(' ').join('+');
                            onChange(text)
                        }}
                        clearButtonMode={'always'}
                        onSubmitEditing={() => console.log()}
                    />
                    <View style={{justifyContent: 'center', alignItems: 'center', flex: .15, marginLeft: 5}}>
                        <TouchableOpacity onPress={onPress} activeOpacity={1}><Text>Cancel</Text></TouchableOpacity>
                    </View>
                </View>
            </View>

            {isLoading ? (<Banner searchBox={textSearch}/>) : (
                <FlatList
                style={{marginTop: 7}}
                contentContainerStyle={{alignSelf:'center'}}
                data={books}
                renderItem={({item}) => <SearchCard item={item} arrow={icons.greyNext} navigation={navigation}/>}
                ListEmptyComponent={<View style={{width: SIZES.width*.9}}><Banner searchBox={textSearch}/></View>}
                keyExtractor={( item ) => item.id}
                ListHeaderComponent={<SectionHeaders header={books.length !== 0 ? "All books" : ''}/>}
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
        borderRadius: 7,
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 10,
        flex: .85


     }
 })

export default SearchScreen;
