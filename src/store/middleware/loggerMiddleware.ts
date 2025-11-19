import { Middleware } from 'redux';

export const loggerMiddleware: Middleware = (store) => (next) => (action) => {
  console.log('DISPATCH', action);
  const result = next(action);
  console.log('NEW STATE', store.getState());
  return result;
};
