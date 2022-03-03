import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';


const SingleBookWithReview = ({ bookName, getTextInputValue, click }) => {



    if (bookName != undefined) {
        return (
            <View style={styles.container}>
                <View style={styles.bookArea}>
                    <View style={styles.flexDirection}>
                        <Text style={styles.title}>{bookName}</Text>
                    </View>
                    <Text style={{ marginBottom: "3%" }}>When it was first published in Istanbul in 1943, it made no impression whatsoever.</Text>
                    <View style={styles.flexDirection}>
                        <TextInput placeholder="Your reviews are very important to us." style={styles.review} onChangeText={getTextInputValue} />
                        <TouchableOpacity style={{
                            flex: 1, marginLeft: '3%', paddingLeft: 20, backgroundColor: '#000', padding: '5%', borderRadius: 50, width: 30, height: 30, display: 'flex',
                            alignItems: 'center', justifyContent: 'center'
                        }} onPress={click}>
                            <Icon name="arrow-right" color="#fff" size={15} style={{ zIndex: 3, width: 15, height: 15 }} />
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
        backgroundColor: '#9e9eff',
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