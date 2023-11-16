import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { Home } from "../../src/pages/Home";
import { BodyProfile } from "../../src/pages/BodyProfile";

const Stack = createNativeStackNavigator<RootStack>();

export type RootStack = {
    Home: {};
    Profile:undefined;
}

export function NativeStackNavigator(){
    return(
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}
        >
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Profile" component={BodyProfile}/>
        </Stack.Navigator>
    )
}