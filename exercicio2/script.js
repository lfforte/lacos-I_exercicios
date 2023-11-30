const tabuada = () => {
    const num = Number(prompt(`Digite um número:`))
    let imprime = 0;

    for (let i = 1; i <=10; i++){
        console.log(`${num * i}`);
    }
}

confirm('Deseja ver resultado de uma tabuada ?') ? tabuada(): console.log('Sair');;