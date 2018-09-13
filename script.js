/*
* Calculadora Simples e de Programador Usando JQuery
* -----------------------------------------------------
* Arthur Vasconcellos <contatoarthursilveira@gmail.com>
* github.com/arthursvpb
* linkedin.com/in/arthursvpb
* facebook.com/arthursvpb
* twitter.com/arthursvpb
* -----------------------------------------------------
*/

//Começando os códigos..


$( function(){

	// Função para funcionar as conversões de binário, hexa e octal.
	var ConvertBase = function (num) {
        return {
            from : function (baseFrom) {
                return {
                    to : function (baseTo) {
                        return parseInt(num, baseFrom).toString(baseTo);
                    }
                };
            }
        };
    };

	// Variáveis

	var v1, v2, op;

	// Função para inserir os valores dentro do campo de texto.
	$("input[name=btn]").click( function(){
		$("#result").val($("#result").val() + $(this).val());
	});

	// Função de limpar (CE)
	$("input[name=ce]").click( function(){
		$("#result").val('');
		$("#op").text('');
	});

	// Função de limpar o último número(C)
	$("input[name=c]").click( function(){
		var len = $("#result").val().length;
		var valor = $("#result").val();
		valor = valor.replace(valor.charAt(len - 1), "");
		$("#result").val(valor);
	});

	// Função para aparecer o HEX ao lado do visor
	$("input[name=hex]").click( function(){
		if($("#result").val() != ''){
			v1 = parseFloat($("#result").val());
			$("#result").val();
			op = "hex";
			$("#op").text($(this).val());

		} else {
			alert('Insira algum número!');
		}
	});

	// Função para aparecer o BIN ao lado do visor
	$("input[name=bin]").click( function(){
		if($("#result").val() != ''){
			v1 = parseFloat($("#result").val());
			$("#result").val();
			op = "bin";
			$("#op").text($(this).val());

		} else {
			alert('Insira algum número!');
		}
	});

	// Função para aparecer o OCT ao lado do visor
	$("input[name=oct]").click( function(){
		if($("#result").val() != ''){
			v1 = parseFloat($("#result").val());
			$("#result").val();
			op = "oct";
			$("#op").text($(this).val());

		} else {
			alert('Insira algum número!');
		}
	});

	// Função que aparece o + e limpa a tela
	$("input[name=soma]").click( function(){
		if($("#result").val() != ''){
			v1 = parseFloat($("#result").val());
			$("#result").val('');
			op = "soma";
			$("#op").text($(this).val());

		} else {
			alert('Insira algum número!');
		}
	});

	// Função que aparece o - e limpa a tela
	$("input[name=menos]").click( function(){
		if($("#result").val() != ''){
			v1 = parseFloat($("#result").val());
			$("#result").val('');
			op = "menos";
			$("#op").text($(this).val());

		} else {
			alert('Insira algum número!');
		}
	});

	// Função que aparece o * e limpa a tela
	$("input[name=vezes]").click( function(){
		if($("#result").val() != ''){
			v1 = parseFloat($("#result").val());
			$("#result").val('');
			op = "vezes";
			$("#op").text($(this).val());

		} else {
			alert('Insira algum número!');
		}
	});

	// Função que aparece o / e limpa a tela
	$("input[name=div]").click( function(){
		if($("#result").val() != ''){
			v1 = parseFloat($("#result").val());
			$("#result").val('');
			op = "div";
			$("#op").text($(this).val());

		} else {
			alert('Insira algum número!');
		}
	});

	// Fazendo a lógica das operações..

	$("input[name=igual]").click( function(){

		if($("#result").val() != ''){
			v2 = parseFloat($("#result").val());
			
			//Soma
			if(op == "soma"){
				$("#result").val(v1 + v2);
			}

			//Subtração
			else if(op == "menos"){
				$("#result").val(v1 - v2);
			}

			//Multiplicação
			else if(op == "vezes"){
				$("#result").val(v1 * v2);
			}

			//Divisão
			else if(op == "div"){
				$("#result").val(v1 / v2);
			}

			// Conversor decimal para hexadecimal
			else if(op == "hex"){
				$("#result").val(ConvertBase(v1).from(10).to(16)); // Aqui dentro será colocada as operações
			}

			// Conversor decimal para binário
			else if(op == "bin"){
				$("#result").val(ConvertBase(v1).from(10).to(2)); // Aqui dentro será colocada as operações
			}

			// Conversor decimal para octal
			else if(op == "oct"){
				$("#result").val(ConvertBase(v1).from(10).to(8)); // Aqui dentro será colocada as operações
			}

		} else {
			alert('Insira algum número!');
		}

	})

});