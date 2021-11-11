import React, { useState } from "react";
import { View, Button, TextInput, StyleSheet, Modal } from 'react-native'

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState('')

const goalInputHandle = (enteredText) => {
    setEnteredGoal(enteredText)
  }

const addGoalHandle = () => {
  props.onAddGoal(enteredGoal)
  setEnteredGoal('')
}
    return (
      <Modal visible={props.visible} animationType='slide'>
        <View style={styles.inputContainer}>
            <TextInput 
                placeholder="Course Goal" 
                style={styles.input} 
                onChangeText={goalInputHandle} 
                value={enteredGoal}
                />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title='cancel' color='red' onPress={props.onCancel}/>
            </View>
            <View style={styles.button}>

            <Button title="ADD" onPress={addGoalHandle}/>
            </View>

          </View>
        </View>
      </Modal>
    )
}

    const styles = StyleSheet.create({
        inputContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
          input: {
            borderColor: 'black'
            
        },
        buttonContainer: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '60%',
        },
        button: {
          width: '40%'
        }
    })
export default GoalInput