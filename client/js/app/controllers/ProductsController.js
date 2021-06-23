class ProductsController {
  constructor() {
    let $ = document.querySelector.bind(document);


    this._inputDescription = $('#nome');
    this._inputValue = $('#preco');
    this._inputImage = $('#imagem');
         
    this._listaProdutos = new Bind(
        new ProductsList(), 
        new ProductsView($('#productsView')), 
        'adiciona');

    this._alert = new Bind(
      new Alert(),
      new AlertView($('#alertView')),
      'message');

    this.allProducts();
  }

  allProducts() {
    
    let service = new ProductsService();
    
    service
        .allProducts()
        .then(produtos => produtos.forEach(produto => {
            this._listaProdutos.adiciona(produto);
            this._alert.message = 'Produtos carregados'  
            
        })).catch(erro => console.log('azedou'));
        setTimeout(()=> this._alert.message ='', 2000);
    // TODO: implementar

    // this._alert.message = 'ProductsController ainda não foi implementado.';
  }
}
