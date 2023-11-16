import { NavigationContainer } from '@react-navigation/native';
import { NativeStackNavigator } from './NativeStackNavigator';

export const Routes = () => {
    return <NavigationContainer>
        <NativeStackNavigator/>
    </NavigationContainer>
}