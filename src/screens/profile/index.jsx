import { useState } from "react";
import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { ImageSelector } from "./../../components/image-selector/index";
import ButtonCustom from "../../components/button-custom";
import { saveImageUri } from "./../../store/actions/profile-actions";

const Profile = ({ navigation }) => {
  const dispatch = useDispatch();

  const { imageUri: imageRedux } = useSelector((state) => state.profile);

  const [image, setImage] = useState(null);

  const handleSaveImage = () => {
    dispatch(saveImageUri(image));
    navigation.navigate("Menu");
  };

  const handleImage = (imageUri) => {
    setImage(imageUri);
  };

  console.log(imageRedux);
  return (
    <View>
      <ImageSelector onImage={handleImage} />
      <ButtonCustom title="Guardar Foto" onPressButton={handleSaveImage} />
    </View>
  );
};

export default Profile;
