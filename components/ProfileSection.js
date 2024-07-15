import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileSection = ({ setActiveSection }) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity
                    onPress={() => setActiveSection('Home')}
                    style={styles.backButton}>
                    <Icon name="arrow-back" size={30} color="#000000" />
                    <Text style={styles.backButtonText}>
                        Back to Home
                    </Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>
                    Profile Section
                </Text>
            </View>
            <View style={styles.contentContainer}>
                <Icon name="person" size={80} color="#3498db" />
                <Text style={styles.contentText}>
                    Username: fatima24
                </Text>
                <Text style={styles.contentText}>
                    Email: fatima.aguel@cesi.fr
                </Text>
                {/* Additional profile content goes here */}
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
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        elevation: 5,
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    backButtonText: {
        color: '#3498db',
        fontSize: 16,
        marginLeft: 10,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 20,
    },
    contentContainer: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    contentText: {
        fontSize: 16,
        marginBottom: 10,
        color: '#555',
    },
});

export default ProfileSection;
