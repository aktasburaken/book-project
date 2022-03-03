import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

import UserPhoto from '../assets/girlPhoto.jpg'

export default function Profile() {
    return (
        <View style={styles.container}>
            <View style={styles.userProfile}>

                <Image source={UserPhoto} style={styles.circle} />
                <Text style={styles.usernameText}>Adele Likes</Text>

            </View>

            <View style={styles.stats}>
                <Text style={styles.context}>Adele you are here, since 21 March 2020.</Text>
            </View>
            <View style={styles.stats}>
                <Text style={styles.context}>Your favorite book is "Martin Eden"</Text>
            </View>
            <View style={styles.stats}>
                <Text style={styles.context}>You have read 29 books. Congratulations! </Text>

            </View>

            <View style={styles.stats}>
                <Text style={styles.context}>You have 19 reviews about books which you have read.</Text>

            </View>
            <View style={styles.bottom}>
                <Text style={styles.context}>How much book have you read?   </Text>
                <Icon name="arrow-right" size={15} color="#000" />
                <Text style={styles.context}> 109 </Text>

            </View>

            <Text style={styles.lovelyText}> We Love You! </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 7,
        paddingTop: '13%',
        backgroundColor: '#9e9eff',
        alignItems: 'center',
    },
    userProfile: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '15%',
        marginBottom: '10%',
        alignItems: 'center'
    },
    circle: {
        borderColor: '#B8255F',
        borderWidth: 2,
        height: 100,
        width: 100,
        borderRadius: 100,
        resizeMode: 'cover'
    },
    usernameText: {
        fontWeight: 'bold',
        fontSize: 30,
        marginLeft: '7%',
    },
    stats: {
        width: '90%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: '3%',
        borderRadius: 50,
    },
    context: {
        textAlign: 'center',
        fontWeight: 'bold',
    },
    bottom: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: '8%',
        flexDirection: 'row',
        backgroundColor: '#fff',
        flex: 1,
        width: '90%',
        borderRadius: 50,
    },
    lovelyText: {
        marginBottom: '10%',
        fontSize: 25,
        fontWeight: 'bold',
        color: '#B8255F'
    }
})