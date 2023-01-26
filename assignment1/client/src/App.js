import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './Components/header';
import Footer from './Components/footer';

function App() {
  const [userData, setUserdata] = useState({ loggedIn: false, checking: true });
  useEffect(() => {
    fetch('/api/v1/isLogged')
      .then((data) => data.json())
      .then((data) => {
        if (data.istoken) {
          setUserdata({ loggedIn: true, checking: false, ...data });
        } else {
          setUserdata({ loggedIn: false, checking: false });
        }
      });
  }, []);

  return (
    <>
      <Header user={userData} />
      <div className="main" style={{ minHeight: '100vh' }}>
        {userData.checking ? (
          <div>loading</div>
        ) : (
          <Outlet context={[userData, setUserdata]} />
        )}
      </div>
      <Footer />
    </>
  );
}
export default App;
