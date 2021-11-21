import React, { useRef } from "react";
import { Text, View } from "react-native";
import { Camera } from 'expo-camera';

/* ----------------- */

import styles from "../components/style/style";
import CameraControls from "../components/navigation/CameraControls";
import LeaveButton from "../components/navigation/LeaveButton";

/* ----------------- */

const Main = ({ navigation }) => {

    //sätt upp kameran, och dess variablar
	const cameraReferencer = useRef(null)
    const [userAllowsCameraAccess, setUserAllowsCameraAccess] = React.useState(null);
    const [cameraFacing, setCameraFacing] = React.useState(Camera.Constants.Type.front);
    const [flash, setFlash] = React.useState(false);

    //När usern accepterar kamera permissions.
    React.useEffect(async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setUserAllowsCameraAccess(status === 'granted');
    }, []);

    //för att kunna flippa kameran.
    const flipCamera = () => {
        setCameraFacing(
            cameraFacing === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
        );
    };

    //Tar en bild och sparar den i cache.
    //sen öppnar den den i en ny scene.
    const takePicture = async () => {
        if (userAllowsCameraAccess) {
            const image = await cameraReferencer.current.takePictureAsync()
             
            navigation.navigate("CameraImage", {
                image: image,
                cameraFacing: cameraFacing,
            })
        }
    };

    //visar en textlåda som visar om kameran är tillgänglig eller inte.
    if (userAllowsCameraAccess === false || userAllowsCameraAccess === null) {
        return <Text>Camera access was denied.</Text>;
    }

    return (
        <View style={styles.container}>
            <Camera flashMode={flash} style={styles.cameraOutput} type={cameraFacing} ref={cameraReferencer} />

            <CameraControls
                _onFlip={flipCamera}
                _onPhoto={takePicture}
                _onFlash={(e) => setFlash(e)}
            />
        </View>
    );
}

export default Main;