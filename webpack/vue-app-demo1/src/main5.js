var Vue = require("vue");
var VueRouter = require("vue-router");
require("./style.css")

Vue.use(VueRouter);

var Foo = {
	template: "\
	<div>foo</div>\
	"
};

var Bar = {
	template: "\
	<div>bar</div>\
	"
};

var routes = [
	{path: "/foo", component: Foo},
	{path: "/bar", component: Bar}
];

var router = new VueRouter({routes: routes});

var app = new Vue({
	router
}).$mount("#app");
