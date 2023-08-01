import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom"
import {ReactComponent as CwrwnLogo} from '../../assets/crown.svg'
import './navigation.styles.css';

const Navigation = () => {
    return (
      <Fragment>
        <div class="navigation">
            <Link className="logo-container" to='/'>
                <CwrwnLogo className="logo" />
            </Link>
          
          <div className="nav-links-container">
            <Link className="nav-link" to='/shop'>
                    Shop
            </Link><Link className="nav-link" to='/sign-in'>
                    Sign In
            </Link>
          </div>

        </div>
        <Outlet/>
      </Fragment>
        
    )
};

export default Navigation;