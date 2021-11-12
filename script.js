const calcular = document.getElementById('calcular');


function financiamento () {
    const v_veiculo = document.getElementById('valordoveiculo').value;
    const v_entrada = document.getElementById('valordeentrada').value;
    const juros = document.getElementById('i').value;
    const n = document.getElementById('n').value;
    const renda = document.getElementById('renda').value;
    const  resultado = document.getElementById('resultado');

    if (v_veiculo !== '' && v_entrada !== '' && juros !== '' && n !== '') {

        const PV = (v_veiculo - v_entrada);
        let i = (juros /100);
        const PMT = ((PV*(1+i)**n*(i))/((1 + i)**n-1)).toFixed(2);
        const max_p = (renda*0.3)
        

        if (PMT < max_p){
            resultado.textContent = `Olá seu financiamento foi aprovado com sucesso.  Pagamento mensal estimado de  ${PMT} do valor vinanciado de R$${PV}`;
        }else if((PMT > max_p)){
        resultado.textContent = `Olá seu financiamento foi recusado! `;
       }else{
        resultado.textContent = `Houve algum erro, verifique seus dados`;
       }
        

    }

}
calcular.addEventListener('click', financiamento)