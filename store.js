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
    loginEmail: "",
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
  setLoginPassword = (data) => {
    this.userLoginDetails.loginPassword = data;
  };
  setLoginEmail = (data) => {
    this.userLoginDetails.loginEmail = data;
  };
}

// another way to decorate variables with observable

decorate(Store, {
  setFName: action,
  setLName: action,
  setPassword: action,
  setPhoneNumber: action,
  setEmail: action,
  // login
  setLoginPassword: action,
  setLoginEmail: action,
  // login end
  setUid: action,
  userDetails: observable,
  userLoginDetails: observable,
});

// export class
export default new Store();
