const {createApp} = Vue;

createApp({
	data() {
		return{
			title: "Hello Vue World!",
        img: "https://swimjiy.github.io/static/27f1c5517910ba9a7cfc6a216c4b1f78/38a7d/vue.jpg"
		}
	}
}).mount ('#app');