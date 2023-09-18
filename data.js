const productsData = [
    {
      id: 1,
      name: "Curso Foto nivel 1",
      bid: 15.8,
      user: "Diego",
      category: "foto",
      userImg: "./img/Diego.jpg",
      cardImg: "./img/products/foto1.png",
    },
    {
      id: 2,
      name: "video nivel 1",
      bid: 18.9,
      user: "Diego",
      category: "video",
      userImg: "./img/Diego.jpg",
      cardImg: "./img/products/video1.png",
    },
    {
      id: 3,
      name: "video nivel 2",
      bid: 19.9,
      user: "Diego",
      category: "video",
      userImg: "./img/Diego.jpg",
      cardImg: "./img/products/video2.png",
    },
    {
      id: 4,
      name: "video nivel 3",
      bid: 19.9,
      user: "Diego",
      category: "video",
      userImg: "./img/Diego.jpg",
      cardImg: "./img/products/video3.png",
    },
    {
      id: 5,
      name: "Curso Foto nivel 2",
      bid: 19.52,
      user: "Diego",
      category: "foto",
      userImg: "./img/Diego.jpg",
      cardImg: "./img/products/foto2.png",
    },
    {
      id: 6,
      name: "Curso Foto nivel 3",
      bid: 19.33,
      user: "Diego",
      category: "fotos",
      userImg: "./img/Diego.jpg",
      cardImg: "./img/products/foto3.png",
    },
    {
      id: 7,
      name: "Curso photoshop",
      bid: 19.20,
      user: "Diego",
      category: "Programas",
      userImg: "./img/Diego.jpg",
      cardImg: "./img/products/photoshop.jpg",
    },
    {
      id: 8,
      name: "Curso Premiere",
      bid: 19.12,
      user: "Diego",
      category: "Programas",
      userImg: "./img/Diego.jpg",
      cardImg: "./img/products/premiere.jpg",
    },
    {
      id: 9,
      name: "Curso lightroom",
      bid: 19.55,
      user: "Diego",
      category: "Programas",
      userImg: "./img/Diego.jpg",
      cardImg: "./img/products/lightroom.jpg",
    },
    {
      id: 10,
      name: "Direccion  de cine",
      bid: 25.35,
      user: "Diego",
      category: "Video",
      userImg: "./img/Diego.jpg",
      cardImg: "./img/products/direccion.jpg",
    }
  ];
  
  //función para dividir los productos en arrays de "size" productos
  const divideProductsInParts = (size) => {
    let productsList = [];
    for (let i = 0; i < productsData.length; i += size)
      productsList.push(productsData.slice(i, i + size))
    return productsList;
  };
  
  //el concepto de ESTADO
  const appState = {
    products: divideProductsInParts(6), 
    currentProductsIndex: 0, 
    productsLimit: divideProductsInParts(6).length,
    activeFilter: null
  };