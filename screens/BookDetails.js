import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    FlatList
} from 'react-native';

import BackButton from '../components/BackButton';
import Button from '../components/Button';
import ButtonWithImage from '../components/ButtonWithImage';
import CategoryTag from '../components/CategoryTag';

import { COLORS, FONTS, icons } from '../constants';
import { useSelector, useDispatch } from 'react-redux';
import { addBook, deleteBook } from '../store/actions/book';

const BookDetails = ({navigation, route }) => {
    const bookshelf = useSelector((state) => state.bookReducer.bookshelf);
    const book = route.params.item.volumeInfo;

    console.log(route.params.item);
    const dispatch = useDispatch();

    const addNewBook = (book) => dispatch(addBook(book));
    const deleteOldBook = (id) => dispatch(deleteBook(id));

    const backupImage = 'https://www.pngmagic.com/product_images/solid-dark-grey-background.jpg';
    const notAvailableImage = 'https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png';
    const gradient = 'https://gradients.mijo-design.com/public/uploads/files/z12.png';

    const title = book.title == undefined ? "Title not available" : book.title;
    const author = book.authors == undefined ? "Author not available" : book.authors[0];
    const description = book.description == undefined ? "Description not available" : book.description;
    const categories = book.categories == undefined ? "Categories not available" : book.categories;
    const averageRating = book.averageRating == undefined ? "" : book.averageRating;
    const smallThumbnail = book.imageLinks == undefined ? gradient : book.imageLinks.smallThumbnail;
    const regThumbnail = book.imageLinks == undefined ? gradient : book.imageLinks.thumbnail;
    const ratingsCount = book.ratingsCount == undefined ? "0" : book.ratingsCount;
    const pageCount = book.pageCount == undefined ? "Unknown" : book.pageCount;
    const ISBN = book.industryIdentifiers == undefined ? "Unknown" : book.industryIdentifiers[0].identifier;
    let language = book.language == undefined ? "Unknown" : book.language;

    language = language == 'en' ? 'English' : language;


    const StarNum = ({averageRating}) => {

        const oneStar = "⭐️";
        const twoStar = "⭐️⭐️";
        const threeStar = "⭐️⭐️⭐️";
        const fourStar = "⭐️⭐️⭐️⭐️";
        const fiveStar = "⭐️⭐️⭐️⭐️⭐️";

        const rating = Math.floor(averageRating);

        if (rating == 1) {
            return (
                <Text>{oneStar}</Text>
            )
        } else if (rating == 2) {
            return (
                <Text>{twoStar}</Text>
            )
        } else if (rating == 3) {
            return (
                <Text>{threeStar}</Text>
            )
        } else if (rating == 4) {
            return (
                <Text>{fourStar}</Text>
            )
        } else if (rating == 5) {
            return (
                <Text>{fiveStar}</Text>
            )
        } else {
            return (
                <Text style={{...FONTS.body5, color: COLORS.gray}}>Rating Unavailable</Text>
            )
        }
         
    }

    return (
        <>
        <View style={{flex: 1, backgroundColor: COLORS.white}}>
            <ScrollView contentContainerStyle={{alignSelf: 'center', width: 323}}>
                <View style={{flex:.1, marginBottom: 40}}>
                    <BackButton navigation={navigation} style={{marginLeft: -10, marginTop: 60}}/>
                </View>
                <View style={{flexDirection: 'row', flex: .3, alignItems: 'center'}}>
                    <View style={styles.thumbnailContainer}>
                        <Image 
                            source={{
                                uri: smallThumbnail,
                                uri: regThumbnail
                            }}
                            style={styles.thumbnail}
                            resizeMode='stretch'
                        />
                    </View>
                    <View style={{marginLeft: 30, marginBottom: 50, width:180}}>
                        <Text style={styles.title} adjustsFontSizeToFit minimumFontScale={.7} numberOfLines={2}>{title}</Text>
                        <Text style={styles.author} adjustsFontSizeToFit minimumFontScale={.7} numberOfLines={2}>{author}</Text>
                        <View style={{paddingTop: 7, flexDirection: 'row'}}>
                            <Text>{<StarNum averageRating={averageRating} />}</Text>
                            {ratingsCount == '0' && averageRating == "" ? <Text/> : <Text style={{marginLeft:4, ...FONTS.body5, color:COLORS.lightGray, lineHeight: 0, marginTop:1}}>({ratingsCount})</Text> }
                        </View>
                    </View>
                </View>
                

                <View style={styles.buttonContainer}>
                    <Button text={'Add book +'}/>
                    <ButtonWithImage text={'Buy now'} icon={icons.externalLink} onPress={() => console.log('buy now')} />
                </View>

                <View style={{marginBottom: 40}}>
                    <Text style={styles.sectionTitle}>
                        Summary
                    </Text>
                    <Text style={styles.summaryText}>
                        {description}
                    </Text>
                </View>
                <View style={{marginBottom: 40}}>
                    <Text style={styles.sectionTitle}>
                        Categories
                    </Text>
                    
                    {categories !== "Categories not available" ? categories.map((category, i) => {
                        return (
                            <CategoryTag 
                                key = {i} 
                                category={categories[i]}
                            />)
                    }) : <Text style={{...FONTS.body5, color:COLORS.lightGray, lineHeight: 0}}>Categories not available</Text>}
                </View>

                <View style={{marginBottom: 40}}>
                    <Text style={styles.sectionTitle}>
                        Details
                    </Text>
                    <View style={styles.detailsContainer}>
                        <Text style={styles.detailTitle}>
                            Page count
                        </Text>
                        <Text style={styles.detailText}>{pageCount}</Text>
                    </View>
                    <View style={styles.detailsContainer}>
                        <Text style={styles.detailTitle}>
                            ISBN
                        </Text>
                        <Text style={styles.detailText}>{ISBN}</Text>
                    </View>
                    <View style={styles.detailsContainer}>
                        <Text style={styles.detailTitle}>
                            Language
                        </Text>
                        <Text style={styles.detailText}>{language}</Text>
                    </View>
                    
                </View>
            </ScrollView>
        </View>
        </>
            
        
    )
}

const styles = StyleSheet.create({
    detailsContainer: {
        flexDirection: 'row',
        marginLeft: 0
    },
    detailTitle: {
        ...FONTS.body2,
        color: COLORS.lightGray,
        lineHeight: 0,
        width: 150,

    },
    detailText: {
        ...FONTS.body2
    },
    summaryText: {
        ...FONTS.body2,
        color: COLORS.lightGray,

    },
    sectionTitle: {
        ...FONTS.h3,
        marginBottom: 15,
        color: '#4A4A4A'
    },
    card: {
        width: 358,
        height: 126,
        borderRadius: 18,
        backgroundColor: COLORS.white,
        flexDirection: 'row'
    },
    thumbnail: {
        width: 112,
        height: 171,
        borderRadius: 10,
        alignSelf: 'center',
        
    },
    thumbnailContainer: {
        shadowColor: '#959DA5',
        shadowOffset: {width: 0, height: 7},
        shadowRadius: 20,
        shadowOpacity: .5,
    },
    title: {
        ...FONTS.h1,
        color: '#4A4A4A',
        lineHeight: 25,
        marginBottom: 3,
    },
    author: {
        ...FONTS.h6,
        color: COLORS.lightGray,
    },
    rating: {
        ...FONTS.body5,
        color: COLORS.lightGray,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 30
    }
})



export default BookDetails;
