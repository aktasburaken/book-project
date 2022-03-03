import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import { React, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';


import UserPhoto from '../../assets/girlPhoto.jpg'

export default function Header({ searchBook }) {

    const [searchInput, setSearchInput] = useState(false);

    if (searchInput) {
        return (
            <View style={styles.header}>
                <View>
                    <Image source={UserPhoto} style={styles.circle} />
                </View>

                <View>
                    {searchBook()}
                </View>

                <TouchableOpacity onPress={() => { setSearchInput(!searchInput) }}>
                    <View>
                        <Icon name="search" size={20} color="#000" />
                    </View>
                </TouchableOpacity>
            </View>
        )
    } else {
        return (
            <View style={styles.header}>
                <View>
                    <Image source={UserPhoto} style={styles.circle} />
                </View>

                <View id="theTitle">
                    <Text style={styles.title}> Awesome Books </Text>
                </View>

                <TouchableOpacity onPress={() => { setSearchInput(!searchInput) }}>
                    <View>
                        <Icon name="search" size={20} color="#000" />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }


}

const styles = StyleSheet.create({
    header: {
        flex: 0.8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 100,
        paddingLeft: 10,
        paddingRight: 20,
        backgroundColor: '#fff',
        width: '90%',
    },
    circle: {
        borderColor: '#B8255F',
        borderWidth: 2,
        height: 40,
        width: 40,
        borderRadius: 100,
        resizeMode: 'cover'
    },
    title: {
        fontWeight: 'bold',
    },
});
