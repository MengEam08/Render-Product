import { products } from "../data/products.js";
import { CardComponent } from "../components/CardComponents.1.js";

document.addEventListener("DOMContentLoaded", () => {
  const renderArea = document.getElementById("renderArea");
  products.forEach((product) => {
    const productCardHTML = CardComponent(product);
    renderArea.innerHTML += productCardHTML;
  });
});
