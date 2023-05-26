import { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";

// Utilities
import { loginUser, logoutUser } from "../../redux/user/actions";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);
 
  const { currentUser } = useSelector((state) => state.userReducer);
  const { products } = useSelector((state) => state.cartReducer);

  const dispatch = useDispatch();

  
  const productsCount = useMemo(()=>{
    return products.reduce((acc, curr) => acc + curr.quantity, 0)
  }, [products])

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLoginClick = () => {
    dispatch(loginUser({ name: "Felipe Rocha", email: "felipe@rocha.com" }));
  };

  const handleLogoutClick = () => {
    dispatch(logoutUser());
  };

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? (
          <div onClick={handleLogoutClick}>Sair</div>
        ) : (
          <div onClick={handleLoginClick}>Login</div>
        )}

        <div onClick={handleCartClick}>Carrinho ({productsCount})</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
