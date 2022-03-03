import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { React, useEffect } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import SingleReview from './SingleReview'

export default function Review({ route }) {


    if (route.params != undefined) {

        return (
            <ScrollView style={styles.container}>

                <View>

                    {route.params.reviewInfo.MadonnaReview ?
                        <SingleReview bookName="Madonna in a Fur Coat" review={route.params.reviewInfo.MadonnaReview}
                            clickPress={() => {
                            }} />
                        : null
                    }

                    {route.params.reviewInfo.TheFemaleBrainReview ?
                        <SingleReview bookName="The Female Brain" review={route.params.reviewInfo.TheFemaleBrainReview} />
                        : null
                    }

                    {route.params.reviewInfo.AnimalFarmReview ?
                        <SingleReview bookName="Animal Farm" review={route.params.reviewInfo.AnimalFarmReview} />
                        : null
                    }

                    {route.params.reviewInfo.MansSearchforMeaningReview ?
                        <SingleReview bookName="Man's Search" review={route.params.reviewInfo.AnimalFarmReview} />
                        : null
                    }

                </View>
            </ScrollView>
        )
    } else {
        return (
            <View style={styles.containerView}>
                <Text style={styles.context}> There is no review here yet. </Text>
                <Text style={styles.context}>If you want to add a review, you can click the {<Icon name="arrow-right" size={20} color="#fff" />
                } button which next to the review area in {<Icon name="book" size={25} color="#000" style={{ textAlign: 'center' }} />
                    } page!</Text>
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