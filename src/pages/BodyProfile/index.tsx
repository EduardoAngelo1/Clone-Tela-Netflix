import { StatusBar, Text, FlatList, View } from "react-native"
import { MaterialCommunityIcons, AntDesign, FontAwesome, MaterialIcons, Ionicons } from "@expo/vector-icons"
import { List } from "../../components/List"
import { styles } from "./style"
import { Profile } from "../../components/Profile"

export interface dataProps {
    id: string,
    icon: any,
    name: any,
    icon1: any,
    descricao: any
}
export function BodyProfile() {

    const data = [
        {
            id: '1',
            icon: <FontAwesome style={styles.iconApp} name="exclamation-triangle" size={30} color="#B3B3B3" />,
            name: <Text style={styles.textApp}>Classificação etária</Text>,
            icon1: <MaterialIcons style={styles.icon1App} name="exit-to-app" size={30} color="#B3B3B3" />,
            descricao: <Text style={styles.desc1}>Sem restrições</Text>
        },
        {
            id: '2',
            icon: <Ionicons style={styles.iconApp} name="language" size={30} color="#B3B3B3" />,
            name: <Text style={styles.textApp}>Idioma de exibição</Text>,
            icon1: <AntDesign style={styles.icon1App} name="right" size={30} color="#B3B3B3" />,
            descricao: <Text style={styles.desc2}>
                Altere o idioma do texto que você vê na Netflix em todos os aparelhos
            </Text>
        },
        {
            id: '3',
            icon: <MaterialCommunityIcons style={styles.iconApp} name="subtitles" size={30} color="#B3B3B3" />,
            name: <Text style={styles.textApp}>Idiomas de áudio e legendas</Text>,
            icon1: <AntDesign style={styles.icon1App} name="right" size={30} color="#B3B3B3" />,
            descricao: <Text style={styles.desc3}>
                Escolha seus idiomas preferidos para assistir a séries e filmes
            </Text>
        },
        {
            id: '4',
            icon: <MaterialCommunityIcons style={styles.iconApp} name="tooltip-text" size={30} color="#B3B3B3" />,
            name: <Text style={styles.textApp}>Exibição das legendas</Text>,
            icon1: <AntDesign style={styles.icon1App} name="right" size={30} color="#B3B3B3" />,
            descricao: <Text style={styles.desc4}>
                Altere a forma como as legendas aparecem em celulares e tablets
            </Text>
        },
        {
            id: '5',
            icon: <MaterialCommunityIcons style={styles.iconApp} name="youtube-subscription" size={30} color="#B3B3B3" />,
            name: <Text style={styles.textApp}>Reprodução automática do {'\n'}proximo episódio</Text>,
            icon1: <MaterialIcons style={styles.icon1App} name="radio-button-on" size={30} color="#B3B3B3" />,
            descricao: <Text style={styles.desc5}>Em todos os aparelhos</Text>
        },
        {
            id: '6',
            icon: <MaterialIcons style={styles.iconApp} name="play-circle-outline" size={30} color="#B3B3B3" />,
            name: <Text style={styles.textApp}>Reprodução automática das {'\n'}prévias</Text>,
            icon1: <MaterialIcons style={styles.icon1App} name="radio-button-on" size={30} color="#B3B3B3" />,
            descricao: <Text style={styles.desc6}>Em todos os aparelhos</Text>
        }

    ]
    return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="transparent"
                    translucent//se eu deixar assim já equivale a translucent={true}
                />
                <Profile />
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <List item={item} />}
                />
                <View style={styles.containerDelete}>
                    <AntDesign style={styles.iconDelete} name="delete" size={30} color="white" />
                    <Text style={styles.delete}>Excluir perfil</Text>
                </View>
            </View>
    )
}