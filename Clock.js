import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

function checkNumber(num) {
    if (num < 10) {
        return `0${num}`
    } else {
        return num;
    }
}

const Clock = () => {

    useEffect(() => {
        setInterval(() => {
            setHours(new Date().getHours());
            setMinutes(new Date().getMinutes());
            setSecond(new Date().getSeconds());
        }, 1000)
    }, [])

    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSecond] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.txt}>{hours}{` : `}</Text>
            <Text style={styles.txt}>{minutes}{` : `}</Text>
            <Text style={styles.txt}>{seconds}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 200,
        backgroundColor: '#d9694a',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 100
    }, txt: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold'
    }
})

export default Clock;