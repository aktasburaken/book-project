import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';


const SingleBookWithReview = ({ bookName, showState }) => {



    if (bookName != undefined) {
        return (
            <View style={styles.container}>
                <View style={styles.bookArea}>
                    <View style={styles.flexDirection}>

                        <Text style={styles.title}>{bookName}</Text>

                        <TouchableOpacity style={{ marginBottom: "22%", alignItems: 'center', justifyContent: "center", padding: "5%", backgroundColor: '#fff' }}>
                            <Icon name="close" color="red" />
                        </TouchableOpacity>


                    </View>

                    <Text style={{ marginBottom: "3%" }}>When it was first published in Istanbul in 1943, it made no impression whatsoever.</Text>
                    <View style={styles.flexDirection}>
                        <TextInput placeholder="Review" style={styles.review} />

                        <TouchableOpacity style={{ marginLeft: '10%', paddingLeft: '10%', backgroundColor: '#000', padding: '5%', borderRadius: 50, }}>

                            <Icon name="arrow-right" color="#fff" size={20} />

                        </TouchableOpacity>
                    </View>

                </View>

            </View >
        )
    }

}



export default SingleBookWithReview

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fffdd0',
    },
    bookArea: {
        flex: 1,
        backgroundColor: '#fff',
        width: '90%',
        borderRadius: 30,
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingTop: '5%',
        marginBottom: '7%',
        overflow: "hidden",
    },
    flexDirection: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        paddingBottom: '3%'
    },
    review: {
        marginTop: '3%',
        borderWidth: 1,
        paddingLeft: '5%',
        paddingRight: '5%',
        marginBottom: '3%',
        borderRadius: 30,
        width: '87%'
    },
})