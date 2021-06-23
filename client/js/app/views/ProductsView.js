class ProductsView extends View {
  constructor(element) {
    super(element);
  }



  template(data) {
    
    return `
    <div class="products__row">
      <ol class="products__list">
    ${data.produtos.map(n => `
    
              <li class="products__card">
                <div class="card">
                  <img
                    class="card__img"
                    src="${n.image}"
                    alt="Jaqueta Puffer Juvenil Com Capuz Super Mario Branco Tam 10 a 18"
                  />
                  <p class="card__description">
                    ${n.description}
                  </p>
                  <p class="card__price">R$ ${n.value}</p>
                </div>
              </li>
              
              `).join('')}    
              </ol>
            </div>
    `;

    
  }
}
