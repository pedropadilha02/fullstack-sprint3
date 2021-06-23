let filterField = document.querySelector("#searchbar"); 

filterField.addEventListener("input", function(){
    console.log(this.value);
    let filterProducts = document.querySelectorAll(".products__card");
    
    if(this.value.length > 0){
        for(let i = 0; i < filterProducts.length; i++){
            let product = filterProducts[i];
            let productDescription = product.querySelector(".card__description")
            let productName = productDescription.textContent;
            let expression = new RegExp(this.value, "i");
            if(!expression.test(productName)){
                product.classList.add("invisible");
            }else{
                product.classList.remove("invisible");
            }
        }
    }else{
        for (let i = 0; i < filterProducts.length; i++) {
            let product = filterProducts[i];
            product.classList.remove("invisible");

        }
    }
    
});