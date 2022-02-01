import React from 'react';
import {
    View,
    Text
} from 'react-native';


const madebyFooter = () => {
    return (
        <View
            style={{
                alignItems: 'center',
                marginBottom: 30,
                marginTop: 60
            }}
        >
            <Text 
                style={{ ...FONTS.body2}}
            >
                made with ❤️ by mbogo
            </Text>
        </View>
            
    )
}

const Profile = () => {
    return (
            <View>
                <Text>Profile</Text>
            </View> 
    )
}

export default Profile;