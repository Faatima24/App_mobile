import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const BackButton = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.backButton}>
            <Icon name="arrow-back" size={30} color="#000000" />
            <Text style={styles.backButtonText}>Back to Home</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    backButton: {
        // Your styles here
    },
    backButtonText: {
        // Your styles here
    },
});

export default BackButton;
