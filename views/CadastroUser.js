import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const CadastroUser = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [arePasswordsMatching, setArePasswordsMatching] = useState(true);

  useEffect(() => {
    // Função para verificar se todos os campos estão preenchidos e se as senhas coincidem
    const checkFields = () => {
      const emailValid = validateEmail(email);
      const passwordsMatch = password === confirmPassword;
      setIsEmailValid(emailValid);
      setArePasswordsMatching(passwordsMatch);

      if (name && email && password && confirmPassword && emailValid && passwordsMatch) {
        setIsButtonDisabled(false);
      } else {
        setIsButtonDisabled(true);
      }
    };

    checkFields();
  }, [name, email, password, confirmPassword]);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleCreateAccount = () => {
    // Verifica se todos os campos estão preenchidos corretamente
    if (isButtonDisabled) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos corretamente antes de prosseguir.');
      return;
    }
    // Adicione sua lógica de criação de conta aqui
    navigation.navigate('Login'); // Direciona o usuário para o arquivo Login.js
  };

  return (
    <View style={styles.container}>
      {/* Texto "Crie sua conta" */}
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>Cadastro de Usuário</Text>
      </View>

      {/* Inputs de criação de conta */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome completo"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={[styles.input, !isEmailValid && styles.inputError]}
          placeholder="Digite seu e-mail"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        {!isEmailValid && <Text style={styles.errorText}>Email inválido</Text>}
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TextInput
          style={[styles.input, !arePasswordsMatching && styles.inputError]}
          placeholder="Digite novamente sua senha"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />
        {!arePasswordsMatching && <Text style={styles.errorText}>As senhas não coincidem</Text>}
      </View>

      {/* Botão "Criar minha conta" */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, isButtonDisabled && styles.buttonDisabled]}
          onPress={handleCreateAccount}
          disabled={isButtonDisabled}
        >
          <Text style={styles.buttonText}>Criar minha conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#FFDE59',
  },
  subtitleContainer: {
    alignItems: 'center',
    marginTop: 100, // Ajusta este valor se necessário para alinhar corretamente após a imagem
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 30,
    color: 'black',
  },
  inputContainer: {
    marginBottom: 20,
    marginTop: 30, // Adicionado para espaçar inputs do texto "Crie sua conta"
  },
  input: {
    height: 50,
    borderColor: '#217744',
    borderWidth: 2,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 15,
    backgroundColor: 'white',
    fontSize: 18,
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: -10,
    marginBottom: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#217744',
    padding: 15,
    borderRadius: 15,
    width: '100%',
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#4DA470',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
});

export default CadastroUser;
