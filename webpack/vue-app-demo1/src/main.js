var Vue = require("vue");
require("./style.css")

var vm = new Vue({
	el: "#test",
	data: {
		isEditing: false,
		docState: "saved",
		view: "v-a"
	},
	components: {
		"v-a": {
			template: "<div>Component A</div>"
		},
		"v-b": {
			template: "<div>Component B</div>"
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
	}
});