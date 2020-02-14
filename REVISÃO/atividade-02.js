let precoUnitario, quantidade, totalgeral = 0, totalProduto;


function calcularTotal(){
    precoUnitario = document.querySelector('#preco').value;
    quantidade = document.querySelector('#quantidade').value;
    totalProduto = precoUnitario * quantidade;
    document.querySelector('#total-produto').innerHTML = totalProduto;

    
}

function adicionarCarrinho(){
    let produto = document.querySelector('#produto').value;
    let linha = "<tr>";
    linha +="<td>" + produto + "</td>";
    linha +="<td>" + quantidade + "</td>";
    linha +="<td>" + precoUnitario + "</td>";
    linha +="<td>" + totalProduto + "</td>";
    linha += "</tr>";
    document.querySelector("#lista-produtos").innerHTML += linha;
    atualizarTotal();

    limparCampos()
}

function atualizarTotal(){
    totalgeral += totalProduto;
    document.querySelector('#total-geral').innerHTML = totalgeral;
}


function limparCampos(){
    document.querySelector('#produto').value = "";
    document.querySelector('#quantidade').value = "";
    document.querySelector('#preço').value = "";
    document.querySelector('#total-produto').innerHTML = "";
}

function BemVindo(){
    let dataCompleta = new Date();
    console.log(dataCompleta);
    console.log(dataCompleta.getDay());
    console.log(dataCompleta.getDate());
    console.log(dataCompleta.getMonth());
    console.log(dataCompleta.getHours());
    console.log(dataCompleta.getMinutes());
    let hora = dataCompleta.getHours();
    if(hora < 12){
        document.querySelector("#mensagem").innerHTML = "Bom Dia";
    }else if(hora < 19){ 
        document.querySelector("#mensagem").innerHTML = "Boa Tarde";
    }else{
        document.querySelector("#mensagem").innerHTML = "Boa Noite";
    }
}   