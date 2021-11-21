import React from "react";
import { Image, TouchableOpacity, View, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';

/* -------------------------- */

import styles from "../style/style";
import LeaveButton from "./LeaveButton";

/* -------------------------- */

const CameraControls = (props) => {

    const isShooting = props._isShooting??true;
    const navigation = useNavigation();
    const[flash, setFlash] = React.useState(false);
    const flashIcons = [
        require("../../assets/icons/flash-on.png"),
        require("../../assets/icons/flash-off.png")
    ];

    return (
        <View style={styles.controlbalContainer}>
            <View style={styles.cameraTopControlbar}>
                <LeaveButton _press={() => navigation.navigate("Main")} />               
                
                <TouchableOpacity onPress={() => {
                    setFlash(!flash);
                    props._onFlash(!flash);

                }}><Image source={(flash == false)?flashIcons[1]:flashIcons[0]} style={[styles.cameraControlbarIcon, (!isShooting)?{display: "none"}:{}]} /></TouchableOpacity>
            </View>
            {
                (isShooting)
                ?   <View style={styles.cameraBottomControlbar}>
                        <TouchableOpacity onPress={() => props._onPress()}><Image source={require("../../assets/icons/layers.png")} style={styles.cameraControlbarIcon} /></TouchableOpacity>
                        
                        <TouchableOpacity onPress={() => props._onPhoto()}><View style={styles.cameraControlbarButton} /></TouchableOpacity>
                        
                        <TouchableOpacity onPress={() => props._onFlip()}><Image source={require("../../assets/icons/reverse.png")} style={styles.cameraControlbarIcon} /></TouchableOpacity>
                    </View>

                :   <View style={styles.cameraBottomControlbar}>
                        <TouchableOpacity onPress={() => props._onPress()}><Image source={require("../../assets/icons/layers.png")} style={styles.cameraControlbarIcon} /></TouchableOpacity>

                        <TouchableOpacity onPress={() => {

                            props._saveImage();

                        }}><View style={styles.saveImageButton}><Text style={styles.buttonText}>SAVE</Text></View></TouchableOpacity>

                        <TouchableOpacity onPress={() => props._onFlip()}><Image source={require("../../assets/icons/reverse.png")} style={styles.cameraControlbarIcon} /></TouchableOpacity>
                    </View>
            }
        </View>
    );
}

export default CameraControls;