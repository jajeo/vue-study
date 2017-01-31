var Vue = require("vue");
var VueRouter = require("vue-router");

Vue.use(VueRouter);

var Home = {
	template: "<router-view></router-view>"
}

var Default = {
	template: "<div>default</div>"
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

var WithParams = {
	template: "<div> {{$route.params.id}} </div>"
}

var router = new VueRouter({
	mode: "history",
	base: __dirname,
	routes: [
		{
			path: "/",
			component: Home,
			children: [
				{
					path: "",
					component: Default
				},
				{
					path: "foo",
					component: Foo
				},
				{
					path: "bar",
					component: Bar
				},
				{
					path:"baz",
					name: "baz",
					component: Baz
				},
				{
					path: "with-params/:id",
					component: WithParams
				},
				//相对定位
				{
					path: "relative-redirect",
					redirect: 'foo'
				}
			]
		},
		//绝对定位
		{
			path: "/absolute-redirect",
			redirect: "/bar"
		},
		{
			path: "/dynamic-redirect/:id?",
			redirect: function(to) {
				if(to.query.to === "foo") {
					return {
						path:"/foo",
						query: null
					};
				} 
				if(to.hash === "#baz") {
					return {name: "baz", hash: ""}
				}
				if(to.params.id) {
					return "/with-params/:id"
				} else {
					return "/bar"
				}
			}
		},
		{
			path: "/named-redirect",
			redirect: {name: "baz"}
		},
		{
			path:"/redirect-with-params/:id",
			redirect: "/with-params/:id"
		},
		{
			path: "*",
			redirect: "/"
		}
	]
});

var app = new Vue({
	router,
	template: "\
	<div id='app'>\
		<h1>Redirect</h1>\
		<ul>\
			<li><router-link to='/relative-redirect'>\
				/relative-redirect (redirects to /foo)\
			</router-link></li>\
			\
			<li><router-link to='/relative-redirect?foo=bar'>\
				/relative-redirect (redirects to /foo?foo=bar)\
			</router-link></li>\
			\
			<li><router-link to='/absolute-redirect'>\
				/absolute-redirect (redirects to /bar)\
			</router-link></li>\
			\
			<li><router-link to='/dynamic-redirect'>\
				/dynamic-redirect (redirects to /bar)\
			</router-link></li>\
			\
			<li><router-link to='/dynamic-redirect/123'>\
				/dynamic-redirect (redirects to /with-params/123)\
			</router-link></li>\
			\
			<li><router-link to='/dynamic-redirect#baz'>\
				/dynamic-redirect (redirects to /baz)\
			</router-link></li>\
			\
			<li><router-link to='/named-redirect'>\
				/named-redirect (redirects to /baz)\
			</router-link></li>\
			\
			<li><router-link to='/redirect-with-params/123'>\
				/named-redirect (redirects to /with-params/123)\
			</router-link></li>\
			\
			<li><router-link to='/not-found'>\
				/not-found (redirects to /)\
			</router-link></li>\
		</ul>\
		<router-view></router-view>\
	</div>\
	"
}).$mount("#app");