import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

export default function App() {
  const [todos, setTodos] = useState([
    {
      todoId: 0,
      isDone: false,
      todo: 'Code your first react native app',
    },
  ])
  const [input, setInput] = useState('')

  const onPressHandler = (todoId) => {
    setTodos(
      ...todos.map((todo) =>
        todo.todoId === todoId ? { ...todo, isDone: !todo.isDone } : todo
      )
    )
  }

  return (
    <View style={styles.container}>
      <Text>Welcome to my todo app!!!</Text>
      {todos.map(({ todoId, todo, isDone }) => (
        <Text
          key={todoId}
          onPress={onPressHandler}
          style={isDone ? styles.doneTodo : styles.todo}
        >
          {todo}
        </Text>
      ))}
      <View style={styles.inputBox}>
        <TextInput onChange={(input) => setInput(input)} value={input} />
        <Button
          title='Add'
          onPress={() =>
            setTodos([
              { isDone: false, todo: input, todoId: todos.length },
              ...todos,
            ])
          }
        />
      </View>
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    padding: 16,
  },
  todo: {
    padding: 16,
    backgroundColor: 'grey',
  },
  doneTodo: {
    padding: 16,
    backgroundColor: 'grey',
    textDecorationLine: 'line-through',
  },
})
