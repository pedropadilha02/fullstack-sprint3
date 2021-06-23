class View {
  constructor(element) {
    this._element = element;
  }

  template() {
    throw new Error('O método "template" deve ser implementado');
  }

  update(data) {
    this._element.innerHTML = this.template(data);
  }
}
