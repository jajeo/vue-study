var Vue = require("vue");
var myMixin = {
	created: function() {
		this.hello();
	},
	methods: {
		hello: function() {
			console.log("hello from myMixin");
		}
	}
};

var Component = Vue.extend({
	mixins: [myMixin],
	created: function() {
		console.log("hello from Component");
	}
});

var component = new Component({
	el:"#mixinsDemo"
});