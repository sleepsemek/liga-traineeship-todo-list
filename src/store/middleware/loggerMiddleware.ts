import { Middleware } from 'redux';

export const loggerMiddleware: Middleware = () => (next) => (action) => {
  console.log('Action:', action.type, action.payload);
  return next(action);
};
