import React from 'react';
import get from 'lodash/get';
import Link from 'gatsby-link';
import Menu from '../Menu';
import Links from '../Links';
import logo from '../../assets/images/goat-balance.svg';
import './style.scss';

class Sidebar extends React.Component {
  render() {
    const { location } = this.props;
    const { author, subtitle, copyright, menu } = this.props.data.site.siteMetadata;
    const isHomePage = get(location, 'pathname', '/') === '/';

    /* eslint-disable jsx-a11y/img-redundant-alt */
    const authorBlock = (
      <div>
        <Link to="/">
          <img
            src={logo}
            className="sidebar__author-photo"
            width="75"
            height="75"
            alt={'Balance Board Logo'}
          />
        </Link>

        <p className="sidebar__author-subtitle">{subtitle}</p>
      </div>
    );
    /* eslint-enable jsx-a11y/img-redundant-alt */

    return (
      <div className="sidebar">
        <div className="sidebar__inner">
          <div className="sidebar__author">
            {authorBlock}
          </div>
          <div>
            <Menu data={menu} />
            <Links data={author} />
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
