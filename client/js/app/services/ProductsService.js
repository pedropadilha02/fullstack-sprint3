class ProductsService {
  constructor() {
    this._http = new HttpService();
    
  }

  allProducts() {
    return this._http
      .get('/api/products')
      .then(produtos => {
        console.log(produtos);
        return produtos.map(objeto => new Product(objeto.description, objeto.value, objeto.image));
      })
      .catch(erro => {
        console.log(erro);
        throw new Error('Não foi possível obter as negociações da semana');
      });  
  }
}