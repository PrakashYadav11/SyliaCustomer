import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {style} from './Styles';
import {NavigationRoutes} from '../../shared/NavigationRoutes';
import Icon from 'react-native-vector-icons/AntDesign';
import {Strings} from '../../shared/strings';
import {Images} from '../../assets/Images';
import ProfileOption from '../../components/CustomProfileOption/ProfileOption';

const MyProfile = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={style.container}>
      <View style={style.header}>
        <TouchableOpacity
          onPress={() => navigation.navigate(NavigationRoutes.HomeStake)}>
          <Icon name="arrowleft" size={30} color="black" />
        </TouchableOpacity>
        <Text style={style.headerTxt}>{Strings.Profile}</Text>
      </View>
      <View style={style.profileBx}>
        <View style={{flexDirection: 'row'}}>
          <Image source={Images.profile} style={style.ProfileStl} />
          <View>
            <Text style={style.profileName}>Christopher Parker</Text>
            <Text style={style.number}>+91 4653031956</Text>
            <TouchableOpacity style={style.edit}>
              <Text style={style.editTxt}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={{marginTop:20}}>
      <ProfileOption icon={Images.WishList} tect={Strings.Wishlist} onPress={()=>navigation.navigate(NavigationRoutes.wishlist)}/>
      <ProfileOption icon={Images.History} tect={Strings.Invoice_History} onPress={undefined}/>
      <ProfileOption icon={Images.order} tect={Strings.My_Orders} onPress={()=>navigation.navigate(NavigationRoutes.myorders)}/>
      <ProfileOption icon={Images.setting} tect={Strings.Settings} onPress={()=>navigation.navigate(NavigationRoutes.settings)}/>
      <ProfileOption icon={Images.feedback} tect={Strings.Feedback} onPress={undefined}/>
      <ProfileOption
        icon={Images.LogOut}
        tect={Strings.Log_Out}
        onPress={() => setModalVisible(true)}
      />
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={style.modalContainer}>
          <View style={style.modalContent}>
            <Text style={style.modalText}>
              Are you sure you want to log out?
            </Text>
            <View style={style.buttonContainer}>
              <TouchableOpacity
                style={style.buttonNo}
                onPress={() => setModalVisible(false)}>
                <Text style={style.buttonText}>No</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={style.buttonYes}
                onPress={() => {
                  setModalVisible(false);
                  navigation.navigate(NavigationRoutes.login);
                }}>
                <Text style={style.buttonText}>Yes, Log Out</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default MyProfile;
