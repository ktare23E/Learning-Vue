app.component("product-display", {
    props: {
      premium: {
        type: Boolean,
        required: true,
      },
      details: {
        type: Array,
        required: true,
      },
      variants: {
        type: Array,
        required: true,
        validator(value) {
          return Array.isArray(value) && value.every(item => typeof item === "object" && item !== null);
        }
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
  
          <product-details :details="details"></product-details>
          <product-variants :variants="variants" @variant-selected="updateVariant"></product-variants>
          
          <button class="button" :class="{ disabledButton: !inStock }" :disabled="!inStock" v-on:click="addToCart">Add to Cart</button>
        </div>
      </div>
    </div>`,
    data() {
      return {
        product: "Socks",
        brand: "Vue Mastery",
        selectedVariant: 0,
      };
    },
    methods: {
    addToCart() {
            this.$emit("add-to-cart"); // ✅ Emit event to parent
    },
      updateVariant(index) {
        this.selectedVariant = index;
      },
    },
    computed: {
      title() {
        return this.brand + " " + this.product;
      },
      image() {
        return this.variants[this.selectedVariant]?.image;
      },
      inStock() {
        return this.variants[this.selectedVariant]?.quantity > 0;
      },
      shipping() {
        return this.premium ? "Free" : "2.99";
      },
    },
  });
  