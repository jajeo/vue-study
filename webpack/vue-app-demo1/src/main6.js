var Vue = require("vue");
var VueRouter = require("vue-router");
require("./style.css")

Vue.use(VueRouter);

var User = {
	template: "<div>User {{ $route.params.id }}</div>",
	watch: {
		'$route': function(to, from){
			alert(from);
		}
	}
}

var router = new VueRouter({
	routes: [
		{
			path: "/user/:id",
			component: User
		}
	]
})

var app = new Vue({
	router
}).$mount("#app")