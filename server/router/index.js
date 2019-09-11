import Router from 'koa-router';
// import RouterConfig from '../../app/router';
// import { StaticRouter } from 'react-router-dom';
// import { renderToString } from 'react-dom/server';
import React from 'react';

const routes = new Router();

routes.get('/', (ctx, next) => {
  // ctx.body = renderToString(
  //   <StaticRouter location={ctx.url}>
  //     <RouterConfig />
  //   </StaticRouter>
  // )
  ctx.render({
    home: {
      title: 'node-home-title'
    }
  });
  next();
})

routes.get('/list', (ctx, next) => {
  // ctx.body = renderToString(
  //     <StaticRouter location={ctx.url}>
  //         <RouterConfig/>
  //     </StaticRouter>
  // )
  ctx.render({
    list: {
      list: [
        'node-list',
        'node-test-list',
        'node-lists'
      ]
    }
  });
  next();
})

export default routes;