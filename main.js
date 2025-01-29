// const app = Vue.createApp({
//     data(){
//         return {
//             products : ['Socks1','Socks2'],
//             firstName : 'Kristian Kharl',
//             lastName : 'Tare',
//             description : 'I love this product so much.'
//         }
//     }
// }).mount('#app');

// const app = Vue.createApp({
//     setup(){
//         return {
//             count : Vue.ref(0)
//         }
//     }
// }).mount('#app');

//rendering list

// const app = Vue.createApp({
//   data() {
//     return {
//       product: "Socks",
//       image: "./assets/images/socks_blue.jpg",
//       inStock: true,
//       details: ["50% cotton", "30% wool", "20% polyester"],
//       // solution
//       sizes: ["S", "M", "L", "XL"],
//       // solution
//       variants: [
//         { id: 2234, color: "green" },
//         { id: 2235, color: "blue" },
//       ],
//       sizes : ['34','35']
//     };
//   },
// });


// event listener
// const app = Vue.createApp({
//   data() {
//       return {
//           cart: 0,
//           product: 'Socks',
//           image: './assets/images/socks_blue.jpg',
//           inStock: true,
//           details: ['50% cotton', '30% wool', '20% polyester'],
//           variants: [
//             { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
//             { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
//           ]
//       }
//   },
//   methods: {
//       addToCart() {
//           this.cart += 1
//       },
//       // solution
//       removeFromCart() {
//           if (this.cart >= 1) {
//               this.cart -= 1
//           }
//       },
//       // solution
//       updateImage(variantImage) {
//           this.image = variantImage
//       }
//   }
// })


//class and styles
// const app = Vue.createApp({
//   data() {
//       return {
//           cart:0,
//           product: 'Socks',
//           brand: 'Vue Mastery',
//           image: './assets/images/socks_blue.jpg',
//           inStock: false,
//           details: ['50% cotton', '30% wool', '20% polyester'],
//           variants: [
//             { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
//             { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
//           ]
//       }
//   },
//   methods: {
//       addToCart() {
//           this.cart += 1
//       },
//       updateImage(variantImage) {
//           this.image = variantImage
//       }
//   }
// })


// computed properties
// const app = Vue.createApp({
//   data() {
//       return {
//           cart:0,
//           product: 'Socks',
//           brand: 'Vue Mastery',
//           selectedVariant: 0,
//           details: ['50% cotton', '30% wool', '20% polyester'],
//           variants: [
//             { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
//             { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
//           ],
//           // solution
//           onSale: true
//           // solution
//       }
//   },
//   methods: {
//       addToCart() {
//           this.cart += 1
//       },
//       updateVariant(index) {
//           this.selectedVariant = index
//       }
//   },
//   computed: {
//       title() {
//           return this.brand + ' ' + this.product
//       },
//       image() {
//           return this.variants[this.selectedVariant].image
//       },
//       inStock() {
//           return this.variants[this.selectedVariant].quantity
//       },
//       // solution
//       sale() {
//           if (this.onSale) {
//               return this.brand + ' ' + this.product + ' is on sale.'
//           }
//           return ''
//       }
//       // solution
//   }
// })



//components
const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            premium : false,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                    {
                        id: 2234,
                        color: "green",
                        image: "./assets/images/socks_green.jpg",
                        quantity: 50,
                    },
                    {
                        id: 2235,
                        color: "blue",
                        image: "./assets/images/socks_blue.jpg",
                        quantity: 0,
                    },
                ],
        }
    },
    methods: {
        updateCart(){
            this.cart += 1;
        }
    },
   
})
