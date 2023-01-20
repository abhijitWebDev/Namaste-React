const Title = () => (
    <a href="/">
      <img
        src="https://th.bing.com/th/id/OIP._nsBEPa9cV8OUb_96KNxZAHaHa?pid=ImgDet&rs=1"
        alt="logo"
        className="logo"
      />
    </a>
  );
  
  const HeaderComponent = () => {
    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default HeaderComponent;