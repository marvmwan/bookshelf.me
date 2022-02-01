import React from 'react';
import {Text, View, FlatList } from 'react-native';
import { BookCard } from '.';
import { COLORS, FONTS } from '../constants';


const SectionHeaders = ({header}) => {
    if(header === "in progress") {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                <Text 
                style={{
                    marginLeft: 12.5,
                    marginRight: 5,
                    ...FONTS.h1,
                    color: COLORS.blue,
                    paddingBottom: 5
                }}
                >
                    {header} <Text style={{fontSize: 18}}>⏳</Text>
                </Text>
                {/* <View style={{backgroundColor: "#2AF218", width: 8, height: 8, borderRadius: 100, marginTop: 3}}></View> */}
            </View>
            
        )
    } else if(header === "finished") {
        return (
            <Text 
                style={{
                    marginLeft: 12.5,
                    ...FONTS.h1,
                    color: COLORS.blue,
                    paddingBottom: 5
                }}
            >
                {header}  🎉
            </Text>
        )
    } else if(header === "to read") {
        return (
            <Text 
                style={{
                    marginLeft: 12.5,
                    ...FONTS.h1,
                    color: COLORS.blue,
                    paddingBottom: 5
                }}
            >
                {header}  👀
            </Text>
        )
    } else {
        return (
            <Text 
                style={{
                    marginLeft: 12.5,
                    ...FONTS.h1,
                    color: COLORS.blue
                }}
            >
                {header}
            </Text>
        )
    }
}
const BookList = ({ header, books }) => {
    return (
        <View>             
            <FlatList
                data={books}
                renderItem={({ item }) => <BookCard image={item.cover} onPress={() => {console.log("Navigate to Book Detail View")}}  /> }
                numColumns={2}
                keyExtractor={( item ) => item.id}
                ListHeaderComponent={<SectionHeaders header={header}/>}
                style={{
                    alignSelf: 'center'
                }}
            />
        </View>
    )
}

export default BookList;