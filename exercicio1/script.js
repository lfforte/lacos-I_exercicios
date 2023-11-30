let conta = 0, addPedido = "S";

while(addPedido === "s" || addPedido === "S"){
    
    addPedido = prompt(`GostariaPedir outra coxinha? (S)Sim ou (N)Não`);
    conta += 5;

}
console.log(`Sua conta foi de ${conta}`);