/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import './styles.css';
import { useState, useEffect } from 'react';
import {
  useNavigate,
  useOutletContext,
  useSearchParams,
} from 'react-router-dom';
import ProductCart from '../ProductCard';
import Loading from '../searchLoading';
import NoData from '../noSearchData';

const makePages = (totalCount, pageSize) => {
  const btns = [];
  const totalPageCount = Math.ceil(totalCount / pageSize);
  let n = 1;
  for (let index = 0; index < totalCount; index += pageSize) {
    btns.push(n);
    n += 1;
  }
  return btns;
};
// eslint-disable-next-line react/prop-types
export default function Products({ userData }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(null);
  const [categoryId, setCategoryId] = useState();
  const [productsCount, setProductsCount] = useState(0);
  const [off, setoff] = useState(1);
  const [user, setUser] = useOutletContext();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  // const [query, query] = useSearchParams({});
  useEffect(() => {
    const p1 = fetch('/api/v1/products').then((res) => res.json());
    const p3 = fetch('/api/v1/products-count').then((res) => res.json());
    const p4 = fetch('/api/v1/categories').then((res) => res.json());
    const p2 = user.loggedIn && fetch(`/api/v1/cart`).then((res) => res.json());
    Promise.all([p1, p2, p3, p4]).then((values) => {
      setProductsCount(values[2][0].product_count);
      setCategories(values[3]);
      const productsInCartIds = values[1] && values[1].map((e) => e.id);
      const updatedProducts = [];
      if (values[1]) {
        values[0].forEach((product) => {
          productsInCartIds.includes(product.id)
            ? updatedProducts.push({ ...product, inCart: true })
            : updatedProducts.push({ ...product, inCart: false });
        });
      } else {
        values[0].forEach((product) => {
          updatedProducts.push({ ...product, inCart: false });
        });
      }
      if (updatedProducts.length > 0) {
        setProducts(updatedProducts);
      }
    });
  }, []);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const q = searchParams.get('q') || ' ';
    const c = categoryId || 'all';
    let timer;
    if (c) {
      setLoading(true);
      timer = setTimeout(() => {
        fetch(`api/v1/search/${q}&${c}`)
          .then((data) => data.json())
          .then((data) => {
            setProducts(data);
            setLoading(false);
          });
      }, 1000);
    } else if (q === '' && !c) {
      setLoading(true);
      fetch(`/api/v1/products`)
        .then((data) => data.json())
        .then((data) => {
          setProducts(data);
          setLoading(false);
        });
    }
    return () => clearTimeout(timer);
  }, [searchParams.get('q'), categoryId]);

  const handlePagination = (e) => {
    setoff(e.target.textContent);
    const offset = (Number(e.target.textContent) - 1) * 10;
    setLoading(true);
    fetch(`/api/v1/products/page/${offset}`)
      .then((data) => data.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  };
  return (
    <div className="container">
      <div className="filters">
        <input
          value={searchParams?.q}
          placeholder="search"
          className="search-input"
          onChange={(e) =>
            setSearchParams({
              q: e.target.value,
              category: searchParams.get('category') || 'all',
            })
          }
        />
        {categories && (
          <select
            name="category"
            id=""
            onChange={(e) => {
              setCategoryId(e.target.value);
              const category = categories.filter(
                // eslint-disable-next-line eqeqeq
                (c) => c.id == e.target.value
              )[0].name;
              setSearchParams({
                q: searchParams.get('q') || '',
                category,
              });
            }}
          >
            <option value="">All</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        )}
      </div>
      <div
        className="products-container"
        style={{ position: 'relative', paddingBottom: '100px' }}
      >
        {loading && <Loading />}
        {!loading && products.length > 0
          ? products.map((product) => (
              <ProductCart key={product.id} productData={product} user={user} />
            ))
          : !loading && <NoData />}
        {!loading && products.length > 0 && (
          <div
            className="page-btns"
            style={{
              position: 'absolute',
              bottom: '2rem',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            {productsCount &&
              makePages(productsCount, 10).map((btn) => (
                <button
                  type="button"
                  // eslint-disable-next-line no-undef, no-loop-func
                  onClick={(e) => handlePagination(e)}
                  style={{
                    backgroundColor:
                      // eslint-disable-next-line eqeqeq
                      off == btn ? '#20D1CB' : 'rgb(200,200,200)',
                    padding: '.5rem 1rem',
                    border: 'none',
                    outline: 'none',
                    color: '#fff',
                    fontSize: '18px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    margin: '0 1rem',
                  }}
                  key={btn}
                >
                  {btn}
                </button>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
