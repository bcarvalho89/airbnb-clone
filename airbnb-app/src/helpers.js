import { AsyncStorage }  from 'react-native';

const isLogged = async () => {
  try {
    const token = await AsyncStorage.getItem('@AirbnbApp:token');
        
    return token !== null;
  } catch (err) {
    console.log(err);
  }
}

export { isLogged };