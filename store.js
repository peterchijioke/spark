// importing observables and decorate
import { decorate, observable, action } from "mobx";

class Store {
  // register observables
  userDetails = {
    fName: "",
    lName: "",
    email: "",
    password: "",
    phoneNumber: "",
    Cpassword: "",
    Uid: "",
  };
  // Login observables
  userLoginDetails = {
    loginPhoneNumber: "",
    loginPassword: "",
  };

  // register actions
  setFName = (data) => {
    this.userDetails.fName = data;
  };
  setLName = (data) => {
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
  setUid = (data) => {
    this.userDetails.Uid = data;
  };

  // login Actions
  setPassword = (data) => {
    this.userDetails.password = data;
  };
  setPhoneNumber = (data) => {
    this.userDetails.phoneNumber = data;
  };
}

// another way to decorate variables with observable

decorate(Store, {
  setFName: action,
  setLName: action,
  setPassword: action,
  setPhoneNumber: action,
  setEmail: action,
  setUid: action,
  userDetails: observable,
  userLoginDetails: observable,
});

// export class
export default new Store();
