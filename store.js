// importing observables and decorate
import { decorate, observable, action } from "mobx";

class Store {
  text = "";
  updateText = (text) => {};

  data = null;
  userDetails = {
    fName: "",
    lName: "",
    email: "",
    password: "",
    phoneNumber: "",
    Cpassword: "",
  };

  searchImages = () => {};

  setData = (data) => {};
  setFName = (data) => {
    this.userDetails.fName = data;
  };
  setlName = (data) => {
    this.userDetails.lName = data;
  };
  setPassword = (data) => {
    this.userDetails.password = data;
  };
  setPhoneNumber = (data) => {
    this.userDetails.phoneNumber = data;
  };
  setEmail = (data) => {
    this.userDetails.email = data;
  };

  // array to save favourite images

  // action to add images to favorites
  addToFavorite = (image) => {
    this.favorites.push(image);
  };
}

// another way to decorate variables with observable

decorate(Store, {
  setFName: action,
  setlName: action,
  setPassword: action,
  setPhoneNumber: action,
  setEmail: action,
  text: observable,
  updateText: action,
  data: observable,
  searchImage: action,
  setData: action,
  //adding decorators
  userDetails: observable,
  addToFavorite: action,
  addToFavorite: action,
});

// export class
export default new Store();
