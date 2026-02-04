import net from 'net';
import { router } from "./router.js";
import { Request } from "./request.js";
import { loggingMiddlewareFactory, authenticationMiddlewareFactory } from './middleware.js';

const server = net.createServer((socket) => {
  console.log("A connection was made")
  socket.on('data', (data) => {
    const request = new Request(data.toString("utf-8"));

    let routerWithMiddleware = authenticationMiddlewareFactory(router);
    routerWithMiddleware = loggingMiddlewareFactory(routerWithMiddleware)
    const response = routerWithMiddleware(request);
    socket.write(response.toString());
  });

  socket.on("end", () => {
    console.log("connection ended");
  })
});


server.listen("3000", "0.0.0.0", () => {
  console.log('Server listening on port 3000');
})

// /users/1
