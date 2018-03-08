<template>
	<div id="appCalc">
	<main class="principal">
		<section class="inputs">
			<p class="inputsItem resultado">{{ result }}</p>
		</section>
		<section class="botoes">
			<button class="botao">C</button>
			<button class="botao">+/-</button>
			<button class="botao">%</button>
			<button class="botao">÷</button>
			<button class="botao">7</button>
			<button class="botao">8</button>
			<button class="botao">9</button>
			<button class="botao">×</button>
			<button class="botao">4</button>
			<button class="botao">5</button>
			<button class="botao">6</button>
			<button class="botao">-</button>
			<button class="botao">1</button>
			<button class="botao">2</button>
			<button class="botao">3</button>
			<button class="botao">+</button>
			<button class="botao">00</button>
			<button class="botao">0</button>
			<button class="botao">.</button>
			<button class="botao btn-igual">=</button>
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
@import url('https://fonts.googleapis.com/css?family=Yantramanav:100,300');
	#appCalc{
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		background-image: url("../assets/bg-calc.jpg"); 
	}
	.principal{
		width: 300px;
		height: 71vh;
		background: #2A3137;
		color: #6FB0E2;
	}
	.inputs{
		height: 20vh;
		background: #363F47;
		padding: 10px;
	}
	.inputsItem{
		color: #6FB0E2;
	}
	.resultado{
		color: white;
		font-size: 10vh;
		text-align: center;
	}
	.botoes{
		margin: 10px;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}
	.botao{
		width: 63px;
		height: 63px;
		background: #2A3137;
		color: #EBECED;
		border: none;
		font-size: 30px;
		font-family: 'Yantramanav', sans-serif; 
		font-weight: 100;
	}
	.btn-igual{
		background: #36b1e8;
		color: #EBECED;
		border-radius: 5px;
		font-weight: 300;
	}
</style>