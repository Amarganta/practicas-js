const Precio = ({ valor, moneda }) => {
  try {
    return new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: moneda,
    }).format(valor);
  } catch (error) {
    return "Código de divisa ISO erroneo";
  }
};
export { Precio };
