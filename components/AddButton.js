import { size } from 'lodash';
import React from 'react';
import { TouchableOpacity, Image, View } from "react-native";


import { icons, FONTS, COLORS, SIZES } from '../constants'

const AddButton = ({onPress}) => {
    return (
            <TouchableOpacity 
                onPress={onPress} 
                style={{
                    borderRadius: 100, 
                    backgroundColor: COLORS.blue,
                    height: 72, 
                    width: 72,
                    position: 'absolute',
                    top: SIZES.height - 120,
                    left: SIZES.width - 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                    shadowColor: '#959DA5',
                    shadowOffset: {width: 0, height: 7},
                    shadowRadius: 20,
                    shadowOpacity: 1,
                }}
                activeOpacity={.8}
            >
                <Image source={icons.add} style={{ width: 29, height: 29 }} />
            </TouchableOpacity>
        
        
    )
}


export default AddButton;
