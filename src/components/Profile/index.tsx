import { styles } from "./styles";
import {Pressable,View, Text, Image,TextInput} from "react-native";
import { AntDesign,FontAwesome } from '@expo/vector-icons'; 
import War from "../../assets/images/Clone.jpg"
import { useNavigation } from "@react-navigation/native";

export function Profile() {
    const navigation = useNavigation()
    return (
        <View >
            <View style={styles.container}>
                <Pressable onPress={() => navigation.goBack()}>
                    <AntDesign style={styles.icon} name="arrowleft" size={34} color="white" />
                    </Pressable>
                <Text style={styles.text}>
                    Editar perfil
                </Text>
            </View>
            <View>
                <Image source={War} style={styles.image} />
            </View>
            <FontAwesome style={styles.iconProfile}name="pencil-square" size={40} color="white" />
            <View>
                <TextInput 
                placeholder='Nome' 
                style={styles.input}
                placeholderTextColor="#6B6B6B"
                />
            </View>
        </View>
    )
}
