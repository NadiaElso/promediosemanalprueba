let vendedor1 = [
  32558,
  36165,
  34240,
  39273,
  34360,
  21347,
  20869,
  21493,
  23062,
  31908,
  30369,
  30652
];
let vendedor2 = [
  27520,
  31480,
  24053,
  34823,
  32942,
  38477,
  23756,
  21413,
  26699,
  22045,
  25625,
  26855
];
let vendedor3 = [
  20584,
  33473,
  34300,
  24598,
  33955,
  24040,
  39173,
  25542,
  25105,
  26759,
  29790,
  36218
];
let vendedor4 = [
  27243,
  38774,
  21246,
  30691,
  24542,
  39771,
  31807,
  31641,
  20850,
  29837,
  37182,
  28006
];
let vendedor5 = [
  23334,
  32687,
  25217,
  26844,
  27033,
  35244,
  25702,
  25781,
  35525,
  34874,
  38842,
  20562
];

function promediosemanalentrelosvendedores(
  array: number[] = [],
  array1: number[] = [],
  array2: number[] = [],
  array3: number[] = [],
  array4: number[] = []
) {
  let semana1: number;
  semana1 = 0;
  let semana2: number;
  semana2 = 0;
  let semana3: number;
  semana3 = 0;
  let semana4: number;
  semana4 = 0;
  let semana5: number;
  semana5 = 0;
  let semana6: number;
  semana6 = 0;
  let semana7: number;
  semana7 = 0;
  let semana8: number;
  semana8 = 0;
  let semana9: number;
  semana9 = 0;
  let semana10: number;
  semana10 = 0;
  let semana11: number;
  semana11 = 0;
  let semana12: number;
  semana12 = 0;
  let promedio: number;
  promedio = 0;
  let semanapromedioconsulta: number;
  semanapromedioconsulta = Number(
    prompt("ingrese numero de semana que quiere consultar")
  );
  let nombredelvendedor: any;
  nombredelvendedor = null;

  let nombre: string;
  nombre = "";

  if ((nombredelvendedor = array)) {
    nombre = "Camila";
  } else if ((nombredelvendedor = array1)) {
    nombre = "Franco";
  } else if ((nombredelvendedor = array2)) {
    nombre = "Sofia";
  } else if ((nombredelvendedor = array3)) {
    nombre = "Matias";
  } else if ((nombredelvendedor = array4)) {
    nombre = "Agustina";
  }
  for (let index = 0; index < array.length; index++) {
    for (let index = 0; index < array1.length; index++) {
      for (let index = 0; index < array2.length; index++) {
        for (let index = 0; index < array3.length; index++) {
          for (let index = 0; index < array4.length; index++) {
            if (array[0] && array1[0] && array2[0] && array3[0] && array4[0]) {
              semana1 =
                array[0] + array1[0] + array2[0] + array3[0] + array4[0];
            }
            if (array[1] && array1[1] && array2[1] && array3[1] && array4[1]) {
              semana2 =
                array[1] + array1[1] + array2[1] + array3[1] + array4[1];
            }
            if (array[2] && array1[2] && array2[2] && array3[2] && array4[2]) {
              semana3 =
                array[2] + array1[2] + array2[2] + array3[2] + array4[2];
            }
            if (array[3] && array1[3] && array2[3] && array3[3] && array4[3]) {
              semana4 =
                array[3] + array1[3] + array2[3] + array3[3] + array4[3];
            }
            if (array[4] && array1[4] && array2[4] && array3[4] && array4[4]) {
              semana5 =
                array[4] + array1[4] + array2[4] + array3[4] + array4[4];
            }
            if (array[5] && array1[5] && array2[5] && array3[5] && array4[5]) {
              semana6 =
                array[5] + array1[5] + array2[5] + array3[5] + array4[5];
            }
            if (array[6] && array1[6] && array2[6] && array3[6] && array4[6]) {
              semana7 =
                array[6] + array1[6] + array2[6] + array3[6] + array4[6];
            }
            if (array[7] && array1[7] && array2[7] && array3[7] && array4[7]) {
              semana8 =
                array[7] + array1[7] + array2[7] + array3[7] + array4[7];
            }
            if (array[8] && array1[8] && array2[8] && array3[8] && array4[8]) {
              semana9 =
                array[8] + array1[8] + array2[8] + array3[8] + array4[8];
            }
            if (array[9] && array1[9] && array2[9] && array3[9] && array4[9]) {
              semana10 =
                array[9] + array1[9] + array2[9] + array3[9] + array4[9];
            }
            if (
              array[10] &&
              array1[10] &&
              array2[10] &&
              array3[10] &&
              array4[10]
            ) {
              semana11 =
                array[10] + array1[10] + array2[10] + array3[10] + array4[10];
            }
            if (
              array[11] &&
              array1[11] &&
              array2[11] &&
              array3[11] &&
              array4[11]
            ) {
              semana12 =
                array[11] + array1[11] + array2[11] + array3[11] + array4[11];
            }
          }
        }
      }
    }
  }
  if ((semanapromedioconsulta = 1)) {
    promedio = semana1 / 5;
  }
  if ((semanapromedioconsulta = 2)) {
    promedio = semana2 / 5;
  }
  if ((semanapromedioconsulta = 3)) {
    promedio = semana3 / 5;
  }
  if ((semanapromedioconsulta = 4)) {
    promedio = semana4 / 5;
  }
  if ((semanapromedioconsulta = 5)) {
    promedio = semana5 / 5;
  }
  if ((semanapromedioconsulta = 6)) {
    promedio = semana6 / 5;
  }
  if ((semanapromedioconsulta = 7)) {
    promedio = semana7 / 5;
  }
  if ((semanapromedioconsulta = 8)) {
    promedio = semana8 / 5;
  }
  if ((semanapromedioconsulta = 9)) {
    promedio = semana9 / 5;
  }
  if ((semanapromedioconsulta = 10)) {
    promedio = semana10 / 5;
  }
  if ((semanapromedioconsulta = 11)) {
    promedio = semana11 / 5;
  }
  if ((semanapromedioconsulta = 12)) {
    promedio = semana12 / 5;
  }

  console.log(promedio);
  return promediosemanalentrelosvendedores;
}

promediosemanalentrelosvendedores(
  vendedor1,
  vendedor2,
  vendedor3,
  vendedor4,
  vendedor5
);
