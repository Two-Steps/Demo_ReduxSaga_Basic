import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux'
import createSagaMiddleware from 'redux-saga';
import rootSaga, { helloSage } from './saga';
import counter from './reducers';
import ComponentClock from './componentClock'

export default function App() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(counter, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);

  return (
    <Provider store={store}>
      <ComponentClock />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50
  }, btn: {
    marginTop: 20,
    backgroundColor: '#b93dc4',
    padding: 10,
    borderRadius: 5,
    width: 200,
    alignItems: 'center'
  }, txt_value: {
    marginTop: 30,
    color: 'green',
    fontWeight: 'bold',
    fontSize: 24
  }
});
