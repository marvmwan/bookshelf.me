import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    StatusBar,
    FlatList,
    ScrollView,
    SafeAreaView,
} from 'react-native';

import { useSelector } from 'react-redux';



import { SearchBar } from "../components"
import AddButton from '../components/AddButton';
import BookList from '../components/BookList';
import SearchScreen from '../components/SearchScreen';
import { COLORS, FONTS, bookData, icons } from '../constants';

const Header = ({ onPress, navigation }) => {
    return (
        <View style={{marginBottom: 20, alignSelf: 'center', marginTop: 80}}>
            <Text
                style={{
                    color: COLORS.blue,
                    ...FONTS.largeTitle
                }}
            >
                books
            </Text>
            <View
                style={{marginTop: 16}}
            >
                <SearchBar onPress={onPress} navigation={navigation} />
            </View>
            
        </View>
        
    )
}



const EmptyBookshelf = () => {
    return (
        <>
            <Text
                style={{
                    ...FONTS.largeTitle,
                    color: '#4A4A4A',
                    textAlign: 'center',
                    marginTop: 200,
                    flex: 1
                }}
            >
                👋, add to your bookshelf!
            </Text>
        </>
        
    )
}

 
const Home = ({ navigation }) => {

    const [searchOn, setSearchOn] = useState(false);
    //const [fontsLoaded, setFontsLoaded] = useState(false);

    const bookshelf = useSelector((state) => state.bookReducer.bookshelf);


    


    if(!searchOn) {
        return (
            
            <View
                style={{
                    flex: 1,
                    backgroundColor: "#FFFFFF"
                }}
            >
                <ScrollView >
                    <StatusBar
                        animated={true}
                        backgroundColor="#61dafb"
                        barStyle={'dark-content'}
                        showHideTransition={'fade'}
                        //hidden={hidden} 
                    />
                    <Header navigation={navigation} onPress={() => setSearchOn(true)}/>
                    {bookshelf.length ? <BookList bookshelf={bookshelf} navigation={navigation}/> : <EmptyBookshelf/>}
                
                </ScrollView>
                <AddButton onPress={() => {setSearchOn(true)}} />
            </View>  
        )
    } else {
        return (
            <View 
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "white"
                }}
            >
                <SearchScreen onPress={() => setSearchOn(false)} navigation={navigation} />
            </View>
        )
    }

    
}


const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 164,
      left: 10,
      width: 323,
      paddingTop: StatusBar.currentHeight,
      marginHorizontal: 16
    },
    item: {
      backgroundColor: "#f9c2ff",
      padding: 20,
      marginVertical: 8
    },
    header: {
      fontSize: 32,
      backgroundColor: "#fff"
    },
    title: {
      fontSize: 24
    }
  });


export default Home;