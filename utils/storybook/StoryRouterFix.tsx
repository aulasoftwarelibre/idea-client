/* tslint:disable */

import { Component } from 'react';
import Router from 'next/router';
import { action } from '@storybook/addon-actions';
import PropTypes from 'prop-types';

const actionWithPromise = (path: string) => {
  action('clicked link')(path);
  return new Promise((_, reject) => reject());
};

const mockedRouter = {
  push: actionWithPromise,
  replace: actionWithPromise,
  prefetch: () => {},
  route: '/index',
  pathname: '/index'
};

// @ts-ignore
Router.router = mockedRouter;

const withMockRouterContext = (mockRouter: any) => {
  class MockRouterContext extends Component {
    public getChildContext() {
      return {
        router: { ...mockedRouter, ...mockRouter }
      };
    }
    public render() {
      return this.props.children;
    }
  }

  // @ts-ignore
  MockRouterContext.childContextTypes = {
    router: PropTypes.object
  };

  return MockRouterContext;
};

export const StorybookRouterFix = withMockRouterContext(mockedRouter);
