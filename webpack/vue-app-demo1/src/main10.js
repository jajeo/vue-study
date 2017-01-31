var Vue = require("vue");
var VueRouter = require("vue-router");

Vue.use(VueRouter);

var Home = {
	template: "<div>This is Home</div>"
}

var Foo = {
	template: "<div>This is Foo</div>"
}

var Bar = {
	template: "<div>This is Bar  {{ $route.params.id }} </div>"
}

var router = new VueRouter({
	mode: "history",
	base: __dirname,
	routes: [
		{
			path: "/",
			name: "home",
			component: Home
		},
		{
			path: "/foo",
			name: "foo",
			component: Foo
		},
		{
			path: "/bar/:id",
			name: "bar",
			component: Bar
		}
	
	]
});

var app = new Vue({
	router,
	template: "\
	<div id=\"app\">\
		<h1>Named Routes</h1>\
		<p>Current route name: {{$route.name}}</p>\
		<ul>\
			<li><router-link :to=\"{name:'home'}\">home</router-link></li>\
			<li><router-link :to=\"{name:'foo'}\">foo</router-link></li>\
			<li><router-link :to=\"{name:'bar', params: {id:123} }\">bar</router-link></li>\
		</ul>\
		<router-view></router-view>\
	</div>\
	"
}).$mount("#app");