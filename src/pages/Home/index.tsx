import { styles } from "./styles";
import { StatusBar } from "react-native"
import { View, Text } from "react-native"
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';


export function Home() {
    return (
        <>
         <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent//se eu deixar assim já equivale a translucent={true}
      />
        <Header />
        <View style={styles.container}>
            <Text style={styles.text}>
                Quem está assistindo?
            </Text>
        </View>
        <Card/>
        </>
    )
}