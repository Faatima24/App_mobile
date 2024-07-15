import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import DashboardApp from './components/Dashboard';
import HomeSection from './components/HomeSection';
import ProfileSection from './components/ProfileSection';
import SettingsSection from './components/SettingsSection';

_DashboardApp => {
    // Use state and logic here as needed
    const [activeSection, setActiveSection] = useState('Home');

    const renderSection = () => {
        switch (activeSection) {
            case 'Profile':
                return <ProfileSection setActiveSection={setActiveSection} />;
            case 'Settings':
                return <SettingsSection setActiveSection={setActiveSection} />;
            // Other cases for sections
            default:
                return <HomeSection setActiveSection={setActiveSection} />;
        }
    };

    return (
        <View style={styles.container}>
            {renderSection()}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop:'3O%',
    },
});

export default DashboardApp;
