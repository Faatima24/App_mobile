import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const PressableFeatureBox = ({ name, icon, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.featureBox}>
            <Icon name={icon} size={50} color="#3498db" />
            <Text style={styles.featureName}>{name}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    featureBox: {
    },
    featureName: {
    },
});

export default PressableFeatureBox;
