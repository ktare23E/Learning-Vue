app.component('product-display', {
    props: {
      premium: {
        type: Boolean,
        required: true
      }
    },
    template: 
    /*html*/
    `<div class="product-display">
      <div class="product-container">
        <div class="product-image">
          <img v-bind:src="image">
        </div>
        <div class="product-info">
          <h1>{{ title }}</h1>
  
          <p v-if="inStock">In Stock</p>
          <p v-else>Out of Stock</p>
  
          <p>Shipping: {{ shipping }}</p>
  
          <ul>
            <li v-for="detail in details">{{ detail }}</li>
          </ul>
  
          <div 
            v-for="(variant, index) in variants" 
            :key="variant.id" 
            @mouseover="updateVariant(index)" 
            class="color-circle" 
            :style="{ backgroundColor: variant.color }">
          </div>
          
          <div class="flex items-center">
              <button 
              class="button" 
              :class="{ disabledButton: !inStock }" 
              :disabled="!inStock" 
              v-on:click="addToCart">
              Add to Cart
            </button>
  
            <button 
            class="text-xs bg-red-500 p-5 text-white rounded-sm cursor-pointer" 
            :class="{ disabledButton: !inStock }" 
            :disabled="!inStock" 
            v-on:click="removeFromCart">
            Remove from cart
          </button>
          </div>
  
  
        </div>
      </div>
    </div>`,
    data() {
      return {
          product: 'Socks',
          brand: 'Vue Mastery',
          selectedVariant: 0,
          details: ['50% cotton', '30% wool', '20% polyester'],
          variants: [
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 100 },
          ]
      }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart',this.variants[this.selectedVariant].id)
        },
        updateVariant(index) {
            this.selectedVariant = index
        },
        removeFromCart(){
          this.$emit('remove-from-cart',this.variants[this.selectedVariant].id)
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        shipping() {
          if (this.premium) {
            return 'Free'
          }
          return 2.99
        }
    }
  })