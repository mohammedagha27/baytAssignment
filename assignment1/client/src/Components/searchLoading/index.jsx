import { MagnifyingGlass } from 'react-loader-spinner';
import './style.css';

const index = () => (
  <div className="searchLoad">
    <MagnifyingGlass
      visible
      height="150"
      width="150"
      ariaLabel="MagnifyingGlass-loading"
      wrapperStyle={{}}
      wrapperClass="MagnifyingGlass-wrapper"
      glassColor="#c0efff"
      color="#e15b64"
    />
  </div>
);

export default index;
