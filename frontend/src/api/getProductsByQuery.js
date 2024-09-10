export async function getProductsByQuery(query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  const products = await response.json();
  return products;
}