const productsContainer = document.querySelector(".product-conteiner");

//cada curso
const createProductTemplate = (product) =>{
    const { id,name,bid,user, userImg, cardImg } = product;
return ` 
<div class="product">
    <img src=${cardImg} alt=${name} />
    <div class="product-info">
        <div class="product-top">
            <h3>${name}</h3>
        </div>
        <div class="product-mid">
            <div class="product-user">
                <p>Creado por:  </p>
                <p>@${user}</p>
                <img src=${userImg} alt="user" class="imgUser" />
            </div>
            <span>Precio: USD ${bid} </span>
        </div>
        <div class="product-bot">
            <div class="product-offer">
                <div class="offer-time">
                    <img src="./assets/img/fire.png" alt="" />
                    <p></p>
                </div>
                <button class="btn-add"
                data-id='${id}'
                data-name='${name}'
                data-bid='${bid}'
                data-img='${cardImg}'>Add</button>
            </div>
        </div>
    </div>
</div>`
};

//replicar la cantidad necesaria
const renderProductos = (productList) =>{
    productsContainer.innerHTML += productList.map(createProductTemplate).join("");

};


const init = () => {
    renderProductos (productsData);
};

init();