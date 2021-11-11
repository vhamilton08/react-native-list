// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [isAddMode, setIsAddMode] = useState(false)
  const [courseGoals, setCourseGoals] = useState([])

 

  const addGoalHandle = (goalTitle) => {
    setCourseGoals(currentGoals => 
      [...currentGoals, 
      {id: Math.random().toString(), value: goalTitle}])
      setIsAddMode(false)
  }

  const removeGoalHandle = (goalId) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId )
    })
  }

  const cancelGoalHandle = () => {
    setIsAddMode(false)
  }
  return (
    <View style={styles.screen}>
      <Button title='Add new Goal' onPress={() => setIsAddMode(true)}/>
      <GoalInput onAddGoal={addGoalHandle} visible={isAddMode} onCancel={cancelGoalHandle}/>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals} 
        renderItem={itemData => (
          <GoalItem 
            id={itemData.item.id}
            title={itemData.item.value}
            onDelete={removeGoalHandle}/>)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    screen: {
      padding: 50
  }
});
