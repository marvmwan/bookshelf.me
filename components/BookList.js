import React from 'react';
import {Text, View, FlatList, StyleSheet } from 'react-native';
import { BookCard } from '.';
import { COLORS, FONTS } from '../constants';


const SectionHeaders = ({header}) => {
    if(header === "in progress") {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                <Text 
                style={{
                    marginRight: 5,
                    ...FONTS.h1,
                    color: COLORS.blue,
                    marginBottom: 10
                }}
                >
                    {header} <Text style={{fontSize: 18}}>⏳</Text>
                </Text>
            </View>
            
        )
    } else if(header === "finished") {
        return (
            <Text 
                style={{
                    ...FONTS.h1,
                    color: COLORS.blue,
                    marginBottom: 10
                }}
            >
                {header}  🎉
            </Text>
        )
    } else if(header === "to read") {
        return (
            <Text 
                style={{
                    ...FONTS.h1,
                    color: COLORS.blue,
                    marginBottom: 10
                }}
            >
                {header}  👀
            </Text>
        )
    } else {
        return (
            <Text
                style={{
                    //marginLeft: 12.5,
                    ...FONTS.h1,
                    color: COLORS.blue
                }}
            >
                {header}
            </Text>
        )
    }
}

const SectionEmpty = ({header}) => {
    if(header === "in progress") {
        return (
            <View style={{alignItems: 'center', margin: 30}}>
                <Text 
                style={{
                
                    ...FONTS.body1,
                    color: '#97A8E4',
                }}
                >
                    Start reading books now!
                </Text>
            </View>
            
        )
    } else if(header === "finished") {
        return (
            <View style={{alignItems: 'center', margin: 30}}>
                <Text 
                style={{
                
                    ...FONTS.body1,
                    color: '#97A8E4',
                }}
                >
                    You haven't finished anything yet!
                </Text>
            </View>
        )
    } else if(header === "to read") {
        return (
            <View style={{alignItems: 'center', margin: 30}}>
                <Text 
                style={{
                
                    ...FONTS.body1,
                    color: '#97A8E4',
                }}
                >
                    Add books to read later!
                </Text>
            </View>
        )
    } else {
        return 
    }
    
}
const BookList = ({ bookshelf, navigation }) => {

    const inProgressBooks = bookshelf.filter((book) => book.inProgress);
    const toReadBooks = bookshelf.filter((book) => (book.inProgress == false && book.finished == false));
    const finishedBooks = bookshelf.filter((book) => book.finished);

    return (
    <View style={{alignSelf: 'center'}}>
        <View style={styles.listContainer}>
            <SectionHeaders header={"in progress"}/>
            <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                {inProgressBooks.length ? (
                    inProgressBooks.map((item, i) => {
                        item = item.book;
                        return (
                            <BookCard
                                image={item.volumeInfo.imageLinks} 
                                onPress={() => navigation.navigate('BookDetails', {item})} 
                                key={item.id}
                            />
                        )
                    })
                ) : <View></View>}
            </View>
            {inProgressBooks.length ? <View></View> : <SectionEmpty header={"in progress"}/>}
        </View>
        <View style={styles.listContainer}>
            <SectionHeaders header={"to read"}/>
            <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                {toReadBooks.length ? (
                toReadBooks.map((item, i) => {
                    item = item.book;
                    return (
                        <BookCard 
                            image={item.volumeInfo.imageLinks} 
                            onPress={() => navigation.navigate('BookDetails', {item})} 
                            key={item.id}
                        />
                    )
                })
            ) : <View/>}
            </View>

            {toReadBooks.length ? <View></View> : <SectionEmpty header={"to read"}/>}
            
        </View>
        <View style={styles.listContainer}>
            <SectionHeaders header={"finished"}/>
            <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                {finishedBooks.length ? (
                    finishedBooks.map((item, i) => {
                        item = item.book;
                        return (
                            <BookCard 
                                image={item.volumeInfo.imageLinks} 
                                onPress={() => navigation.navigate('BookDetails', {item})} 
                                key={item.id}
                            />
                        )
                    })
                ) : <View/>}
            </View>

            {finishedBooks.length ? <View></View> : <SectionEmpty header={"finished"}/>}
        </View>
    </View>
    )
}


const styles = StyleSheet.create({
    listContainer: {
        width: 358,
        alignSelf: 'center',
        marginBottom: 20
    }
})

export default BookList;