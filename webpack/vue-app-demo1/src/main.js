var Vue = require("vue");
require("./mixin.js");
require("./style.css");
if (process.env.NODE_ENV !== 'production') {
  require('./demo1.html')
}


Vue.directive("color-swatch", {
	bind: function(el, binding) {
		console.log(binding.value);
		el.style.backgroundColor = binding.value;
	}
});

Vue.directive("demo1", function(el, binding) {
	console.log(binding.value.color);
	console.log(binding.value.text);
});

var test1 = new Vue({
	el: "#test1"
})

var test2 = new Vue({
	el: "#test2"
})

var vm = new Vue({
	el: "#test",
	data: {
		isEditing: false,
		docState: "saved",
		view: "v-a",
		items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
		nextNum: 10,
		message: "hello!"
	},
	components: {
		"v-a": {
			template: "<div>Component A</div>"
		},
		"v-b": {
			template: "<div>Component B</div>"
		}
	},
	methods: {
		randomIndex: function() {
			return Math.floor(Math.random() * this.items.length);
		},
		add: function() {
			this.items.splice(this.randomIndex(), 0, this.nextNum++)
		},
		remove: function() {
			this.items.splice(this.randomIndex(), 1);
		}
	},
	computed: {
		buttonMessage: function() {
			switch(this.docState) {
				case "saved": return "Edit"
				case "edited": return "Save"
				case "editing": return "Cancel"
			}
		}
	},
	directives: {
		focus: {
			inserted: function(el) {
				el.focus();
			}
		},
		demo: {
			bind: function(el, binding, vnode) {
				var s = JSON.stringify
				el.innerHTML = 
				'name: ' + s(binding.name) + '<br>' +
				'value:' + s(binding.value) + '<br>' +
				"expression: "+ s(binding.expression) + "<br>" +
				"argument:" + s(binding.arg) + "<br>" +
				"modifiers:" + s(binding.modifiers) +"<br>" +
				"vnode keys:" + Object.keys(vnode).join(", ")
			}
		}
	}
});



