import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import { ShopNavigator,AuthNavigator }  from './ShopNavigator';
import StartupScreen from '../screens/StartupScreen';

const AppNavigator = props => {
  const isAuth = useSelector(state => !!state.auth.token);
  const isTryLogin=useSelector(state=>state.auth.didTryAutoLogin)

  return (
    <NavigationContainer>
    {isAuth && <ShopNavigator />}
     {!isAuth && isTryLogin && <AuthNavigator/> }
     {!isAuth && !isTryLogin && <StartupScreen/>}
    </NavigationContainer>
    
  );
};

export default AppNavigator;
