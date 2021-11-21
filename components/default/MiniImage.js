import React from 'react';
import { Image, View } from 'react-native';

/* ------------------- */

import styles from "../style/style";

/* ------------------- */



const MiniImage = (props) => {

    return (
		<View style={styles.miniImageContainer}>
			<Image source={props._image} style={styles.miniImage} />
		</View>
	);
}

export default MiniImage;