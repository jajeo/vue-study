var Vue = require("vue");
var VueRouter = require("vue-router");

Vue.use(VueRouter);

var User = {
	template: "\
	<div>\
		<h2>User {{$route.params.id}}</h2>\
		<router-view></router-view>\
	</div>\
	"
};

var UserHome = {
	template: "<div>Home</div>"
}

var UserProfile = {
	template: "<div>Profile</div>"
}

var UserPosts = {
	template: "<div>Posts</div>"
}

var router = new VueRouter({
	routes: [
		{
			path: "/user/:id", 
			component: User,
			children: [
				{
					path: 'profile',
					component: UserProfile
				},
				{
					path: "posts",
					component: UserPosts
				},
				{
					path: "",
					component: UserHome
				}
			]
		}
	]
});

var app = new Vue({
	router
}).$mount("#app");