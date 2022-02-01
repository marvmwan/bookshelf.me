import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import { FONTS, icons } from '../constants';


const BackButton = ({navigation, style}) => {
    return (
        <TouchableOpacity style={{...style, flexDirection: 'row', alignItems: 'center'}} activeOpacity={1} onPress={() => navigation.goBack()}>
                <Image source={icons.greyNext}  style={{width: 15, height: 24, justifyContent: 'center', transform: [{rotate: '180deg'}]}}/>
                <Text 
                    style={{
                        ...FONTS.h5,
                        color: '#4A4A4A',
                        paddingLeft: 10,
                        paddingTop: 4
                    }}
                >
                    Back
                </Text> 
        </TouchableOpacity>
    )
}

export default BackButton;