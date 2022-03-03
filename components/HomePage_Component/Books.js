import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import { React } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';


import SingleBookWithReview from './SingleBookWithReview'

export default function Books({ route, navigation }) {

    if (route.params != undefined) {


        return (
            <ScrollView style={styles.container}>

                <View>

                    {route.params.isShowInfo.MadonnaShowState === true ?
                        <SingleBookWithReview bookName="Madonna in a Fur Coat" />
                        : null
                    }


                    {route.params.isShowInfo.TheFemaleBrainShowState === true ?
                        <SingleBookWithReview bookName="The Female Brain" />
                        : null
                    }


                    {route.params.isShowInfo.AnimalFarmShowState === true ?
                        <SingleBookWithReview bookName="Animal Farm" />
                        : null
                    }

                    {route.params.isShowInfo.MansMeaningShowState === true ?
                        <SingleBookWithReview bookName="Man's Search" />
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
                    } page!</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: '13%',
        backgroundColor: '#9e9eff',
    },
    containerView: {
        flex: 1,
        paddingTop: '13%',
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