var Vue = require("vue");
var VueRouter = require("vue-router");

Vue.use(VueRouter);

var router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: [
		{
			path: "/"
		},
		{
			path: "/params/:foo/:bar"
		},
		{
			path: "/optional-params/:foo?"
		},
		{
			path: "/params-with-regex/:id(\\d+)"
		},
		{
			path:"/asterisk/*"
		},
		{
			path: "/optional-group/(foo/)?bar"
		}
	]
});

new Vue({
	router,
	template: "\
	<div id='app'>\
		<h1>Route Matching</h1>\
		<ul>\
			<li><router-link to='/'>/</router-link></li>\
			<li><router-link to='/params/foo/bar'>/params/foo/bar</router-link></li>\
			<li><router-link to='/optional-params'>/optional-params</router-link></li>\
			<li><router-link to='/optional-params/foo'>/optional-params/foo</router-link></li>\
			<li><router-link to='/params-with-regex/abc'>/params-with-regex/abc</router-link></li>\
			<li><router-link to='/params-with-regex/123'>/params-with-regex/123</router-link></li>\
			<li><router-link to='/asterisk/foo'>/asterisk/foo</router-link></li>\
			<li><router-link to='/asterisk/bar'>/asterisk/bar</router-link></li>\
			<li><router-link to='/asterisk/foo/bar'>/asterisk/foo/bar</router-link></li>\
			<li><router-link to='/optional-group/bar'>/optional-group/bar</router-link></li>\
			<li><router-link to='/optional-group/foo/bar'>/optional-group/foo/bar</router-link></li>\
		</ul>\
		<p>Route context</p>\
		<pre> {{ JSON.stringify($route, null, 2) }} </pre>\
	</div>\
	"
}).$mount("#app");