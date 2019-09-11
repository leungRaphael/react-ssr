import React from 'react';
import Koa from 'koa';
import ReactDOMServer from "react-dom/server";
import routes from './router';
import templating from './templating';

const app = new Koa();

// const App = () => <div>hello koa ssr</div>

// app.use(ctx => {
//   ctx.body = ReactDOMServer.renderToString(<App/>)
// })
app.use(templating);
app.use(routes.routes(), routes.allowedMethods());

app.listen(9000, ()=> {
  console.log('node服务已启动，请访问localhost: http://localhost:9000')
})