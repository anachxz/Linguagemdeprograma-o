const classificarTriangulo = (a, b, c) => 
    (a === b && b === c) ? 'Equilátero' : 
    (a === b || b === c || a === c) ? 'Isósceles' : 'Escaleno';