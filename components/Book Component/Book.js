import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { React, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

import bookDATA from '../../bookData.json'

export default function Book({ source, title, favorite }) {

    return (

        <View style={styles.bookPreview}>
            <Image source={source} style={styles.images}></Image>

            <Text style={styles.title}> {title} </Text>

            <View style={styles.bookmarkFavorite}>

                <Text style={styles.textDecore}> ~ </Text>

                <TouchableOpacity onPress={favorite}>
                    <Icon name="heart" size={20} color="#b8255f" />
                </TouchableOpacity>

                <Text style={styles.textDecore}> ~ </Text>

            </View>

        </View>






    )
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
    },
    textDecore: {
        fontWeight: 'bold',

    },
    images: {
        marginBottom: '9%',
        resizeMode: 'cover',
        height: '65%',
        width: '65%',
    },
    bookPreview: {
        zIndex: 2,
        flex: 4,
        backgroundColor: '#fff',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginRight: '1%',
        marginLeft: '1%',
    },

    bookmarkFavorite: {
        flexDirection: 'row',
        marginTop: '5%',
    },
});

