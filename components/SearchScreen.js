import axios from 'axios';
import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { View, TouchableOpacity, Text, StatusBar, StyleSheet, TextInput, FlatList } from 'react-native';

import { FONTS, COLORS, icons, SIZES } from '../constants'
import SearchCard from './SearchCard';
import { Colors } from 'react-native/Libraries/NewAppScreen';


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


const LoadingBanner = () => {
    return (
        <View style={{alignSelf: 'center', marginTop: 150, width: '90%'}} >
            <Text style={{...FONTS.largeTitle, color: '#4A4A4A', textAlign: 'center'}}> Loading...🕵️‍♂️</Text>
        </View>
    )
}

const SearchResultsBanner = ({query}) => {
    if(query === ''){
        return (
            <View style={{alignSelf: 'center', marginTop: 150, width: '90%'}}>
                <Text style={{...FONTS.largeTitle, color: '#4A4A4A', textAlign: 'center'}} >Find your favorite books here 🔎</Text>
            </View>
        )
    } else {
        return (
            <View style={{alignSelf: 'center', marginTop: 150, width: '90%'}}>
                <Text style={{...FONTS.largeTitle, color: '#4A4A4A', textAlign: 'center'}} >No results found 🤕</Text>
            </View>
        )
    }
        
}


let tokenSource;

const SearchScreen = ({ onPress, navigation }) => {

    const [textSearch, setTextSearch] = useState('');
    const [searchQuery, setSearchQuery] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [books, setBooks] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');
    const [mounted, setMounted] = useState(false);
    const [noResults, setNoResults] = useState(false);

    useEffect(() => {
        setMounted(true);

        return () => {
          setMounted(false); // This worked for me
        };
    }, []);
    
    
    const onChange = (query) => {
        if(mounted){
            setTextSearch(query);
        }
        
        
        const search = _.debounce(sendQuery, 500);

        setSearchQuery(prevSearch => {
          if (prevSearch.cancel) {
            prevSearch.cancel();
          }
          return search;
        });
    
        search(query);
      };
    
    const sendQuery = async value => {
        if(mounted){
            setIsLoading(true);
        }
        
        const { cancelPrevQuery, result } = await fetchData(value);

        if (cancelPrevQuery) return;

        if (result !== undefined) {
            if(mounted && result.totalItems > 0){
                setBooks(result.items);
                setErrorMsg('');
                setIsLoading(false);
                setNoResults(false); 
            } else {
                setBooks([]);
                setErrorMsg('');
                setNoResults(true);
                setIsLoading(false);
            }
        } else {
            if(mounted){
                setBooks([]);
                setErrorMsg("There was an error 😅. Try again");
                setIsLoading(false);
            }
        }
    };

    const fetchData = async keyword => {
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

            return { result: data };
        } catch (err) {
            if (axios.isCancel(err)) return { cancelPrevQuery: true };
            return [err];
        }
    };



    return (  
        <>
            <StatusBar
                animated={true}
                backgroundColor="#61dafb"
                barStyle={'dark-content'}
                showHideTransition={'fade'}
            />
            <View style={{backgroundColor: 'rgba(240,240,240, 0.87)', height: 110, alignSelf: 'center', width: SIZES.width}}>
                <View
                    style={{
                        top: 60, 
                        width: SIZES.width*.95,
                        flexDirection: 'row',
                        alignSelf: 'center'
                    }}
                >
                    <TextInput
                        style={styles.searchBox}
                        placeholder='Search books, authors, etc...'
                        placeholderTextColor={COLORS.gray}
                        autoFocus
                        onChangeText={(text) => {
                            text = text.split(' ').join('+');
                            onChange(text)
                        }}
                        clearButtonMode='always'
                        onSubmitEditing={() => console.log()}
                    />
                    <View style={{justifyContent: 'center', alignItems: 'center', flex: .15, marginLeft: 5}}>
                        <TouchableOpacity onPress={onPress} activeOpacity={1}><Text>Cancel</Text></TouchableOpacity>
                    </View>
                </View>
            </View>

            {isLoading ? (<LoadingBanner/>) : (noResults || textSearch === '') ? (<SearchResultsBanner query={textSearch}/>) : (
                <FlatList
                style={{marginTop: 7}}
                contentContainerStyle={{alignSelf:'center'}}
                data={books}
                renderItem={({item}) => <SearchCard item={item} arrow={icons.greyNext} navigation={navigation}/>}
                //ListEmptyComponent={<View style={{width: SIZES.width*.9}}><Banner searchBox={textSearch}/></View>}
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
        flex: .85,
        


     }
 })

export default SearchScreen;
