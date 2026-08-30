const formatarMoeda = valor => 
    valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });