import { StackRouter } from '@react-navigation/native';
import React from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { startDetecting } from 'react-native/Libraries/Utilities/PixelRatio';
import { COLORS, FONTS, icons } from '../constants';


const SearchCard = ( {item, navigation} ) => {

    const book = item.volumeInfo;
    const backupImage = 'https://www.pngmagic.com/product_images/solid-dark-grey-background.jpg';
    const notAvailableImage = 'https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png';
    const gradient = 'https://gradients.mijo-design.com/public/uploads/files/z12.png'

    const title = book.title == undefined ? "Title not available" : book.title;
    const author = book.authors == undefined ? "Author not available" : book.authors[0];
    const averageRating = book.averageRating == undefined ? "" : book.averageRating;
    const smallThumbnail = book.imageLinks == undefined ? gradient : book.imageLinks.smallThumbnail;
    const regThumbnail = book.imageLinks == undefined ? gradient : book.imageLinks.thumbnail;
    const ratingsCount = book.ratingsCount == undefined ? "" : book.ratingsCount;


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
        <TouchableOpacity style={styles.button} activeOpacity={1} onPress={() => navigation.navigate('BookDetails', {item})}>
            <View style={styles.card}>
                <View style={{ justifyContent: 'center', marginLeft: 15, marginRight: 20}}>
                    <Image 
                        source={{
                            uri: smallThumbnail,
                            uri: regThumbnail
                        }}
                        style={styles.thumbnail}
                        resizeMode='stretch'
                    />
                </View>
                
                <View style={{ paddingLeft: 15, marginTop: 15}}>
                    <View style={{width: 180, height: 40 }}>
                        <Text adjustsFontSizeToFit minimumFontScale={.7} numberOfLines={2} style={styles.title}>
                            {title}
                        </Text>
                    </View>
                    <View style={{width: 180}}>
                        <Text adjustsFontSizeToFit minimumFontScale={.7}  numberOfLines={1} style={styles.author}>
                            {author}
                        </Text>
                    </View>
                    <View style={{paddingTop: 7, flexDirection: 'row'}}>
                        <Text >{<StarNum averageRating={averageRating} />}</Text>
                        {ratingsCount == '' ? <Text/> : <Text style={{marginLeft:4, ...FONTS.body5, color:COLORS.lightGray, lineHeight: 0, marginTop:1}}>({ratingsCount})</Text> }
                        
                    </View>
                    
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center', marginLeft: 20}}>
                    <Image source={icons.greyNext} style={{width: 10, height: 16, justifyContent: 'center'}}/>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        width: 358,
        height: 126,
        borderRadius: 18,
        backgroundColor: COLORS.white,
        flexDirection: 'row'
    },
    button: {
        width: 358,
        height: 126,
        borderRadius: 18,
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 4},
        shadowRadius: 20,
        shadowOpacity: .20,
        alignSelf: 'center',
        marginVertical: 10

    },
    thumbnail: {
        width: 85,
        height: 106,
        borderRadius: 10,
        alignSelf: 'center',
        
    },
    title: {
        ...FONTS.h3,
        color: '#4A4A4A',


    },
    author: {
        ...FONTS.body5,
        color: COLORS.lightGray,
    },
    rating: {
        ...FONTS.body5,
        color: COLORS.lightGray,
    }
})


export default SearchCard;