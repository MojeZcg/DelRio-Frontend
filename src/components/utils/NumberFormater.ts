export default function formatearNumero(num: string) {
  // Asegura que no tenga espacios ni símbolos
  const limpio = num.replace(/\D/g, "");

  const pais = limpio.slice(0, 2);
  const area = limpio.slice(2, 5);
  const resto = limpio.slice(5);

  return `+${pais} ${area} ${resto}`;
}
