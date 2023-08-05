import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import {ReactComponent as CwrwnLogo} from '../../assets/crown.svg';
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import './navigation.styles.scss';
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component'

const Navigation = () => {

  const {currentUser, setCurrentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  }
  
    return (
      <Fragment>
        <div class="navigation">
            <Link className="logo-container" to='/'>
                <CwrwnLogo className="logo" />
            </Link>
          
          <div className="nav-links-container">
            <Link className="nav-link" to='/shop'>
                    SHOP
            </Link>
            {
                currentUser ? (
                  <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>
                  ) :
                  (<Link className="nav-link" to='/auth'>SIGN IN</Link>
            )}

            <CartIcon />
          </div>
          { isCartOpen && <CartDropDown />}
        </div>
        <Outlet/>
      </Fragment>
        
    )
};

export default Navigation;