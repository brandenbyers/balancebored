import React from 'react';
import Sidebar from '../components/Sidebar';

class NotFoundRoute extends React.Component {
  render() {
    return (
      <div>
        <Sidebar {...this.props} />
        <div className="content">
          <div className="content__inner">
            <div className="page">
              <h1 className="page__title">NOT FOUND</h1>
              <div className="page__body">
                <p>The page you are trying to reach does not exist.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFoundRoute;

export const pageQuery = graphql`
  query NotFoundQuery {
    site {
      siteMetadata {
        title
        subtitle
        menu {
          label
          path
        }
        author {
          name
          twitter
          instagram
          youtube
          rss
        }
      }
    }
  }
`;
