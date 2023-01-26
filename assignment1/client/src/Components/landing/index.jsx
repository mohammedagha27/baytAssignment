import { Link, useOutletContext } from 'react-router-dom';
import './style.css';

// eslint-disable-next-line react/prop-types
export default function LandingPage() {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useOutletContext();
  return (
    <>
      <section className="section-one">
        <div className="container">
          <h1 className="sitename">Aligrandpa</h1>
          <p className="landingp">All the tech you need in one click</p>
          <Link to="/products" className="home-button">
            Browse Our Products
          </Link>
        </div>
      </section>

      <section className="section-two">
        <div className="container-two">
          <div className="container-two-content content">
            <h1 className="sitename">Our Vision</h1>
            <p className="landingp">
              Technology made people’s lives easier and more luxurious, while
              also generating revenue for businesses. People and industries
              gradually began to rely on technology to get things done because
              it was faster and easier, but this dependence has now grown to the
              point that we are becoming slaves to the very technologies we
              invented.
            </p>
            <p className="landingp">
              We’re here to sell you our products, become our slave and give us
              your money hehe
            </p>
          </div>
          <div className="container-two-content content-image">
            <img
              alt="background"
              src="https://images.unsplash.com/photo-1539683255143-73a6b838b106?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80"
            />
          </div>
        </div>
      </section>
    </>
  );
}
