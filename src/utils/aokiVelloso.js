//
// const resistenciaPonta = (k, n) => k * n;
// const resistenciaLateral = (a, rp) => a * rp;
// const resistenciaPontaEfetivo = (rp, f1) => rp / f1;
// const resistenciaLateralEfetivo = (rl, f2) => rl / f2;
//
// const capacidadeCarga = (
//   areaPonta,
//   resistenciaPontaEfetivo,
//   areaLateral,
//   resistenciaLateralEfetivo
// ) => (
//   areaPonta * resistenciaPontaEfetivo +
//   areaLateral * resistenciaLateralEfetivo
// )
//
// export const aokiVeloso = () => {}

export const tabelaKAlpha = [
  {
    nome: 'Areia',
    k: [10, 6],
    alpha: [1.4,1.4],
  },
  {
    nome: 'Areia siltosa',
    k: [8, 5.3],
    alpha: [2, 1.9],
  },
  {
    nome: 'Areia silto argilosa',
    k: [7, 5.3],
    alpha: [2.4, 2.4],
  },
  {
    nome: 'Areia argilosa',
    k: [6, 5.3],
    alpha: [3,3],
  },
  {
    nome: 'Areias argilo-siltosa',
    k: [5, 5.3],
    alpha: [2.8],
  },
  {
    nome: 'Argila',
    k: [2, 2.5],
    alpha: [6,6],
  },
  {
    nome: 'Argila arenosa',
    k: [3.5, 4.8],
    alpha: [2.4, 4],
  },
  {
    nome: 'Argila areno-siltosa',
    k: [3,3],
    alpha: [2.8, 4.5],
  },
  {
    nome: 'Argila siltosa',
    k: [2.2, 2.5],
    alpha: [4, 5.5],
  },
  {
    nome: 'Argila silto-arenosa',
    k: [3.3, 3],
    alpha: [3, 5],
  },
]
