var app = new Vue({
el: '#app',
data: {
  product:'Ténis Adidas',
  image:'./img/black-shoes.jpg',
  inStock:true,
  details:['80% Algodão', 'Piso ortopédico', 'Apto para caminhadas'],
  variants:[
    {
      variantId:01,
      variantColor: 'black',
      variantImage: './img/black-shoes.jpg'
    },
    {
      variantId:02,
      variantColor: 'blue',
      variantImage: './img/blue-shoes.jpg'
    }
  ],
  cart: 0,
  alert:'',
  showAlert: false
},
methods:{
  addToCart(){
    this.cart += 1
  },
  removeFromCart(){
    this.cart -= 1
  },
  updateProduct(variantImage){
    this.image = variantImage
  }
}
})
