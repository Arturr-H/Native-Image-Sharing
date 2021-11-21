import React from 'react';
import { Image, View } from 'react-native';

/* ------------------- */

import styles from "../components/style/style";
import MiniImage from "../components/default/MiniImage";

/* ------------------- */

const ImageCollection = ({ route, navigation }) => {

	const { image } = route.params;

    return (
		<View style={styles.container}>
			<MiniImage _image={image} />
		</View>
	);
}

export default ImageCollection;