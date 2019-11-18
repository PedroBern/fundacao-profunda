// f1 e f2 de acordo com
// http://www.ufjf.br/nugeo/files/2009/11/GF06-CapCargaProf-por-meio-SPT-2009.pdf
// pag 4

export default [
  {
    nome: 'Fuste quadrada',
    quadrada: true,
    f1: 1.75,
    f2: 3.50,
    variacoes: [
      {
        secao: 0.15,
        carga: 150,
        d: 0.60,
        a: 0.30,
        comprimento: [3, 8],
      },
      {
        secao: 0.20,
        carga: 200,
        d: 0.60,
        a: 0.30,
        comprimento: [3, 12],
      },
      {
        secao: 0.25,
        carga: 300,
        d: 0.65,
        a: 0.35,
        comprimento: [3, 12],
      },
      {
        secao: 0.30,
        carga: 400,
        d: 0.75,
        a: 0.40,
        comprimento: [3, 12],
      },
      {
        secao: 0.35,
        carga: 500,
        d: 0.90,
        a: 0.40,
        comprimento: [3, 12],
      },
      {
        secao: 0.40,
        carga: 700,
        d: 1.00,
        a: 0.50,
        comprimento: [3, 12],
      },
    ]
  },
  {
    nome: 'Fuste circular',
    f1: 1.75,
    f2: 3.50,
    variacoes: [
      {
        secao: 0.20,
        carga: 200,
        d: 0.60,
        a: 0.30,
        comprimento: [4, 10],
      },
      {
        secao: 0.25,
        carga: 300,
        d: 0.65,
        a: 0.30,
        comprimento: [4, 14],
      },
      {
        secao: 0.30,
        carga: 400,
        d: 0.75,
        a: 0.35,
        comprimento: [4, 16],
      },
      {
        secao: 0.35,
        carga: 550,
        d: 0.90,
        a: 0.40,
        comprimento: [4, 16],
      },
      {
        secao: 0.40,
        carga: 700,
        d: 1.00,
        a: 0.50,
        comprimento: [4, 16],
      },
      {
        secao: 0.50,
        carga: 1000,
        d: 1.30,
        a: 0.50,
        comprimento: [4, 16],
      },
      {
        secao: 0.60,
        carga: 1500,
        d: 1.50,
        a: 0.50,
        comprimento: [4, 16],
      },
    ]
  },
  {
    nome: 'Strauss',
    f1: 4.2,
    f2: 3.8,
    variacoes: [
      {
        secao: 0.25,
        carga: 200,
        d: 0.75,
        a: 0.20,
        comprimento: [3, 12],
      },
      {
        secao: 0.32,
        carga: 300,
        d: 1.00,
        a: 0.20,
        comprimento: [3, 15],
      },
      {
        secao: 0.38,
        carga: 450,
        d: 1.20,
        a: 0.25,
        comprimento: [3, 20],
      },
      {
        secao: 0.45,
        carga: 600,
        d: 1.35,
        a: 0.30,
        comprimento: [3, 20],
      },
      {
        secao: 0.55,
        carga: 800,
        d: 1.65,
        a: 0.35,
        comprimento: [3, 20],
      },
    ]
  },
  {
    nome: 'Franki',
    f1: 2.5,
    f2: 5.0,
    variacoes: [
      {
        secao: 0.35,
        carga: 550,
        d: 1.20,
        a: 0.70,
        comprimento: [3, 16],
      },
      {
        secao: 0.40,
        carga: 750,
        d: 1.30,
        a: 0.70,
        comprimento: [3, 22],
      },
      {
        secao: 0.52,
        carga: 1300,
        d: 1.50,
        a: 0.80,
        comprimento: undefined,
      },
      {
        secao: 0.60,
        carga: 1700,
        d: 1.70,
        a: 0.80,
        comprimento: undefined,
      },
    ]
  },
]
