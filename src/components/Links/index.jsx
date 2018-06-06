import React from 'react';
import './style.scss';
import '../../assets/fonts/fontello-a84af556/css/fontello.css';

class Links extends React.Component {
  render() {
    const author = this.props.data;
    const links = {
      twitter: author.twitter,
      instagram: author.instagram,
      youtube: author.youtube,
      linkedin: author.linkedin,
      rss: author.rss
    };

    return (
      <div className="links">
        <ul className="links__list">
          <li className="links__list-item">
            <a href={`https://www.twitter.com/${links.twitter}`} target="_blank" >
              <i className="icon-twitter" />
            </a>
          </li>
          <li className="links__list-item">
            <a href={`https://www.instagram.com/${links.instagram}`} target="_blank" >
              <i className="icon-instagram" />
            </a>
          </li>
          <li className="links__list-item">
            <a href={`https://www.youtube.com/channel/${links.youtube}`} target="_blank" >
              <i className="icon-youtube" />
            </a>
          </li>
          <li className="links__list-item">
            <a href={links.rss} target="_blank" >
              <i className="icon-rss" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Links;
