<template>
	<div class="message"> {{ msg }}</div>
</template>

<script>
	module.exports = {
		data: function(){
			return {
				msg: "Hello form vue-loader!!"
			};
		}
	}
</script>

<style>
	.message {
		color: red;
	}
</style>