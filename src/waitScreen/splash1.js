import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { View, Image,StyleSheet } from 'react-native';
import { useEffect } from 'react';
const Splash1 = () => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Login')
        }, 1500);
    }, [navigation])

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://wallpaperaccess.com/full/3610632.jpg' }}
                style={styles.image}
                resizeMode="cover"
            />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
      }
});


export default Splash1