import net from 'net';
import { router } from "./router.js";
import { Request } from "./request.js";
const server = net.createServer((socket) => {
  socket.on('data', (data) => {
    console.log('HTTP Request', data.toString("utf-8"));
    const request = new Request(data.toString("utf-8"));
    const response = router(request);
    socket.write(response.toString());
  });

  socket.on('end', () => {
    console.log('Client disconnected');
  });
});


server.listen("3000", "0.0.0.0", () => {
  console.log('Server listening on port 3000');
})

// /users/1
