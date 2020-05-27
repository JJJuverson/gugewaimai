<template>
	<div>
		<section class="profile_my_order border-1px">
		  <van-button type="danger primary" block v-if="userInfo._id" @click="showPopup">退出登录</van-button>
		</section>
		<van-popup 
		  v-model="show"
		  round
		  position="bottom"
		  :style="{height:'30%'}"
		  >
		  <div>
			  <div class="caozuo">
			  	  <van-button type="primary danger" block @click="dengchu">退出当前登录</van-button>
			  </div>
			  <div class="caozuo">
			  	  <van-button type="primary " block @click="quxiao">取消</van-button>
			  </div>
		  </div>
		</van-popup>
	</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
      return {
        show: false
      }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
	  dengchu() {
		  this.$store.dispatch('logout')
		  this.show = false
	  },
	  quxiao() {
		  this.show = false
	  },
      showPopup() {
        this.show = true;
      }
    }
	
};
	
</script>

<style lang="stylus">
	.caozuo
		width 100%
		border-bottom 1px solid #f1f1f1
		padding 10px 20px 1px 0
		color #333
		display flex
		justify-content space-between
		.van-button--primary
			background-color #fafafa
			border #fafafa
			.van-button__text
				color #000000
				font-size 16px
		
		
</style>
