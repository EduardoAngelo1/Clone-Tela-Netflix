import { styles } from "./style";
import { View } from "react-native"
import { dataProps } from "../../pages/BodyProfile";

interface atributos{
    item : dataProps
}
export const List = ({item}:atributos) =>{
    const {id, icon, name, icon1, descricao} = item
    return (
        <View style={styles.container}>
            {icon}
            {name}
            {icon1}
            {descricao}
        </View>
    )
}