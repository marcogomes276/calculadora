<template>
	<div class="base">
		<header class="titulo">
			<h1>Calculadora</h1>
		</header>
		<main class="container">
		<section class="inputs">
			<input class="input" type="number" name="calc1" v-model="valor1">
			<input class="input" type="number" name="calc2" v-model="valor2">
			<input class="input" type="number" name="calc3" v-model="resultados">
		</section>
		<section class="conteiner-do-button">
			<button class="botao botaoZerar">C</button>
			<button class="botao">+</button>
			<button class="botao">-</button>
			<button class="botao">x</button>
			<button class="botao">/</button>
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
		 	resultado:null
			}
		}
	}
</script>
<style scoped>
	.base {
		background-color: black;
	}
	.titulo{
		color: blue;
	}
	.container{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;	
	}
	.inputs{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 60%;
	}
	.input{
		margin: 10px;
		width: 100%;
		height: 5vh;

	}
	.conteiner-do-button{
		width: 60%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}
	.botao{
		width: 50%;
		height: 10vh;
	}
	.botaoZerar{
		width: 100%;
	}
</style>