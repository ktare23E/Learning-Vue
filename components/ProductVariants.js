app.component('product-variants', {
    props: {
        variants: {
            type: Array,
            required: true,
            validator(value) {
                return Array.isArray(value) && value.every(item => typeof item === 'object' && item !== null);
            }
        }
    },
    template: `
        <div 
            v-for="(variant, index) in variants" 
            :key="variant.id" 
            @mouseover="$emit('variant-selected', index)" 
            class="color-circle" 
            :style="{ backgroundColor: variant.color }">
        </div>
    `
});
