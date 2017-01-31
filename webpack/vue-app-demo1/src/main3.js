var Vue = require("vue");

Vue.component("my-component", {
	template:"\
	<div>\
		<h2>我是子组件的标题</h2>\
		<slot>\
			只有在没有要分发的内容时才会显示。\
		</slot>\
	</div>\
	"
});

Vue.component("parent-component", {
	template: "\
	<div>\
		<h1>我是父组件的标题</h1>\
		<my-component>\
			<p>这是一些初始内容</p>\
			<p>这是更多的初始内容</p>\
		</my-component>\
	</div>\
	"
});

Vue.component("app-layout", {
	template: "\
	<div>\
		<header>\
			<slot name='header1'></slot>\
		</header>\
		<main>\
			<slot></slot>\
		</main>\
		<footer>\
			<slot name='footer1'></slot>\
		</footer>\
	</div>\
	"
});

Vue.component("app", {
	template: "\
	<app-layout>\
		<h1 slot='header1'>这里可能是一个页面的标题</h1>\
		<p>主要内容的一个段落。</p>\
		<p>另一个主要内容的段落</p>\
		<p slot='footer1'>这里有一些联系信息</p>\
	</app-layout>\
	"
})

Vue.component("slot-scope-child", {
	template: "\
	<div>\
		<slot text='hello from child'></slot>\
	</div>\
	"
});

Vue.component("slot-scope-parent", {
	template: "\
	<div>\
		<slot-scope-child>\
			<template scope='props'>\
				<span>Hello from parent</span>\
				<span>{{ props.text }}</span>\
			</template>\
		</slot-scope-child>\
	</div>\
	"
});


Vue.component("my-awesome-list-parent", {
	template: "\
	<my-awesome-list>\
		<template slot='item' scope='props'>\
			<li> {{ props.text }}</li>\
		</template>\
	</my-awesome-list>\
	"
});

Vue.component("anchored-heading", {
			template: "\
			<div>\
				<h1 v-if='level === 1'>\
					<slot></slot>\
				</h1>\
				<h2 v-if='level === 2'>\
					<slot></slot>\
				</h2>\
				<h3 v-if='level === 3'>\
					<slot></slot>\
				</h3>\
				<h4 v-if='level === 4'>\
					<slot></slot>\
				</h4>\
				<h5 v-if='level === 5'>\
					<slot></slot>\
				</h5>\
				<h6 v-if='level === 6'>\
					<slot></slot>\
				</h6>\
			",
			props: {
				"level": {
					type: Number,
					require: true
				}
			}
		})


Vue.component("anchored-heading2", {
	render: function(createElement) {
		return createElement(
			'h' + this.level,
			this.$slots.default)
	},
	props: {
		level: {
			type: Number,
			require: true
		}
	}
})

Vue.component("my-list", {
	render: function(createElement) {
		if (this.items.length) {
			return createElement('ul', this.items.map(function(item){
				return createElement('li', item.name)
			}));
		} else {
			return createElement("p", 'No items found');
		}
		
	},
	props: {
		items: {
			type: Array,
			require: true,
			default: []
		}
	}
})

Vue.component("my-awesome-list", {
	template: "\
	<ul>\
		<slot name='item'\
			v-for='item in items'\
			:text='item.text'>\
		</slot>\
	</ul>\
	",
	data: function(){
			return {
				items: [
				{
					text: "what"
				},
				{
					text: "are"
				},
				{
					text:"you"
				},
				{
					text: "talking"
				},
				{
					text: "ab"
				}
			]
		};
	}

});

var demo5 = new Vue({
	el: "#demo5",
	data: {
		currentView: 'posts'
	},
	components: {
		home: {
			template: "<div>Home Page</div>"
		},
		posts: {
			template: "<div>Posts Page</div>"
		},
		archive: {
			template: "<div>Archive Page</div>"
		}
	}
});

var demo1 = new Vue({
	el: "#demo1"
});

var demo2 = new Vue({
	el: "#demo2"
});

var demo3 = new Vue({
	el: "#demo3"
})

var demo4 = new Vue({
	el: "#demo4"
})


var demo7 = new Vue({
	el: "#demo7"
})

var demo6 = new Vue({
	el: "#demo6",
	data: {
		sometext: "Hello123"
	},
	components: {
		"anchored-heading-parent": {
			template:"\
			<anchored-heading :level='1'>\
				<a href='#'> {{ text }} </a>\
			</anchored-heading>\
			",
			props: {
				"text": {
					type: String,
					default: "Hello world!"
				}
			}
		}
	}
})

var getChildrenTextContent = function(children) {
	return children.map(function(node) {
		return node.children ? getChildrenTextContent(node.children) : node.text;
	}).join("");
}

Vue.component("anchored-heading1", {
	render: function(createElement) {
		var headingId = getChildrenTextContent(this.$slots.default)
			.toLowerCase()
			.replace(/\W+/g, "-")
			.replace(/(^\-|-$)/g, "");

		return createElement(
			"h" + this.level, 
			[
				createElement("a", {
					attrs: {
						name: headingId,
						href: "#" + headingId
					}
				},
				this.$slots.default)
			]
		);
	},
	props: {
		level: {
			type: Number,
			require: true
		}
	}
});

var demo8 = new Vue({
	el: "#demo8"
})


var demo9 = new Vue({
	el: "#demo9",
	data: {
		items: [
			{
				name: "what"
			},
			{
				name: "are"
			},
			{
				name: "you"
			},
			{
				name: "talking"
			},
			{
				name: "about?"
			}
		]
	}
});

var demo10 = new Vue({
	el: "#demo10",
	data: {
		items: [
			{
				name: "what"
			},
			{
				name: "are"
			},
			{
				name: "you"
			},
			{
				name: "talking"
			},
			{
				name: "about?"
			}
		]
	}
})


Vue.component("my-input", {
	render: function(createElement) {
		var self = this;
		return createElement("input", {
			domProps: {
				value: self.value
			},
			on: {
				input: function(event) {
					self.value = event.target.value + "!";
					event.target.value = self.value;
				}
			}
		})
	}
})

var demo11 = new Vue({
	el: "#demo11"
})