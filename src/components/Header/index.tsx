import { styles } from "./styles";
import { Pressable, View, Image } from "react-native";
import Netflix from "../../assets/images/Netflix.jpg";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStack } from "../../../routes/NativeStackNavigator";

export function Header() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStack>>();

  function openScreen() {
    navigation.navigate("Profile");
  }

  return (
    <View style={styles.container}>
      <View style={styles.secao}>
        <Image source={Netflix} style={styles.img_netflix} />
        <View style={styles.icons}>
          <Pressable onPress={openScreen}>
            <MaterialCommunityIcons name="pencil-outline" size={40} color="white" />
          </Pressable>
        </View>
      </View>
    </View>
  );
}