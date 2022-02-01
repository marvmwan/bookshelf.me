import React from 'react'
import { TouchableOpacity, Image } from "react-native"


const BookCard = ({ onPress, image }) => {


    return (
        <TouchableOpacity
            style={{
                borderRadius: 10,
                width: 148*(1.15),
                height: 215*(1.15),
                margin: 7,
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
                    width: 148*(1.15),
                    height: 215*(1.15),
                }}
                source={image}
                resizeMode='stretch'
            />
        </TouchableOpacity>
    )
}


export default BookCard;
