var Vue = require("vue");
var VueRouter = require("vue-router");

Vue.use(VueRouter);

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
	routes: [
		{
			path: "/",
			components: {
				default: Foo,
				a: Bar,
				b: Baz
			}
		},
		{
			path: "/other",
			components: {
				default: Baz,
				a: Bar,
				b: Foo
			}
		}
	]
});

var app = new Vue({
	router,
	el: "#app"
});