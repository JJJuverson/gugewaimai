<template>
  <div id="app">
    <router-view/>
	<FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
	import {mapActions} from 'vuex'
	import FooterGuide from './components/FooterGuide/index.vue'
	export default {
		mounted(){
			this.getAddress()
			this.getUserInfo()
		},
		methods: {
			...mapActions(['getAddress','getUserInfo'])
		},
		components:{
			FooterGuide
		}
	}
</script>


<style lang="stylus">
	
</style>
