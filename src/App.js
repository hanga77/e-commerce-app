import data from './data';

function App() {
  return (
    <div>
      <header>
        <a href="/"> Shopping Camerounais</a>
      </header>
      <main>
        <h1>Produits disponible</h1>
        <div className="products">
          {data.products.map((product) => (
            <div className="product" key={product.slug}>
              <a href={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} />
              </a>

              <div className="product-info">
                <a href={`/product/${product.slug}`}>
                  <p>{product.name}</p>
                </a>
                <p>
                  <strong>Fcfa {product.price}</strong>
                </p>
                <button>Ajouter Au Panier</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
