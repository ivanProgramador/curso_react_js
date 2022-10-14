O jsx é um extensão de sinataxe para o javascript, ele pode ser usado junto com js e tambem 
pode facilitar no controle e declaração de elementos. no codigo abaixo uma variavel
constante recebe um elemento h1 com uma frase dentro.

const elemento = <h1>Bom dia !</h1>;

Como exibir o valor de uma variavel no JSX 

const nome ='João';

const elemento = <h1>Bom dia {nome}!</h1>;

variaveis desse tipo podem retornar 

resultados de uma operação matematica 

const soma = <h1>O resultado é: { 3 + 5 }</h1>;

retornar uma data 

const data = <h1>Compra feita em: { formatarData(dataPedido)}</h1>;

EXPRESSOÕES EM JSX 
  O codigo abaixo mostra uma função que possui um retorno usando o JSX 

  function ola(usuario){
     
      if(usuario){

          return <h1> Olá, {formatarNome(usuario)} </h1>
          }

       return <h1> Olá,estranho.... </h1>

       
     }

------------------------------------------------------------------

ATRIBUTOS COM JSX 

   Escrever atributos usando JSX exige alguma regras de escrita como camel case 
   como o jsx e mais proximo do jsvascript doque do html, existem algumas diferenças 
   que devem ser elevadas em conta.
   
   const elemento = <div tabindex="0" >.....</div>

   const elemento = <img src{usuario.avatarUrl} />

   Atributos em html 

    tabindex="0"
    class="meuEstilo"
    onclick="...."

    Atributos em jsx 
      Os atributos usam camel case, um diferença de sintaxe feita para evitar 
      conflito eo atributo className porque o atributo class e uma palavra reservada
      nos dois e isso causaria conflito na renderização, entãopara atribuir uma classe
      , a um elemento de JSX o atributo class recebe o nome de className.  

    tabIndex = "0"
    className = ""
    onClick = ""

    ------------------------------------------------------------------

CONCEITO DE COMPONENTE PARA O REACT 

   O conceito de componente permite que a interface grafica do sistema seja dividida em 
   partes, e que seja modificada de forma isolada, sem a necessidade de recarregamento
   a pagina.

   sintaxe de um componente "a função recebe um parametro chamado props" eu não sei
   ainda se se trata de um objeto padrão do proprio framework, pelo contexto parece
   ser um objeto porque a propridade nome ainda não foi definida mas ele esta retornando o atributo nome desse objeto.
    
    function BemVindo(props){
       
        return <p> Olá,{props.nome} </p>
    }


    A funçãose comporta como uma classe do react que extende o metodo component 
    que dentro dele tem o render que pega o valor do atributo nome do objeto corrente
    e renderiza.

    class BemVindo extends React.Component{

        render(){
            return <p> Hello,  {this.props.nome} </p>
        }
    }

    ------------------------------------------------------------------------------------
     Entendendo o "props" se trata de um objeto padrão do react tudo oque a função principal receber  vai virar um atribut do props 

       props = {

           "nome": "João";
       }

   

      function BemVindo(props){
       
        return <p> Olá,{props.nome} </p>

       }

      Como ele é chamado na view :

       <BemVindo nome="João"/>

       -------------------------------------------------------------------
       COMPONENTE COMPOSTO POR OUTRO COMPOMENTE 
         No caso abaixo o componente App esta retornado 3 componetes como saidas diferentes

        function BemVindo(props){
       
        return <p> Olá,{props.nome} </p>

        }

        function App(){
          
          return(

             <BemVindo nome="João"/>
             <BemVindo nome="maria"/>
             <BemVindo nome="José"/>
           
             
          );


        }
        ----------------------------------------------------------

        OBJETO PROPS X OBJETO STATE 

        props -> pode ser passado de fora do componte esse tipo de objeto 
                 pode ser preenchido e repassado.

        state -> pertence ao componete e somente o componete que possui ele pode 
                 manipular o objeto state.

--------------------------------------------------------------

preparando o ambiente da maquina para rodar o react 

1 - node js (instalar)(equivale a uma runtime para js)

2 - chocolatei(instalar)(é um gerenciador de pacotes)(ele baixa sozinho)

3 - code runer (extensão do vs code) dracula(extensão do vs code)

4 - material icon theme(identifica os aruivos usando os icones correspondentes)







     

        

   


 







