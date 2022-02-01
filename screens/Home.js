import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    StatusBar,
    FlatList
} from 'react-native';

import { useSelector } from 'react-redux';

import { SearchBar } from "../components"
import AddButton from '../components/AddButton';
import BookList from '../components/BookList';
import SearchScreen from '../components/SearchScreen';
import { COLORS, FONTS, bookData, icons } from '../constants';

const Header = ({ onPress, navigation }) => {
    return (
        <View style={{marginBottom: 80, top: 60, marginLeft: 14.7}}>
            <Text
                style={{
                    color: COLORS.blue,
                    // position: 'absolute',
                    //top: 60,
                    //left: 27,
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


const ItemSeparator = () => {
    return (
        <View
            style={{
                height: 35
            }}
        />
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
            <Image 
                style={{
                    width: 140,
                    height: 140,
                    transform: [{rotate: '290deg'}],
                    position: 'absolute',
                    top: 570,
                    left: 150
                }}
                source={icons.arrow}
            />
        </>
        
    )
}

 
const Home = ({ navigation }) => {

    const [searchOn, setSearchOn] = useState(false);

    const bookshelf = useSelector((state) => state.bookReducer.bookshelf);


    if(!searchOn) {
        return (
            <View
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "#FFFFFF"
                }}
            >
                <FlatList
                    data={bookshelf}
                    renderItem={({ item, index, separators }) => <BookList key={item.id} header={ item.header } books={ item.data } /> }
                    ItemSeparatorComponent={({ highlighted }) => (<ItemSeparator/>) }
                    numColumns={1}
                    keyExtractor={( item ) => item.id}
                    ListHeaderComponent={<Header navigation={navigation} onPress={() => setSearchOn(true)}/>}
                    ListEmptyComponent={<EmptyBookshelf/>}
                />
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