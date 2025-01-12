
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

const app = Vue.createApp({
    setup(){
        return {
            count : Vue.ref(0)
        }
    }
}).mount('#app');

