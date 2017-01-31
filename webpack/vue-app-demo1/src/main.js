var Vue = require("vue");
var VueRouter = require("vue-router");

Vue.use(VueRouter);

var Home = {
	template: "<div><h2>Home</h2><p>hello</p></div>"
}

var Parent = {
	data: function() {
		return {
			transitionName: "slide-left"
		}
	},
	watch: {
		"$route": function(to, from) {
			var toDepth = to.path.split("/").length
			var fromDepth = from.path.split("/").length
			this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
		}
	},
	template: "\
	<div>\
		<h2>Parent</h2>\
		<transition :name='transitionName'>\
			<router-view></router-view>\
		</transition>\
	</div>\
	"
}

var Default = {
	template: "<div>default</div>"
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
			path: "/",
			component: Home	
		},
		{
			path: "/parent",
			component: Parent,
			children: [
				{
					path: "",
					component:Default
				},
				{
					path:"foo",
					component: Foo
				},
				{
					path: "bar",
					component: Bar
				}
			]
		}
	]
});

var app = new Vue({
	router,
	template: "\
	<div id='app'>\
		<h1>Transition</h1>\
		<ul>\
			<li><router-link to='/'>\
				/\
			</router-link></li>\
			\
			<li><router-link to='/parent'>\
				/parent\
			</router-link></li>\
			\
			<li><router-link to='/parent/foo'>\
				/parent/foo\
			</router-link></li>\
			\
			<li><router-link to='/parent/bar'>\
				/parent/bar\
			</router-link></li>\
		</ul>\
		<transition name='fade' mode='out-in'>\
			<router-view></router-view>\
		</transition>\
	</div>\
	"
}).$mount("#app");