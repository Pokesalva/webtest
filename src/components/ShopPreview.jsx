import { shopItems } from "../data/content";

export default function ShopPreview() {
  return (
    <section id="tienda" className="section">
      <div className="container">
        <p className="eyebrow">Tienda</p>
        <h2>Piezas disponibles</h2>
        <div className="shop-grid">
          {shopItems.map((item) => (
            <article className="product-card" key={item.id}>
              <div className="product-card__image">[ foto de {item.name} ]</div>
              <div className="product-card__body">
                <h3 style={{ fontSize: "1.1rem", margin: 0 }}>{item.name}</h3>
                <span className="product-card__price">{item.price}</span>
                <p>{item.description}</p>
                <button
                  className="btn btn--outline"
                  onClick={() =>
                    alert(
                      "Botón placeholder: acá iría el flujo de compra/pago (Stripe, WhatsApp, mail, etc.)."
                    )
                  }
                >
                  Agregar al carro
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
