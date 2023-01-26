import { Link } from 'react-router-dom';
import './style.css';

const index = () => (
  <div className="page-not-found">
    <h2>
      Page not found! return <Link to="/">home</Link>
    </h2>
    <img
      src="https://media.giphy.com/media/9J7tdYltWyXIY/giphy.gif"
      alt="page not found"
    />
  </div>
);

export default index;
