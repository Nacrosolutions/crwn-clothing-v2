
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrownLogo } from '../../assets/crown.svg';

import './navigation.scss';

const Naviagtion = () => {
  return (
    <>
      <div className='navigation'>
        <Link to='/'>
          <div className='logo-container' >

            <CrownLogo className="logo"></CrownLogo>
          </div>
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP

          </Link>

        </div>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/auth'>
            SignIn

          </Link>

        </div>


      </div>
      <Outlet />

    </>
  )
}


export default Naviagtion;