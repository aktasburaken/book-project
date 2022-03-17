import { React, useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Button, TouchableHighlight, TextInput, Alert, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native';

import bookDATA from '../../bookData.json'

import Header from './Header'
import Book from '../Book Component/Book';

import madonna from '../../assets/madonnainafurcoat.jpg'
import theFemaleBrain from '../../assets/theFemaleBrain.jpg'

import mansMeaning from '../../assets/man_search_for_meaning.jpg'
import animalFarm from '../../assets/animal_farm.jpg'


const HomePage = ({ navigation }) => {

    const [booksData, setBooksData] = useState({
        MadonnaShowState: false,
        TheFemaleBrainShowState: false,
        AnimalFarmShowState: false,
        MansMeaningShowState: false,
    })

    return (

        <View style={styles.container}>

            <StatusBar backgroundColor={'darkblue'} />

            <Header searchBook={() => {
                return (
                    <TextInput numberOfLines={1} style={styles.input} placeholder="What would you love to read?" />
                )
            }}></Header>

            <View style={styles.main}>
                <View style={styles.rows}>

                    {/* MADONNA */}
                    <Book source={madonna} favorite={() => {

                        let nextBooksData = { ...booksData, MadonnaShowState: !booksData.MadonnaShowState };
                        setBooksData(nextBooksData);
                        navigation.navigate('Books', {
                            isShowInfo: nextBooksData
                        })

                    }
                    } title={bookDATA.madonna.name}
                    />

                    {/* THE FEMALE BRAIN */}
                    <Book source={theFemaleBrain} favorite={() => {

                        let nextBooksData = { ...booksData, TheFemaleBrainShowState: !booksData.TheFemaleBrainShowState };
                        setBooksData(nextBooksData);
                        navigation.navigate('Books', {
                            isShowInfo: nextBooksData
                        })
                    }
                    } title={bookDATA.femaleBrain.name} />

                </View>

                {/* SECOND ROW */}

                <View style={styles.rows}>

                    {/* MANS SEARCH FOR MEANING */}

                    <Book source={mansMeaning} favorite={() => {
                        let nextBooksData = { ...booksData, MansMeaningShowState: !booksData.MansMeaningShowState };
                        setBooksData(nextBooksData);
                        navigation.navigate('Books', {
                            isShowInfo: nextBooksData
                        })
                    }} title={bookDATA.meaning.name} />

                    {/* ANIMAL FARM */}

                    <Book source={animalFarm} favorite={() => {

                        let nextBooksData = { ...booksData, AnimalFarmShowState: !booksData.AnimalFarmShowState };
                        setBooksData(nextBooksData);
                        navigation.navigate('Books', {
                            isShowInfo: nextBooksData
                        })

                    }} title={bookDATA.animal_farm.name} />
                </View>
            </View>

        </View>
    )
}

export default HomePage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: '5%',
        backgroundColor: 'darkblue',
    },

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
    buttonCircle: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, .2)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    main: {
        flex: 8,
        justifyContent: 'space-around',
        flexDirection: 'column',
        marginBottom: '5%',

    },
    rows: {
        flex: 1,
        flexDirection: 'row',
        width: '90%',
        marginTop: '5%',
    },
    images: {
        flex: 1,
        marginTop: '13%',
        marginBottom: '13%',
        resizeMode: 'contain'
    },
    imageText: {
        paddingLeft: '5%',
        paddingRight: '5%',
        fontSize: 12,
        marginBottom: '3%',
        textAlign: 'center',
    },
    bookmarkFavorite: {
        flex: 0.2,
        flexDirection: 'row',
        marginTop: '5%',
    },


});

