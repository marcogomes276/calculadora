<template>
	<div id="appCalc">
	<main class="principal">
		<section class="inputs">
			<p class="inputsItem resultado">{{ visor }}</p>
		</section>
		<section class="botoes">
			<button class="botao" v-on:click="reset()">C</button>
			<button class="botao">+/-</button>
			<button class="botao">%</button>
			<button class="botao" v-on:click="setOperator('/')" >÷</button>
			<button class="botao" v-on:click="write('7')">7</button>
			<button class="botao" v-on:click="write('8')">8</button>
			<button class="botao" v-on:click="write('9')">9</button>
			<button class="botao" v-on:click="setOperator('*')" >×</button>
			<button class="botao" v-on:click="write('4')">4</button>
			<button class="botao" v-on:click="write('5')">5</button>
			<button class="botao" v-on:click="write('6')">6</button>
			<button class="botao" v-on:click="setOperator('-')" >-</button>
			<button class="botao" v-on:click="write('1')">1</button>
			<button class="botao" v-on:click="write('2')">2</button>
			<button class="botao" v-on:click="write('3')">3</button>
			<button class="botao" v-on:click="setOperator('+')" >+</button>
			<button class="botao" v-on:click="write('00')">00</button>
			<button class="botao" v-on:click="write('0')">0</button>
			<button class="botao" v-on:click="write('.')">.</button>
			<button class="botao btn-igual" v-on:click="calc()" >=</button>
		</section>
	</main>
</div>
</template>
<script>
	export default{
		name:'Calc2',
		data(){
			return{
			 	valor1:'',
			 	valor2:'',
			 	operator:'',
			 	result:'',
			 	visor:0
			}
		},
		methods:{
			write(number){
				if (this.operator === '') {
					this.valor1 = this.valor1 + number
					this.visor = this.valor1
				}else{
					this.valor2 = this.valor2 + number
					this.visor = this.valor2
				}
			},
			setOperator(value){
				this.operator = value
			},
			calc(){
				if (this.operator === '+') {
					this.result = this.valor1 + this.valor2
					this.clear()

				}else if (this.operator === '-') {
					this.result = this.valor1 - this.valor2

				}else if (this.operator === '*') {
					this.result = this.valor1 * this.valor2

				}else{
					if (this.valor1 == 0) {
						alert('Não há divisão com 0, tente novamente!')
					}else{
						this.result = this.valor1 / this.valor2
					}
				}
			},
			clear(){
				valor1 = '',
				valor2 = '',
				operator = ''
			},
			reset(){
				visor = 0,
				result = '',
				this.clear()
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
		min-height: 71vh;
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