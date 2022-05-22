import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
//import data from '../data';

function HomeScreen() {
  const [products, setProoducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/products');
      setProoducts(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Produits disponible</h1>
      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.slug}>
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>

            <div className="product-info">
              <Link to={`/product/${product.slug}`}>
                <p>{product.name}</p>
              </Link>
              <p>
                <strong>Fcfa {product.price}</strong>
              </p>
              <button>Ajouter Au Panier</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeScreen;
