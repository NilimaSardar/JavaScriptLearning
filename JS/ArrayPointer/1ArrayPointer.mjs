let product = [
    {
      name: "laptop",
      price: 100000,
      quantity: 10,
      category: "Electronics",
    },
    {
      name: "mobile",
      price: 20000,
      quantity: 20,
      category: "Electronics",
    },
    {
      name: "harry porter",
      price: 500,
      quantity: 20,
      category: "Book",
    },
  ];


//   let electronicProduct = product.filter((item,i)=>{
//     return item.category ==="Electronics"
//   })

//   console.log(electronicProduct);

//   let priceLessThan1000 = product.filter((item,i)=>{
//     return item.price <= 1000
//   })

//   console.log(priceLessThan1000);

  let filterEl = product.filter((item,i)=>{
    return item.category === "Electronics"
  });

const finalOutput = filterEl.map((item, i)=>{
    return item.name
})

console.log(finalOutput);

  







  /* Map */


//   let highestPrice = product.map((item,i)=>{
//     let totalPrice = item.price * item.quantity;

//     return `the totalprice of ${item.name} is ${totalPrice}`
// })
// console.log(highestPrice);


// let proCombine = product.map((item,i)=>{
//     return {name: item.name,price: item.price}
// })
// console.log(proCombine);


//   let pronames = product.map((item, i)=>{
//     return item.name;
//   })

//   console.log(pronames);

//   let proPrices = product.map((item, i)=>{
//     return item.price;
//   })

//   console.log(proPrices);

//   let proCategory = product.map((item, i)=>{
//     return item.category;
//   })

//   console.log(proCategory);


// let proDetail = product.map((item,i)=>{
//     return  `${item.name} cost NRs. ${item.price} and its category is ${item.category}`
// })
// console.log(proDetail);
  