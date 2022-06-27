import React from 'react'
import { TouchableOpacity, Image } from "react-native"


const BookCard = ({ onPress, image }) => {
    const gradient = 'https://gradients.mijo-design.com/public/uploads/files/z12.png';
    let regThumbnail = image ? image.thumbnail : gradient;

    if(regThumbnail !== gradient){
        regThumbnail = regThumbnail.replace('zoom=1', 'zoom=2');
    }


    return (
        <TouchableOpacity
            style={{
                borderRadius: 10,
                width: 128 * .85,
                height: 192 * .85,
                // width: 148*(1.15),
                // height: 215*(1.15),
                marginBottom: 17.6,
                shadowColor: '#000000',
                shadowOffset: {width: 0, height: 4},
                shadowRadius: 20,
                shadowOpacity: .20,
            }}
            activeOpacity={1}
            onPress={onPress}
        >
            <Image 
                style={{
                    borderRadius: 10,
                    // width: 148*(1.15),
                    // height: 215*(1.15),
                    width: 128 * .85,
                    height: 192 * .85,
                }}
                source={{
                    uri: regThumbnail
                }}
                resizeMode='stretch'
            />
        </TouchableOpacity>
    )
}


export default BookCard;
