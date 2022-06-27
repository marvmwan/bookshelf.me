import React from 'react';
import {Text, View, FlatList } from 'react-native';
import { BookCard } from '.';
import { COLORS, FONTS } from '../constants';
import SearchCard from './SearchCard';


const SectionHeaders = ({header}) => {
        return (
            <Text 
                style={{
                    marginLeft: 12.5,
                    ...FONTS.h2,
                    color: COLORS.blue,
                    paddingBottom: 5
                }}
            >
                {header}
            </Text>
        )
}

const SearchList = ( {books} ) => {

        return (
            <View style={{}}>  
                <FlatList
                style={{marginTop: 100}}
                data={books}
                renderItem={({item, index, separators}) => {<SearchCard item={item}/>}}
                numColumns={1}
                keyExtractor={( item ) => item.id}
                ListHeaderComponent={<SectionHeaders header={"All books"}/>}
                />
        </View>
        )
        
}

export default SearchList;