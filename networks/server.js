import net from 'net';

const server = net.createServer((socket) => {
  socket.on('data', (data) => {
    console.log('Received data from client:', data.toString("utf-8"));
    socket.write('Hello from server!');
  });

  socket.on('end', () => {
    console.log('Client disconnected');
  });
});


server.listen("3000", "0.0.0.0", () => {
  console.log('Server listening on port 3000');
})
