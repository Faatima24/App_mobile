import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeSection = ({ setActiveSection }) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>
                    Bienvenue dans votre espace!
                </Text>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity
                        onPress={() => setActiveSection('Profile')}
                        style={styles.button}>
                        <Icon name="person" size={30} color="white" />
                        <Text style={styles.buttonText}>
                            Profil
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setActiveSection('Settings')}
                        style={styles.button}>
                        <Icon name="settings" size={30} color="white" />
                        <Text style={styles.buttonText}>
                            Paramètres
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        backgroundColor: '#3498db',
        padding: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        elevation: 5,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 20,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#2ecc71',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    featuresContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    // Add more styles as needed
});

export default HomeSection;
