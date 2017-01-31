var Vue = require("vue");
var Vuex = require("vuex");
var mapState = Vuex.mapState;

Vue.use(Vuex);

var store = new Vuex.Store({
	state: {
		count: 0
	},
	mutations: {
		increment: function(state) {
			state.count++;
		},
		decrement: function(state) {
			state.count--;
		}
	}
});

/*
var initData = { cnt : 20};

var Counter = Vue.component("counter",{
	template: "<div> {{ cnt }} </div>",
	computed: mapState({
			count: function(state) {
				return state.count;
			},
			countAlias: 'count',
			countPlusLocalState: function(state){
				return state.count + this.cnt;
			}
		}),
	data: function(){
		return initData;
	}
});
*/

var Counter = Vue.component("counter",{
	template: "<div> {{ count }} </div>",
	computed: mapState(['count'])
});



/*
var app = new Vue({
	el: "#app",
	computed: {
		count: function() {
			return store.state.count;
		}
	},
	methods: {
		increment: function() {
			store.commit('increment');
		},
		decrement: function() {
			store.commit('decrement');
		}
	}
})*/


var app = new Vue({
	el: "#app",
	store,
	components: { Counter },
	template: "\
	<counter></counter>\
	",
	methods: {
		increment: function() {
			store.commit('increment');
		},
		decrement: function() {
			store.commit('decrement');
		}
	}
})

