var Vue = require("vue");
var VueRouter = require("vue-router");

Vue.use(VueRouter);

var Home = {
	template: "<div><h1>Home</h1><router-view></router-view></div>"
}

var Baz = {
	template: "<div>baz</div>"
}

var Foo = {
	template: "<div>foo</div>"
}

var Bar = {
	template: "<div>bar</div>"
}

var router = new VueRouter({
	mode: "history",
	base: __dirname,
	routes: [
		{
			path: "/home",
			component: Home,
			children: [
				{
					path: "foo",
					component: Foo,
					alias: "/foo"
				},
				{
					path: "bar",
					component: Bar,
					alias: "bar-alias"
				},
				{
					path:"baz",
					component: Baz,
					alias: ["/baz", 'baz-alias']
				}
			]	
		}
	]
});

var app = new Vue({
	router,
	template: "\
	<div id='app'>\
		<h1>Route Alias</h1>\
		<ul>\
			<li><router-link to='/foo'>\
				/foo (renders to /home/foo)\
			</router-link></li>\
			\
			<li><router-link to='/home/bar-alias'>\
				/home/bar-alias (renders to /home/bar)\
			</router-link></li>\
			\
			<li><router-link to='/baz'>\
				/baz (renders to /home/baz)\
			</router-link></li>\
			\
			<li><router-link to='/home/baz-alias'>\
				/home/baz-alias (renders to /home/baz)\
			</router-link></li>\
		</ul>\
		<router-view></router-view>\
	</div>\
	"
}).$mount("#app");