import React from 'react';
import Helmet from 'react-helmet';
import { push } from 'gatsby';
import PropTypes from 'prop-types';
import Container from './Container';
import ContainerItem from './ContainerItem';

import 'typeface-source-sans-pro'; // ugh

const style = `
  html {
    background: grey;
    font-family: 'Source Sans Pro';
    font-size: 10px; /* set for rem */
    font-weight: 100;
  }

  body {
    margin: 0;
    padding: 0;
  }
`;

export default class Page extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired
  }

  // https://next.gatsbyjs.org/docs/migrating-from-v1-to-v2/#change-navigateto-to-push
  componentDidCatch(error) {
    this.handleError(error, { exFatal: true });
    push('/404');
  }

  // see, https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror
  componentDidMount() {
    window.addEventListener('error', this.handleError);
    window.addEventListener('unhandledrejection', this.handleError);
  }

  // see, https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-google-analytics
  // see, https://developers.google.com/analytics/devguides/collection/analyticsjs/exceptions
  handleError({ message: exDescription }, options) {
    window.ga && window.ga('send', 'exception', { exDescription, exFatal: false, ...options });
  }

  render() {
    return (
      <div>
        <Helmet>
          <html lang="en" />
          <title>{this.props.title}</title>
          <style type="text/css">{style}</style>
        </Helmet>
        <Container>
          <ContainerItem>
            {this.props.children}
          </ContainerItem>
        </Container>
      </div>
    );
  }
}
