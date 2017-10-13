import Vue from 'vue'
import App from './App'

/* eslint-disable no-new */
Vue.filter('age',time=> {
	time*=1000;
	var now = new Date().getFullYear();
    var newDate = new Date(time).getFullYear();
    return now-newDate;
});
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
