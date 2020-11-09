import Vue from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';

Vue.use(VueSweetalert2, {
  "confirmButtonColor": "#41b882",
  "cancelButtonColor": "#ff7674"
});
export default ({}, inject) => {
  inject('swal', Vue.swal)
}
