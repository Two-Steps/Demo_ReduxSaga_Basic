import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux'
import createSagaMiddleware from 'redux-saga';
import rootSaga, { helloSage } from './saga';
import counter from './reducers';
import Clock from './Clock';

const ComponentClock = () => {
    const dispatch = useDispatch();
    const values = useSelector(state => state);
    const onIncrement = () => dispatch({ type: 'INCREMENT', color: 'brown' });
    const onDecrement = () => dispatch({ type: 'DECREMENT', color: 'black' })
    const onIncrementAsync = () => dispatch({ type: 'INCREMENT_ASYNC' });
    return (
        <View style={styles.container}>
            <Clock />
            <TouchableOpacity onPress={() => { onIncrementAsync() }} style={styles.btn}>
                <Text style={{ fontWeight: 'bold', color: '#fff' }}>Increment after 2 second</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { onIncrement() }} style={styles.btn}>
                <Text style={{ fontWeight: 'bold', color: '#fff' }}>Increment</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { onDecrement() }} style={styles.btn}>
                <Text style={{ fontWeight: 'bold', color: '#fff' }}>Decrement</Text>
            </TouchableOpacity>
            <Text style={[styles.txt_value, { color: values[0].color }]}>{values[0].num}</Text>
        </View>
    )
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

export default ComponentClock;