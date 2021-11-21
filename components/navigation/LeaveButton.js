import React from "react";
import { TouchableOpacity, Image } from "react-native";

/* ----------------- */

import styles from "../style/style";

/* ----------------- */

const leaveButton = props => {
    return (
        <TouchableOpacity onPress={props._press}>
            <Image
                source={require("../../assets/icons/close.png")}
                style={styles.leaveButtonIcon}
            />
        </TouchableOpacity>
    );
}

export default leaveButton;