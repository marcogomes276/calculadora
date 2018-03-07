<template>
	<div class="principal">
		<div class="calculador">
			<button class="botao" v-on:click="limpar()">C</button>
			<button>+/-</button>
			<button>%</button>

			<button class="botao" v-on:click="setOperator('soma')">+</button>
			<button class="botao" v-on:click="setOperator('subtracao')">-</button>
			<button class="botao" v-on:click="setOperator('multiplicacao')">X</button>
			<button class="botao" v-on:click="setOperator('divisao')">÷</button>
			<button class="botao" v-on:click="resultados()">=</button>
			<button>00</button>
			<button>.</button>
		</div>
		<div class="inputs">
			<input class="input" type="text" v-model="visor">
		</div>
		<div class="numeros">
			<button class="A" v-on:click="preencher('1')">1</button>
			<button class="A" v-on:click="preencher('2')">2</button>
			<button class="A" v-on:click="preencher('3')">3</button>
			<button class="A" v-on:click="preencher('4')">4</button>
			<button class="A" v-on:click="preencher('5')">5</button>
			<button class="A" v-on:click="preencher('6')">6</button>
			<button class="A" v-on:click="preencher('7')">7</button>
			<button class="A" v-on:click="preencher('8')">8</button>
			<button class="A" v-on:click="preencher('9')">9</button>
			<button class="A" v-on:click="preencher('0')">0</button>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'CalculadoraDois',
		data(){
			return{
				fator1: '',
				fator2: '',
				operador: null,
				resultado: 0,
				visor: null,
				erro: ''
			}
		},
		methods:{
			preencher(value){
					if (this.erro !== '') {}
					if(this.operador===null){
						this.fator1 = this.fator1 + value
						this.visor = this.fator1

					} else{
						this.fator2 = this.fator2 + value
						this.visor = this.fator2
					}
				},
			setOperator(operador){
				this.operador = operador
			},
			resultados(){
				if(this.operador === 'soma') {
					this.resultado = parseInt(this.fator1) + parseInt(this.fator2)
					this.visor = this.resultado
				} else if (this.operador === 'subtracao'){
					this.resultado = parseInt(this.fator1) - parseInt(this.fator2)
					this.visor = this.resultado
				} else if (this.operador === 'multiplicacao') {
					this.resultado = parseInt(this.fator1) * parseInt(this.fator2)
					this.visor = this.resultado
				} else{
					if (this.fator2 === '0') {
						this.erro = 'Não há divisão com 0, tente novamente!'
					} else {
						this.resultado = parseInt(this.fator1) / parseInt(this.fator2)
						this.visor = this.resultado
					}
				}
				this.zerar()
			},
			zerar(){
				this.fator1 = ''
				this.fator2 = ''
				this.operador = null
				this.erro = ''
			},
			limpar(){
				this.zerar()
				this.visor = null
			}
			}
		}
</script>
<style scoped>
	*{
	margin: 0;
	padding:0; 
	}
	.principal{

	}
	.botao{

	}
	.inputs{

	}
	.input{

	}
	.numeros{

	}
	.A{
		width: 60px;
		padding: 10px;
		display: flex;
		flex-wrap: wrap;
	}
</style>