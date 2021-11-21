import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center',
    },

    cameraOutput: {
        width: "100%",
        height: "100%",

        backgroundColor: "yellow",
    },
    controlbalContainer: {
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        position: "absolute",
    },
    cameraBottomControlbar: {
        position: "absolute",
        bottom: 20,

        height: 120,
        width: Dimensions.get("window").width - 40,
        backgroundColor: "rgba(0,0,0,0.4)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 30,
        borderRadius: 15,
    },
    cameraTopControlbar: {
        position: "absolute",
        top: 0,

        height: 100,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 30,
        paddingTop: 20,
    },
    cameraControlbarButton: {
        width: 80,
        height: 80,
        borderRadius: 50,
        backgroundColor: "transparent",

        borderColor: "white",
        borderWidth: 3,
    },
    saveImageButton: {
        width: 160,
        height: 80,
        borderRadius: 15,
        backgroundColor: "transparent",

        borderColor: "white",
        borderWidth: 3,

        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontWeight: "500",
        fontSize: 20
    },
    cameraControlbarIcon: {
        width: 40,
        height: 40,
        borderRadius: 25,
    },
    leaveButtonIcon: {
        width: 40,
        height: 40,
        borderRadius: 25,
    },

    miniImage: {
        width: 100,
        height: 100,
    },
    miniImageContainer: {
        backgroundColor: "rgb(240, 240, 240)",
        padding: 15,
        borderRadius: 10,
    },
});

export default styles;