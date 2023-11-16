import { styles } from "./styles";
import { View, Image, Text, FlatList } from "react-native"

export function Card() {

    const data = [
        { id: '1', name: 'Darth', image: require('../../assets/images/darthVader.jpg') },
        { id: '2', name: 'Clone', image: require('../../assets/images/Clone.jpg') },
        { id: '3', name: 'Yoda', image: require('../../assets/images/yoda.jpg') },
        { id: '4', name: 'Mandalorian', image: require('../../assets/images/Mandalorian.png') },
        { id: '5', name: 'Chewie', image: require('../../assets/images/Chewbacca.jpg') },
        { id: '6', name: 'Luke', image: require('../../assets/images/Luke.jpg') },
    ];

    interface Tipo {
        name: string;
        image: any;
    }
    const Card = ({ name, image }: Tipo) => (

        <View style={styles.cardContainer}>
            <Image source={image} style={styles.cardImage} />
            <Text style={styles.cardText}>
                {name}
            </Text>
        </View>
    );
    return (
        <>
            <View style={styles.container}>
                <View style={styles.margiContainer}>
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <Card name={item.name} image={item.image} />}
                        numColumns={2}
                    />
                </View>
            </View>
        </>
    )
}