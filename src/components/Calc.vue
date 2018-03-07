<template>
<div id="appCalc">
	<main class="principal">
		<section class="inputs">
			<p class="inputsItem resultado">{{ result }}</p>
			<input class="inputsItem input" type="number" v-model.number="valor1">
			<input class="inputsItem input" type="number" v-model.number="valor2">
		</section>
		<section class="botoes">
			<button class="botao" @click="calc('soma')">+</button>
			<button class="botao" @click="calc('subtaçao')">-</button>
			<button class="botao" @click="calc('multiplicaçao')">×</button>
			<button class="botao" @click="calc('divisao')">÷</button>
		</section>
	</main>
</div>
</template>
<script>
	export default{
		name:'Calc',
		data(){
			return{
			 	valor1:0,
			 	valor2:0,
			 	result:0
			}
		},
		methods:{
			calc(operator){
				if (operator === 'soma') {
					this.result = this.valor1 + this.valor2
				}else if(operator === 'subtaçao'){
					this.result = this.valor1 - this.valor2
				}else if (operator === 'multiplicaçao') {
					this.result = this.valor1 * this.valor2 
				}else{
					this.result = this.valor1 / this.valor2
				}

			}
		}
	}
</script>
<style scoped>
	*{
		margin:0;
		padding: 0;
	}
	#appCalc{
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.principal{
		max-width: 300px;
		background: #2A3137;
		color: #6FB0E2;
	}
	.inputs{
		background: #363F47;
		padding: 10px;
	}
	.inputsItem{
		background: #363F47;
		color: #6FB0E2;
		border: none;
		width: 90%;
		padding: 5%;
	}
	.resultado{
		color: white;
		font-size: 10vh;
	}
	.input{
		display: flex;
		text-align: right;
		font-size: 3vh;
	}
	.botoes{
		display: flex;
		flex-wrap: wrap;
		margin: 0;
		padding: 0;
	}
	.botao{
		background: #2A3137;
		color: #6FB0E2;
		padding:20px;
		border: none;
		width: 150px;
		height: 150px;		
	}
</style>