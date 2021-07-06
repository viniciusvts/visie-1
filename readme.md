# Desafio Visie 1

## 1) Escreva uma função que receba uma array de inteiros e retorne a quantidade de elementos da array com valor acima da média.

Entrada: [22, 28, 33, 54, 14, 2, 76]

Saída prevista: 3

Resposta:

    function countElementsAboveAverage(arr){
        if(!Array.isArray(arr))
            throw new TypeError('Parametro deve ser array');
        var somaTodosOsItensArr = arr.reduce((total, atual)=>{
            var soma =  total + atual;
            return soma;
        });
        var mediaArr = somaTodosOsItensArr / arr.length;
        var acimaDaMediaArr = arr.filter((value)=>{
            var isArrayValid = (value > mediaArr);
            return isArrayValid;
        });
        return acimaDaMediaArr.length;
    }

## 2) Escreva uma função que receba uma array de strings não vazias e retorne a quantidade de strings iniciadas pela letra "a".

Entrada: [‘front-end’, ’angular’, ’back-end’, ’database’, ’async’]

Saída prevista: 2

Resposta:

    function countStringsStartsByA(arr){
        if(!Array.isArray(arr))
            throw new TypeError('Parametro deve ser array');
        var qtdStringsA = 0;
        arr.forEach(item => {
            if (item.substring(0,1) == 'a'){
                qtdStringsA++;
            }
        });
        return qtdStringsA;
    }

## 3) Escreva uma função que receba uma array de inteiros e retorne a soma de todos os números em índices ímpares.

Entrada: [22, 28, 33, 54, 14, 2, 76]

Saída prevista: 84

Resposta:

    function countStringsStartsByA(arr){
        if(!Array.isArray(arr))
            throw new TypeError('Parametro deve ser array');
        var qtdStringsA = 0;
        arr.forEach(item => {
            if (item.substring(0,1) == 'a'){
                qtdStringsA++;
            }
        });
        return qtdStringsA;
    }

## 4) Escreva uma função que receba uma array de strings não vazias e retorne um novo vetor em que o primeiro letra de cada string foi substituído pela letra "a".

Entrada: [‘front-end’, ’back-end’, ’database’]

Saída prevista: [‘aront-end’, ’aack-end’, ’aatabase’]

Resposta:

    function substituiPrimeiraLetraPorA(arr){
        if(!Array.isArray(arr))
            throw new TypeError('Parametro deve ser array');
        var arrComLetraModificada = arr.map(value=>{
            var firstLetter = value.substring(0,1);
            return value.replace(firstLetter,'a');
        });
        return arrComLetraModificada;
    }

## 5) Escreva uma função que receba uma string e 
- elimine os espaços em seu início e término, 

- substitua a vírgula por um ponto de exclamação,

- substitua “olá” por uma saudação (bom dia, boa tarde, boa noite) de acordo com o horário.

Entrada: ' Olá usuário, bem-vindo ao sistema  '

Saída prevista: 'Bom dia, usuário! Bem-vindo ao sistema'

Resposta:

    function trataString(str){
        if(typeof str !== "string")
            throw new TypeError('Parametro deve ser string');
        var strWithNoSpace = str.trim();
        var strCommaToE = strWithNoSpace.replace(',', '!');
        var saudacao = emitirSaudacao();
        strWithSaudacao = strCommaToE.replace(/olá/i, saudacao);
        return strWithSaudacao;
    }

    /**
    * Saudação com base no horário
    * @returns {'Bom dia'|'Boa tarde'|'Boa noite'} Saudação
    */
    function emitirSaudacao(){
        var dataAtual = new Date();
        var horaAtual = dataAtual.getHours();
        switch (true) {
            case horaAtual < 5:
                return 'Boa noite'
                break;
            case horaAtual < 12:
                return 'Bom dia'
                break;
            case horaAtual < 18:
                return 'Boa tarde'
                break; 
            default:
                // se maior que 18, é noite
                return 'Boa noite'
                break;
        }
    }


# Informações e instruções

O horário de início considerado é o horário do recebimento do documento, combinado em entrevista.

A execução do desafio deve ser feita na linguagem mais relevante no contexto da vaga.

Escreva sua resposta em seu editor de preferência, e copie/cole a resposta logo abaixo do desafio, como o modelo abaixo:

Exemplo (javascript): escreva uma função que receba uma array de inteiros e retorne a soma de todos os números pares.

Entrada: [22, 28, 33, 54, 14, 2, 76]

Saída prevista: 3

Resposta:

arr = [22, 28, 33, 54, 14, 2, 76]

    function returnEvensSum(data){
        return data.reduce((a, v) => a += v % 2 == 0 ? v : 0)
    }
    console.log(returnEvensSum(arr))

Caso o texto venha com qualquer formatação, não há problema. Apenas certifique-se de que o bloco de código não perdeu nenhum detalhe, como indentações, por exemplo.

Ao término do teste, salve uma versão deste documento (“Arquivo > Histórico de versões > Nomear a versão atual” ou “File > Version history > Name current version”) com o nome “Desafio concluído”. O horário desta ação será considerado o momento de sua entrega.

É estimado o tempo de 1 hora para execução deste desafio, mas não há problema caso este tempo seja extrapolado.

Boa sorte!

Marcelo Hanada