import React from 'react'
import {Router , Scene, Stack} from 'react-native-router-flux'
import FormCadastro from './components/FormCadastro'
import FormLogin from './components/FormLogin'
import Splash from './components/Splash';
import WelcomeContainer from './components/WelcomeContainer';
import Principal from './components/Principal';


export default props =>(
    <Router>
        
        <Scene key="root"  >
            <Scene key="spalsh"  initial component={Splash} hideNavBar/>
            <Scene key="formLogin"       component={FormLogin} title="Login" hideNavBar />
            <Scene key="formRegister"    component={FormCadastro} title="Cadastro"  /> 
            <Scene key="welcome"         component={WelcomeContainer} title="Bem vindo" hideNavBar/>
            <Scene key="principal"       component={Principal} title="Principal" hideNavBar/>
        </Scene>
    </Router>
)