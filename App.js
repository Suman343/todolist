
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItem, setTaskItem] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss(); //keyboard is closed after pressing add
    setTaskItem([...taskItem, task])
    setTask(null);
  }

  //to delete 
  const completeTask = (index) => {
    let itemsCopy = [...taskItem];
    itemsCopy.splice(index, 1);
    setTaskItem(itemsCopy);
  }

  return (
    <View style={styles.container}>
      {/* Today's Tasks */}
      
      
          <View style={styles.taskwrapper}>
            <Text style={styles.title}>Remind Me !!</Text>
            <ScrollView 
            contentContainerStyle={{
              flexGrow: 1
            }}
            keyboardShouldPersistTaps="handled"
            style={styles.scroll}
            
            >
              <View style={styles.tasklist}>        
                {/* Task list */}
                {
                  taskItem.map((item, index) => {
                    return (
                      <TouchableOpacity key={index} onPress={() => completeTask(index)} >
                        <Task text={item} />
                      </TouchableOpacity>
                    )

                  })
                }
              </View>
            </ScrollView>
          </View>
      
      {/* write a task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder='Write a task'
          onChangeText={text => setTask(text)}
          value={task}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>

          <View style={styles.addWrapper}>
           <MaterialCommunityIcons name="send" size={25} color="#55BCF6" />
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  addWrapper: {
    alignItems: "center",
    backgroundColor: "#FFF",
    borderColor: "#c0c0c0",
    borderRadius: 30,
    borderWidth: 1,
    height: 60,
    justifyContent: "center",
    width: 60,
  },
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  input: {
    backgroundColor: "#fff",
    borderColor: "#c0c0c0",
    borderRadius: 60,
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 15,
    width: 280,
  },
  scroll:{
    height:"84%",
  },
  taskwrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  tasklist: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    alignItems: "center",
    bottom: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",//so we can place it wherever we want
    width: "100%",
  },
});
