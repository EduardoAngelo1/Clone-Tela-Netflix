import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    text: {
        paddingLeft: 40,
        marginTop: 7,
        color: "white",
        fontSize: 28,
        fontWeight: 'bold'
    },
    icon: {
        marginTop: 10,
        marginLeft: 10,
        justifyContent: 'flex-end'
    },
    image: {
        flexDirection:'row',
        marginTop:10,
        width:150,
        height: 150,
        alignSelf: "center",
        // alignItems: "center",
        resizeMode: 'center',
        borderRadius:5  ,
    },
    iconProfile:{
        bottom:36,
        left:342,
    },
    input:{
        color:"white",
        fontSize:20,
        alignSelf:'center',
        width:"75%",
        height:60,
        borderWidth:1,
        borderRadius:7,
        backgroundColor:"#262626",
        marginBottom:25,
        paddingLeft:15,
    },
})