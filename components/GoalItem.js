import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const GoalItem = (props) => {
    return (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)} activeOpacity={0.8}>
            <View style={styles.listItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({

    listItem: {
        padding: 10,
        marginVertical: 10,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: '#eee'
    }
})
export default GoalItem