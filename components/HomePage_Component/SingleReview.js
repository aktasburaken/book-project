import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';


const SingleReview = ({ bookName, review, clickPress }) => {
    if (bookName != undefined) {
        return (
            <View style={styles.container}>
                <View style={styles.bookArea}>
                    <View style={styles.flexDirection}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name="star" size={15} color="#FFAE42" style={{ marginBottom: '3%' }} />
                            <Text style={styles.title}>{bookName}</Text>
                        </View>
                        <TouchableOpacity onPress={clickPress}>
                            <Icon name="times" size={15} color="red" style={{ marginBottom: '3%' }} />
                        </TouchableOpacity>
                    </View>
                    <Text style={{ marginBottom: "3%", paddingBottom: '5%' }}>{review}</Text>
                </View>
            </View>
        )
    }
}

export default SingleReview

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
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontWeight: 'bold',
        marginLeft: '5%',
        paddingBottom: '3%'
    },
})