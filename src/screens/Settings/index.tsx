import React, { useState } from "react";
import { View, Text, Switch, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"; // Correct import for CLI
import CustomHeaderText from "../../components/CustomHeaderText";
import styles from "./style";


const SettingsComponent = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <CustomHeaderText headerText={"Settings"}/>
      <View style={styles.line}/>
      <Text style={styles.sectionTitle}>Manage settings</Text>
      <View style={styles.settingItem}>
        <Ionicons name="notifications-outline" size={20} color="black" />
        <Text style={styles.settingText}>Notification</Text>
      </View>
      <View style={styles.settingItem}>
        <Ionicons name="location-outline" size={20} color="black" />
        <View>
          <Text style={styles.settingText}>Location</Text>
          <Text style={styles.subText}>Ahmedabad, India</Text>
        </View>
      </View>
      <View style={styles.line}/>
      {/* More Actions */}
      <Text style={styles.sectionTitle}>More actions</Text>
      <View style={styles.settingItem}>
        <Ionicons name="create-outline" size={20} color="black" />
        <View style={{ flex: 1 }}>
          <Text style={styles.settingText}>Use simple listing creation</Text>
          <Text style={styles.subText}>
            List items quickly and easily with fewer options shown during creation.
          </Text>
        </View>
        <View style={{right:12}}>
        <Switch
          trackColor={{ false: "#ccc", true: "#6D5BFA" }}
          thumbColor={isEnabled ? "white" : "#f4f3f4"}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        </View>
      </View>
      <View style={styles.settingItem}>
        <Ionicons name="chatbubble-outline" size={20} color="black" />
        <View>
          <Text style={styles.settingText}>Set a custom message</Text>
          <Text style={styles.subText}>
            Message that you currently send to sellers: ""
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SettingsComponent;
