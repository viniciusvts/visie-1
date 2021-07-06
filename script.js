/**
 * Escreva uma função que receba uma 
 * array de inteiros e retorne a 
 * quantidade de elementos da array 
 * com valor acima da média.
 * @param {Number[]} arr Conjunto de números
 * @returns {Number} Qtd de itens acima da média
 * @author Vinicius de Santana
 */
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

/**
 * Escreva uma função que receba uma array de strings
 * não vazias e retorne a quantidade de strings iniciadas
 * pela letra "a".
 * @param {String[]} arr Conjunto de strings
 * @returns {Number} Qtd de string que começam com o caracter 'a'
 * @author Vinicius de Santana
 */
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

/**
 * Escreva uma função que receba uma array de inteiros e 
 * retorne a soma de todos os números em índices ímpares.
 * @param {Number[]} arr Conjunto de números
 * @returns {Number} Soma de todos os números nos indices inpares
 * @author Vinicius de Santana
 */
 function somaIndicesImpares(arr){
    if(!Array.isArray(arr))
        throw new TypeError('Parametro deve ser array');
    var somaDosNumerosImpares = 0;
    arr.forEach((item, index) => {
        var isIndexImpar = (index % 2) == 1;
        if (isIndexImpar){
            somaDosNumerosImpares += item;
        }
    });
    return somaDosNumerosImpares;
}

/**
 * Escreva uma função que receba uma array de strings 
 * não vazias e retorne um novo vetor em que o primeiro 
 * letra de cada string foi substituído pela letra "a".
 * @param {String[]} arr Conjunto de strings
 * @returns {String[]} Conjunto de string iniciadas com 'a'
 * @author Vinicius de Santana
 */
 function substituiPrimeiraLetraPorA(arr){
    if(!Array.isArray(arr))
        throw new TypeError('Parametro deve ser array');
    var arrComLetraModificada = arr.map(value=>{
        var firstLetter = value.substring(0,1);
        return value.replace(firstLetter,'a');
    });
    return arrComLetraModificada;
}

/**
 * Escreva uma função que receba uma string e
 * - elimine os espaços em seu início e término,
 * - substitua a vírgula por um ponto de exclamação,
 * - substitua “olá” por uma saudação (bom dia, boa tarde, boa noite) de acordo com o horário.
 * @param {String} str Conjunto de strings
 * @returns {String} Conjunto de string iniciadas com 'a'
 * @author Vinicius de Santana
 */
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

window.addEventListener('DOMContentLoaded', ()=>{
    // 1
    var arr = [22, 28, 33, 54, 14, 2, 76];
    var result = countElementsAboveAverage(arr);
    console.log(result);
    // 2
    var arr = ['front-end', 'angular', 'back-end', 'database', 'async'];
    var result = countStringsStartsByA(arr);
    console.log(result);
    // 3
    var arr = [22, 28, 33, 54, 14, 2, 76];
    var result = somaIndicesImpares(arr);
    console.log(result);
    // 4
    var arr = ['front-end', 'back-end', 'database'];
    var result = substituiPrimeiraLetraPorA(arr);
    console.log(result);
    // 5
    var str = ' Olá usuário, bem-vindo ao sistema ';
    var result = trataString(str);
    console.log(result);
});