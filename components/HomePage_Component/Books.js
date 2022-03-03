import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import { React, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

import Review from './Review'

import SingleBookWithReview from './SingleBookWithReview'

export default function Books({ route, navigation }) {

    const [bookReviews, setBookReviews] = useState(
        {
            MadonnaReview: "",
            TheFemaleBrainReview: "",
            MansSearchforMeaningReview: "",
            AnimalFarmReview: "",
        }
    )

    const getMadonnaTextInputValue = () => {
        if (bookReviews.MadonnaReview === "") alert('It is empty for now.')
        else {
            navigation.navigate('Reviews', {
                reviewInfo: bookReviews
            })
        }

    }

    const getTheFemaleBrainTextInputValue = () => {
        if (bookReviews.TheFemaleBrainReview === "") alert('It is empty for now.')
        else {
            navigation.navigate('Reviews', {
                reviewInfo: bookReviews
            })
        }
    }

    const getMansSearchforMeaningTextInputValue = () => {
        if (bookReviews.MansSearchforMeaningReview === "") alert('It is empty for now.')
        else {
            navigation.navigate('Reviews', {
                reviewInfo: bookReviews
            })
        }
    }

    const getAnimalFarmTextInputValue = () => {
        if (bookReviews.MansSearchforMeaningReview === "") alert('It is empty for now.')
        else {
            navigation.navigate('Reviews', {
                reviewInfo: bookReviews
            })
        }
    }


    if (route.params != undefined) {

        return (
            <ScrollView style={styles.container}>

                <View>

                    {route.params.isShowInfo.MadonnaShowState === true ?
                        <SingleBookWithReview bookName="Madonna in a Fur Coat" getTextInputValue={review => setBookReviews({ ...bookReviews, MadonnaReview: review })}
                            click={getMadonnaTextInputValue} />
                        : null
                    }

                    {route.params.isShowInfo.TheFemaleBrainShowState === true ?
                        <SingleBookWithReview bookName="The Female Brain" getTextInputValue={review => setBookReviews({ ...bookReviews, TheFemaleBrainReview: review })}
                            click={getTheFemaleBrainTextInputValue} />
                        : null
                    }

                    {route.params.isShowInfo.AnimalFarmShowState === true ?
                        <SingleBookWithReview bookName="Animal Farm" getTextInputValue={review => setBookReviews({ ...bookReviews, AnimalFarmReview: review })}
                            click={getAnimalFarmTextInputValue} />
                        : null
                    }

                    {route.params.isShowInfo.MansMeaningShowState === true ?
                        <SingleBookWithReview bookName="Man's Search" getTextInputValue={review => setBookReviews({ ...bookReviews, MansSearchforMeaningReview: review })}
                            click={getMansSearchforMeaningTextInputValue} />
                        : null
                    }

                </View>
            </ScrollView>
        )
    } else {
        return (
            <View style={styles.containerView}>
                <Text style={styles.context}> There is no book here yet. </Text>
                <Text style={styles.context}>If you want to add a book, you can click the {<Icon name="heart" size={20} color="#b8255f" />
                } button which below the books in {<Icon name="home" size={25} color="#000" />
                    } page!
                    If you are looking for make a review, you can not do that before add a book.</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: '5%',
        backgroundColor: '#9e9eff',
    },
    containerView: {
        flex: 1,
        paddingTop: '5%',
        paddingLeft: '5%',
        paddingRight: '5%',
        backgroundColor: '#9e9eff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontWeight: 'bold',
    },
    context: {
        textAlign: 'center',
        fontWeight: 'bold',
    },
    images: {
        marginBottom: '9%',
        resizeMode: 'cover',
        height: '65%',
        width: '65%',
    }
})