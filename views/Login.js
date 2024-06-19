import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = () => {
    if (username === 'admin' && password === '123') {
      // Login sucesso, navegue para a tela de home
      navigation.navigate('CadastroAluno');
    } else {
      setError('Usuário ou senha inválidos');
    }
  };

  const handleForgotPassword = () => {
    // Adicione sua lógica de recuperação de senha
    navigation.navigate('ForgotPassword');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Entrar</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.forgotPassword} onPress={handleForgotPassword}>
        <Text style={styles.forgotPasswordText}>Esqueci minha senha</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFDE59'
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'Anton-Regular',
    padding: 40,
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    borderColor: '#217744',
    borderWidth: 2,
    marginBottom: 20,
    paddingHorizontal: 25,
    borderRadius: 15,
    width: 350,
    color: '#000',
    fontSize: 18,
  },
  button: {
    backgroundColor: '#217744',
    borderRadius: 15,
    padding: 15,
    width: 350,
    marginBottom: 20,
    alignItems: 'center',
    height: 55,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  forgotPassword: {
    marginTop: 1,
    alignSelf: 'flex-end',
    marginRight: 40,
    padding: 20,
  },
  forgotPasswordText: {
    fontSize: 16,
    color: 'black',
  },
});

export default Login;