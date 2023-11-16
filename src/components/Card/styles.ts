import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {

        backgroundColor: '#050505',
        paddingBottom: 500,
    },
    margiContainer: {
        marginHorizontal: "25%"
    },
    cardContainer: {
        backgroundColor: "#050505",
        flex: 1,
        overflow: 'hidden',
        alignItems: "center",

    },
    cardImage: {
        borderRadius: 6,
        width: '60%',
        height: 90,
        resizeMode: 'contain',

    },
    cardText: {
        padding: 10,
        fontSize: 16,
        color: 'white',
    },

    
})