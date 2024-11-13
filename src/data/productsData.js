const products = [{
  productID: "C1",
  alcoholic: true,
  productInfo: "Lorem ipsum dolor sit amet",
  productImg: "../img/5.png"
}
  ,
{
  productID: "C2",
  alcoholic: true,
  productInfo: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
  productImg: "../img/7.png"
}
  ,
{
  productID: "C3",
  alcoholic: false,
  productInfo: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
  productImg: "../img/8.png"
}
  ,
{
  productID: "C4",
  alcoholic: true,
  productInfo: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
  productImg: "../img/9.png"
},
{
  productID: "C5",
  alcoholic: false,
  productInfo: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
  productImg: "../img/7.png"
},
{
  productID: "C6",
  alcoholic: true,
  productInfo: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
  productImg: "../img/8.png"
},
{
  productID: "C7",
  alcoholic: true,
  productInfo: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
  productImg: "../img/image1.png"
},
{
  productID: "C8",
  alcoholic: true,
  productInfo: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
  productImg: "../img/orangecocktails.png"
},
{
  productID: "C9",
  alcoholic: true,
  productInfo: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
  productImg: "../img/orangecocktails.png"
}
];

export function getProductBySlug(slug) {
  return products.filter(product => product.productID === slug);
}

export default products; 