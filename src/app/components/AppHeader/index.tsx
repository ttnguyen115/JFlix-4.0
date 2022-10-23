import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as SearchIcon } from '../../../assets/favicons/searchIcon.svg';
import { ReactComponent as SignInIcon } from '../../../assets/favicons/signinIcon.svg';
import AppLogo from '../../../assets/images/logo.svg';
import { BurgerButton } from './BurgerButton';
import './styles.scss';

export interface AppHeaderProps {}

export function AppHeader(props: AppHeaderProps) {
  const [activeHeader, setActiveHeader] = React.useState(false);
  const handleActiveHeader = () => setActiveHeader(!activeHeader);

  return (
    <header className="AppHeader">
      <div className="container">
        <div className="AppHeader-content">
          <BurgerButton
            activeHeader={activeHeader}
            handleActiveHeader={handleActiveHeader}
          />
          <Link to="/" className="logo">
            <img src={AppLogo} alt="JFlix logo" />
          </Link>
          <div className="actions">
            <button type="button" className="actions-search">
              <SearchIcon />
            </button>
            <Link to="/signin" className="actions-user">
              <span>Sign in</span>
              <SignInIcon />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
