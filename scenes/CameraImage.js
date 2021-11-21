import React from 'react';
import { Image, View } from 'react-native';

/* ------------------- */

import styles from "../components/style/style"
import CameraControls from "../components/navigation/CameraControls"

/* ------------------- */

const CameraImageScene = ({ route, navigation }) => {

    const { image, cameraFacing } = route.params;


    return (
		<View style={styles.container}>

			<Image style={[styles.cameraOutput, cameraFacing==1?{}:{transform: [{scaleX:-1}]}]} source={{uri: image.uri}} />

			<CameraControls
				_isShooting={false}
				_saveImage={() => navigation.navigate("ImageCollection", {
					image: image
				})}	
			/>
		</View>
	);
}

export default CameraImageScene;