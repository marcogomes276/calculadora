<template>
<div id="appCalc">
	<main class="principal">
		<!-- <header class="titulo">
			<h1>Calculadora</h1>
		</header>
		<main class="conteiner"> -->
		<section class="inputs">
			<p class="input">{{ result }}</p>
			<input class="input" type="number" v-model.number="valor1">
			<input class="input" type="number" v-model.number="valor2">
		</section>
		<section class="botoes">
			<button class="botao" @click="calc('soma')">+</button>
			<button class="botao" @click="calc('subtaçao')">-</button>
			<button class="botao" @click="calc('multiplicaçao')">×</button>
			<button class="botao" @click="calc('divisao')">÷</button>
		</section>
		<!-- </main> -->
	</main>
</div>
</template>
<script>
	export default{
		name:'Calc',
		data(){
			return{
			 	valor1:'',
			 	valor2:'',
			 	result:''
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

	.titulo{
		color: #6FB0E2;
	}

	.conteiner{
		/*padding: 30px;*/
	}
	.inputs{
		
	}
	.input{
		background: #9EA2A6;
		color: #2A3137;
		padding:20px;
		margin: 5px;
		border: none;
		width: 60%;
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
		/*margin-left: 11px;*/
		border: none;
		width: 150px;
		height: 150px;		
	}
</style>