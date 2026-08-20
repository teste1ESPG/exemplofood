import { useState } from "react"

//Array de objetos contendo o estado inicial do cardapio
const cardapio=[
        {id:1,nome:"Combo-01",preco:25.00,disponivel:true,quantidade:0},
        {id:2,nome:"Combo-02",preco:35.00,disponivel:true,quantidade:0},
        {id:3,nome:"Combo-03",preco:45.00,disponivel:true,quantidade:0},
        {id:4,nome:"Combo-04",preco:55.00,disponivel:true,quantidade:0},
        {id:5,nome:"Combo-05",preco:65.00,disponivel:true,quantidade:0},
];

const Pedido = () => {

    // HOOK- useState- manipula o estado da variavel
    // Estados para gerenciar a lista de items
const[items,setItems]=useState(cardapio);
const[status,setStatus]=useState("");
const[enviar,setEnviar]=useState(false);

//Valor fixo adicionado ao total quando tiver items no carrinho
const taxaEntrega=5.00;

// função que altera a quantidade de um pedido
const alterarQuantidade =(id,valor)=>{
    // usa a função updater para garantir o valor mais recente do estado
    setItems(prev=>
        // percorre a lista para criar um NOVO array sem modificar o original(IMUTABILIDADE)
        prev.map(item=>
            // TERNáRIO: verifica se o item da iteração atual é o que deve ser alterado
            // SPRED (...item):
            // copia as propriedades do item e atualiza apenas a quantidade mantendo o resto
            // Math.max : objeto que garante que a quantidade nunca seja menor que 0
            // Item: retorna o item intacto caso o id não corresponda
            item.id===id ? {...item,quantidade: Math.max(0,item.quantidade + valor)}: item
        )
        )
}
// FILTER- Seleciona apenas os produtor disponiveis e do carrinho
  const produtosDisponiveis = items.filter(item=>item.disponivel);
  const carrinho = items.filter(item=>item.quantidade >0);

  // REDUCE- calcula a soma dos items (preço * quantidade) e adiciona a taxa de entrega
  const subtotal = carrinho.reduce((ac,item)=>ac + item.preco * item.quantidade,0)
  const total = subtotal >0 ? subtotal + taxaEntrega :0;

  // simulação do ciclo de vida da entrega Usando temporizadores assincronos
  const confirmarPedido=()=>{
    setEnviar(true);
    setStatus("restaurante preparando o seu pedido...")
    setTimeout(()=>{
      setStatus("seu pedido saiu para a entrega!!")
      setEnviar(false)
    },5000);
    setTimeout(()=>{
      setStatus('Seu pedido foi entregue!!')
      setEnviar(false)
    },10000);
    

  }









  return (
    <>
      
    </>
  )
}

export default Pedido
