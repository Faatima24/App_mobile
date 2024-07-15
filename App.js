import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const DashboardApp = () => {
  const [activeSection, setActiveSection] = useState("Home");

  const renderSection = () => {
    switch (activeSection) {
      case "Profile":
        return <ProfileSection />;
      case "Paramètres":
        return <ParamètresSection />;
      case "Statistiques":
        return <StatisticsSection />;
      case "Notifications":
        return <NotificationsSection />;
      case "Publications":
        return <PostsSection />;
      case "Evénements":
        return <EventSection />;
      default:
        return <HomeSection />;
    }
  };

  const renderBackButton = () => (
    <TouchableOpacity
      onPress={() => setActiveSection("Home")}
      style={styles.backButton}
    >
      <Icon name="arrow-back" size={30} color="#000000" />
      <Text style={styles.backButtonText}>Back to Home</Text>
    </TouchableOpacity>
  );

  const HomeSection = () => (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Bienvenue dans votre espace !</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            onPress={() => setActiveSection("Profile")}
            style={styles.button}
          >
            <Icon name="person" size={30} color="white" />
            <Text style={styles.buttonText}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActiveSection("Paramètres")}
            style={styles.button}
          >
            <Icon name="settings" size={30} color="white" />
            <Text style={styles.buttonText}>Paramètres</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.featuresContainer}>
        <PressableFeatureBox
          name="Statistiques"
          icon="stats-chart"
          onPress={() => setActiveSection("Statistiques")}
        />
        <PressableFeatureBox
          name="Notifications"
          icon="chatbox"
          onPress={() => setActiveSection("Notifications")}
        />
        <PressableFeatureBox
          name="Publications"
          icon="checkbox-outline"
          onPress={() => setActiveSection("Publications")}
        />
        <PressableFeatureBox
          name="Evénements"
          icon="calendar"
          onPress={() => setActiveSection("Evénements")}
        />
      </View>
    </View>
  );
  const ProfileSection = () => (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {renderBackButton()}
        <Text style={styles.headerTitle}>Profile</Text>
      </View>
      <View style={styles.contentContainer}>
        <Icon name="person" size={80} color="#3498db" />
        <Text style={styles.contentText}>Username: Maville24</Text>
        <Text style={styles.contentText}>Email: Maville24@nanterre.fr</Text>
      </View>
    </View>
  );

  const ParamètresSection = () => (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {renderBackButton()}
        <Text style={styles.headerTitle}>Paramètres</Text>
      </View>
      <View style={styles.contentContainer}>
        <Icon name="settings" size={80} color="#3498db" />
        <Text style={styles.contentText}>Notifications: Activé</Text>
        <Text style={styles.contentText}>Thème: Clair</Text>
      </View>
    </View>
  );

  
  const StatisticsSection = () => (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {renderBackButton()}
        <Text style={styles.headerTitle}>Statistiques</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>
          Statistiques contenu à ajouter ici!
        </Text>
      </View>
    </View>
  );

  const NotificationsSection = () => (
      <View style={styles.container}>
      <View style={styles.headerContainer}>
        {renderBackButton()}
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>
          Notifications contenu à ajouter ici!
        </Text>
      </View>
    </View>
  );
  
  const PostsSection = () => (
      <View style={styles.container}>
      <View style={styles.headerContainer}>
        {renderBackButton()}
        <Text style={styles.headerTitle}>Publications</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.contentTitle}>Mes dernières publications</Text>
        <PostsItem
          title="Inauguration Bibliothèque!"
          description="Le 6 Janvier, on a inauguré la nouvelle bibliothèque à .."
        />
        <PostsItem
          title="Construction d'un nouveau terrain de foot dans la ville"
          description="Terrain Foot."
        />
        <PostsItem
          title="Dernier jour d'inscription au club sportif de la ville!"
          description="Dernières places dans l'équipe des foot des jeunes entre 6 et 12 ans."
        />
      </View>
    </View>
  );
  
  const PostsItem = ({ title, description }) => (
      <View style={styles.PostsItem}>
      <Text style={styles.PostsTitle}>{title}</Text>
      <Text style={styles.PostsDescription}>{description}</Text>
    </View>
  );
  
  const EventSection = () => (
      <View style={styles.container}>
      <View style={styles.headerContainer}>
        {renderBackButton()}
        <Text style={styles.headerTitle}>Evénements à venir</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.contentTitle}>Evénements cette semaine</Text>
        <EventItem
          date="Lundi, Jan 10"
          time="15:00 - 17:00"
          title="Réunion mensuelle des habitants"
          location="Salle de conférence Hotel de ville"
        />
        <EventItem
          date="Jeudi, Jan 13"
          time="10:00  - 12:00"
          title="Présentation plan 2024"
          location="En ligne, Lien teams envoyé par mail"
        />
        <EventItem
          date="Samedi, Jan 15"
          time="10:00  - 18:00 "
          title="Festival Bords de seine"
          location="Parc chemin de l'ile"
        />
      </View>
    </View>
  );
  
  const EventItem = ({ date, time, title, location }) => (
    <View style={styles.eventItem}>
      <View style={styles.eventDateTime}>
        <Text style={styles.eventDate}>{date}</Text>
        <Text style={styles.eventTime}>{time}</Text>
      </View>
      <Text style={styles.eventTitle}>{title}</Text>
      <Text style={styles.eventLocation}>{location}</Text>
    </View>
  );
  const PressableFeatureBox = ({ name, icon, onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.featureBox}>
      <Icon name={icon} size={50} color="#3498db" />
      <Text style={styles.featureName}>{name}</Text>
    </TouchableOpacity>
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    headerContainer: {
      backgroundColor: "#3498db",
      padding: 20,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      elevation: 5,
      paddingTop: "20%",
    },
    headerTitle: {
      fontSize: 24,
      fontWeight: "bold",
      color: "white",
      marginBottom: 20,
    },
    buttonsContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    button: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "black",
      padding: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: "white",
      fontSize: 16,
      fontWeight: "bold",
      marginLeft: 10,
    },
    featuresContainer: {
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-around",
      marginTop: 20,
    },
    featureBox: {
      alignItems: "center",
      justifyContent: "center",
      width: "45%",
      aspectRatio: 1,
      backgroundColor: "white",
      borderRadius: 10,
      marginVertical: 10,
      elevation: 5,
    },
    featureName: {
      marginTop: 10,
      fontSize: 16,
      fontWeight: "bold",
      color: "#555",
    },
    backButton: {
      flexDirection: "row",
      alignItems: "center",
    },
    backButtonText: {
      color: "#3498db",
      fontSize: 16,
      marginLeft: 10,
    },
    contentContainer: {
      flex: 1,
      padding: 20,
    },
    contentText: {
      fontSize: 16,
      marginBottom: 10,
      color: "#555",
    },
    contentTitle: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#333",
      marginBottom: 10,
    },
    PostsItem: {
      backgroundColor: "#3498db",
      borderRadius: 10,
      padding: 15,
      marginVertical: 10,
    },
    PostsTitle: {
      color: "white",
      fontSize: 18,
      fontWeight: "bold",
    },
    PostsDescription: {
      color: "white",
      fontSize: 14,
      marginTop: 5,
    },
    eventItem: {
      backgroundColor: "white",
      borderRadius: 10,
      padding: 15,
      marginVertical: 10,
      elevation: 5,
    },
    eventDateTime: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 10,
    },
    eventDate: {
      color: "#3498db",
      fontSize: 16,
      fontWeight: "bold",
    },
    eventTime: {
      color: "#555",
      fontSize: 16,
    },
    eventTitle: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#333",
    },
    eventLocation: {
      fontSize: 14,
      color: "#777",
    },
  });

  return <View style={styles.container}>{renderSection()}</View>;
};

export default DashboardApp;
