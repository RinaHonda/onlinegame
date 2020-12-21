<template>
<div>
  <!--スタートボタン-->
  <v-btn v-if="owner" @click="start">start</v-btn>
 
<svg width="800" height="600" v-if="me">
  <rect x="0" y="0" width="800" height="600" fill="#ffffc0">
  </rect>

  <player v-for="p in positions" col="blue" :pos="p.position" :oni="p.oni">
  </player>
  <player col="red" :pos="me.position" :oni="me.oni">
  </player>
</svg>
<text v-if="gameover" :x="150" :y="150" font-size=40 >You lose...</text>
<text v-if="gameclear" :x="200" :y="200" font-size=80 >You win!</text>
</div>
</template>

<script>
import player from "~/components/player.vue"
export default {
    data() {
	return {
	    started:false,
	    gameover:false,
	    gameclear:false,
	    
	}
    },
    mounted(){
	window.addEventListener("keydown",e=>this.kbd(e)); 
    },
    //プレイヤーの動き
    methods: {
	start() {
	    this.started = true;
	},
	kbd(e) {
	    if(this.gameover)
		return;
	    const pos = {x:this.me.position.x,y:this.me.position.y}
	    if(e.keyCode==39) {
		pos.x++;
	    }
	    else if(e.keyCode==37) {
		pos.x--;
	    }
	    else if(e.keyCode==38) {
		pos.y--;
	    }
	    else if(e.keyCode==40) {
		pos.y++;
	    }
	    for(let other of this.positions) {
		if(other.position.x == pos.x && other.position.y == pos.y &&
		   this.me.oni && !other.oni) {
		    console.log("caught")
		    this.$store.dispatch('saveOtherPosition',
					 {email:other.email,
					  position:other.position,
					  oni:true
					  })
		}
		if(this.other.oni){
		    this.gameclear=true;
		}else{
		    this.gameover=true;
		}
	    }
	    
	    this.$store.dispatch('saveMyPosition',pos)
	}

    },
    computed: {
	owner() {
	    if(this.$store.state.user) {
		return this.$store.state.user.email=="g17915hr@gm.tsuda.ac.jp"
	    }
	    else {
		return false
	    }
	},
	me() {
	    return this.$store.state.me
	},
	positions() {
	    return this.$store.state.positions
	},
	

    },
    components:{
	player
    }
}
</script>
