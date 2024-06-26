import { logoutAction } from '../../store/user-process/api-action';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthCheckedStatus, getUserData } from '../../store/user-process/selectors';
import { Link } from 'react-router-dom';
import { getFavoritesCount } from '../../store/favorite-data/selector';
import { HeaderLogo } from './header-logo';

export function Header(): JSX.Element {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector(getUserData);
  const favoriteOffersCount = useAppSelector(getFavoritesCount);
  const isAuthed = useAppSelector(getAuthCheckedStatus);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <HeaderLogo />
          </div>
          <nav className="header__nav">
            {isAuthed ? (
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to="/favorites">
                    <div className="header__avatar-wrapper user__avatar-wrapper"
                      style={{backgroundImage: `url(${userInfo?.avatarUrl})`, borderRadius: '50%'}}
                    >
                    </div>
                    <span className="header__user-name user__name">{userInfo?.email}</span>
                    <span className="header__favorite-count">{favoriteOffersCount}</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link
                    className="header__nav-link"
                    onClick={() => {
                      dispatch(logoutAction());
                    }}
                    to="/"
                  >
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to="/login">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>
              </ul>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
