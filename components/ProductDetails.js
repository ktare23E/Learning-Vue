app.component('product-details',{
    props : {
        details : {
            type : Array,
            required : true
        }
    },
    template : `
        <ul v-if="isArray">
            <li v-for="detail in details">{{ detail }}</li>
        </ul>
        <p v-else>No details</p>
    `,
    computed: {
        isArray(){
            return Array.isArray(this.details)
        }
    }
});