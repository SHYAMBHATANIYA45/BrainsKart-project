const product = {
  Products: [
    {
      id: 1,
      msg: "mens fir shirt",
      name: "shyam",
      image: "/src/assets/image1.jpg",
      items: "Women's casual",
      email: "shyam@gmail.com",
      price: "1520",
      rate: "1520",
      amount: "2000",
     orderDate: "23/12/2026"
    },
    {
      id: 2,
      msg: "mens fit shirt",
      name: "shyam",
      image: "/src/assets/image1.jpg",
      items: "men's casual",
      email: "shyam@gmail.com",
      price: "1520",
      rate: "1520",
      amount: "2000",
       orderDate: "23/12/2026"
    },
    {
      id: 3,
      msg: "mens fit shirt",
      name: "shyam",
      image: "./src/assets/image1.jpg",
      items: "men's casual",
      email: "shyam@gmail.com",
      price: "1520",
      rate: "1520",
      amount: "2000",
      orderDate: "23/12/2026"
    },
    {
      id: 4,
      msg: "mens fir shirt",
      name: "shyam",
      image: "./src/assets/image1.jpg",
      items: "men's casual",
      email: "shyam@gmail.com",
      price: "1520",
      rate: "1520",
      amount: "2000",
       orderDate: "23/12/2026"

    }
  ],

Womens: [  // Accessible as productData.kids in Kids component
    {
      id:1,
        msg: "Womens casual",
      image: "/src/assets/Womens2.jpg",
      price: " 980",
    
    },
    {
      id:2,
       msg: "Womens casual",
      image: "/src/assets/Womens1.jpg",
    price: " 980",
    
    }
    ,{
      id:3,
        msg: "Womens casual",
      image: "/src/assets/Womens2.jpg",
      price: " 980",
    
    },
    {
      
      msg: "Womens casual",
      image: "./src/assets/Womens1.jpg",
     price: " 980",
    
    }
  ],




  kids: [  
    {
      id:1,
        msg: "kids t-shirt",
      image: "/src/assets/kids2.jpg",
      price: " 980",
    
    },
    {
      id:2,
       msg: "kids t-shirt",
      image: "/src/assets/kids.png",
      price: " 980",
    
    }
    ,{
      id:3,
        msg: "kids t-shirt",
      image: "./src/assets/kids2.jpg",
      rate: " 980",
    
    },
    {
      id:4,
      msg: "kids t-shirt",
      image: "./src/assets/kids.png",
      rate: " 980",
    
    }
  ],

  Cart:[{
    image :"./src/assets/kids2.jpg",
    name:"shirt t-shirt",
    price :300,
  }]
};

export default product;
 