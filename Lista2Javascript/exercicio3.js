const jurosSimples = (cap, tax, tempo) => formatarMoeda(cap + (cap * tax * tempo));
const jurosCompostos = (cap, tax, tempo) => formatarMoeda(cap * (1 + tax) ** tempo);