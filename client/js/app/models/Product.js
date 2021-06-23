class Product {
  
  constructor(description, value, image){
    this._description = description;
    this._value = value;
    this._image = image;
    Object.freeze(this);
  }

  get description() {
    return this._description;
  }

  get value() {
    return this._value;
  }

  get image() {
    return this._image;
  }
}
