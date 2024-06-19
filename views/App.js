import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen'; // Importe o HomeScreen
import CadastroUser from './CadastroUser'; // Importe a tela de cadastro
import Login from './Login'; // Importe a tela de login
import CadastroAluno from './CadastroAluno'; // Importe a tela de cadastro de aluno
import Socializacao01 from './Socializacao01';
import Socializacao12 from './Socializacao12';
import Socializacao23 from './Socializacao23';
import Socializacao34 from './Socializacao34';
import Socializacao45 from './Socializacao45';
import Socializacao56 from './Socializacao56';
import Linguagem01 from './Linguagem01';
import Linguagem12 from './Linguagem12';
import Linguagem23 from './Linguagem23';
import Linguagem34 from './Linguagem34';
import Linguagem45 from './Linguagem45';
import Linguagem56 from './Linguagem56';
import Cognicao01 from './Cognicao01';
import Cognicao12 from './Cognicao12';
import Cognicao23 from './Cognicao23';
import Cognicao34 from './Cognicao34';
import Cognicao45 from './Cognicao45';
import Cognicao56 from './Cognicao56';
import AutoCuidados01 from './AutoCuidados01';
import AutoCuidados12 from './AutoCuidados12';
import AutoCuidados23 from './AutoCuidados23';
import AutoCuidados34 from './AutoCuidados34';
import AutoCuidados45 from './AutoCuidados45';
import AutoCuidados56 from './AutoCuidados56';
import DesenvMotor01 from './DesenvMotor01';
import DesenvMotor12 from './DesenvMotor12';
import DesenvMotor23 from './DesenvMotor23';
import DesenvMotor34 from './DesenvMotor34';
import DesenvMotor45 from './DesenvMotor45';
import DesenvMotor56 from './DesenvMotor56';
import ForgotPassword from './ForgotPassword'; // Importe a tela de esqueci minha senha
import Feedback from './FeedBack';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Cadastro" component={CadastroUser} options={{ title: 'Cadastro' }} />
                <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
                <Stack.Screen name="CadastroAluno" component={CadastroAluno} options={{ title: 'Cadastro de Aluno' }} />
                <Stack.Screen name="Socializacao01" component={Socializacao01} options={{ title: 'Socializacao01' }} />
                <Stack.Screen name="Socializacao12" component={Socializacao12} options={{ title: 'Socializacao12' }} />
                <Stack.Screen name="Socializacao23" component={Socializacao23} options={{ title: 'Socializacao23' }} />
                <Stack.Screen name="Socializacao34" component={Socializacao34} options={{ title: 'Socializacao34' }} />
                <Stack.Screen name="Socializacao45" component={Socializacao45} options={{ title: 'Socializacao45' }} />
                <Stack.Screen name="Socializacao56" component={Socializacao56} options={{ title: 'Socializacao56' }} />
                <Stack.Screen name="Linguagem01" component={Linguagem01} options={{ title: 'Linguagem01' }} />
                <Stack.Screen name="Linguagem12" component={Linguagem12} options={{ title: 'Linguagem12' }} />
                <Stack.Screen name="Linguagem23" component={Linguagem23} options={{ title: 'Linguagem23' }} />
                <Stack.Screen name="Linguagem34" component={Linguagem34} options={{ title: 'Linguagem34' }} />
                <Stack.Screen name="Linguagem45" component={Linguagem45} options={{ title: 'Linguagem45' }} />
                <Stack.Screen name="Linguagem56" component={Linguagem56} options={{ title: 'Linguagem56' }} />
                <Stack.Screen name="Cognicao01" component={Cognicao01} options={{ title: 'Cognicao01' }} />
                <Stack.Screen name="Cognicao12" component={Cognicao12} options={{ title: 'Cognicao12' }} />
                <Stack.Screen name="Cognicao23" component={Cognicao23} options={{ title: 'Cognicao23' }} />
                <Stack.Screen name="Cognicao34" component={Cognicao34} options={{ title: 'Cognicao34' }} />
                <Stack.Screen name="Cognicao45" component={Cognicao45} options={{ title: 'Cognicao45' }} />
                <Stack.Screen name="Cognicao56" component={Cognicao56} options={{ title: 'Cognicao56' }} />
                <Stack.Screen name="AutoCuidados01" component={AutoCuidados01} options={{ title: 'AutoCuidados01' }} />
                <Stack.Screen name="AutoCuidados12" component={AutoCuidados12} options={{ title: 'AutoCuidados12' }} />
                <Stack.Screen name="AutoCuidados23" component={AutoCuidados23} options={{ title: 'AutoCuidados23' }} />
                <Stack.Screen name="AutoCuidados34" component={AutoCuidados34} options={{ title: 'AutoCuidados34' }} />
                <Stack.Screen name="AutoCuidados45" component={AutoCuidados45} options={{ title: 'AutoCuidados45' }} />
                <Stack.Screen name="AutoCuidados56" component={AutoCuidados56} options={{ title: 'AutoCuidados56' }} />
                <Stack.Screen name="DesenvMotor01" component={DesenvMotor01} options={{ title: 'DesenvMotor01' }} />
                <Stack.Screen name="DesenvMotor12" component={DesenvMotor12} options={{ title: 'DesenvMotor12' }} />
                <Stack.Screen name="DesenvMotor23" component={DesenvMotor23} options={{ title: 'DesenvMotor23' }} />
                <Stack.Screen name="DesenvMotor34" component={DesenvMotor34} options={{ title: 'DesenvMotor34' }} />
                <Stack.Screen name="DesenvMotor45" component={DesenvMotor45} options={{ title: 'DesenvMotor45' }} />
                <Stack.Screen name="DesenvMotor56" component={DesenvMotor56} options={{ title: 'DesenvMotor56' }} />
                <Stack.Screen name="FeedBack" component={Feedback} options={{ title: 'FeedBack' }} />
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ title: 'Esqueci Minha Senha' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
