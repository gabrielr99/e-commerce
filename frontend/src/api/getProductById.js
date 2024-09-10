export async function getProductById(productId) {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
  const API_PRODUCT_ID = `https://api.mercadolibre.com/items/${productId}`;
  const response = await fetch(API_PRODUCT_ID);
  const product = await response.json();
  return product;
}