// importing observables and decorate
import { decorate, observable, action } from "mobx";

class Store {
  text = '';
  updateText = (text) => {};

  data = null;
  searchImages = () => {};

  setData = (data) => {};

  // array to save favourite images
  favorites = [];

  // action to add images to favorites
  addToFavorite = (image) => {
    this.favorites.push(image);
    this.data = null;
    this.text = '';
  };
}

// another way to decorate variables with observable
decorate(Store, {
  decorate(Store, {
    text: observable,
    updateText: action,
    data: observable,
    searchImage: action,
    setData: action,
    //adding decorators
    favorites: observable,
    addToFavorite: action,
  });
});

// export class
export default new Store();
