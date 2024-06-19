import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Categorias = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.section} onPress={() => navigation.navigate('Socializacao')}>
                <Text style={styles.sectionText}>Socialização</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.section} onPress={() => navigation.navigate('Linguagem')}>
                <Text style={styles.sectionText}>Linguagem</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.section} onPress={() => navigation.navigate('Cognicao')}>
                <Text style={styles.sectionText}>Cognição</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.section} onPress={() => navigation.navigate('AutoCuidados')}>
                <Text style={styles.sectionText}>Auto Cuidados</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.section} onPress={() => navigation.navigate('DesenvolvimentoMotor')}>
                <Text style={styles.sectionText}>Desenvolvimento Motor</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFDE59',
    },
    section: {
        backgroundColor: '#217744',
        padding: 20,
        marginBottom: 30,
        width: '80%',
        alignItems: 'center',
        borderRadius: 10,
    },
    sectionText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Categorias;
