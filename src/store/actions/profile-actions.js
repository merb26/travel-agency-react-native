import { profileTypes } from "../types";

export const saveImageUri = (imageUri) => ({
  type: profileTypes.ADD_IMAGE,
  imageUri,
});
