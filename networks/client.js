import net from 'net';

const client = net.createConnection({ port: 3000, host: '127.0.0.1' });

client.on('connect', () => {
  console.log('Connected to server');
  client.write('Hello from client!');
});

client.on('data', (data) => {
  console.log('Received data from server:', data.toString("utf-8"));
  client.end(); // Close the connection after receiving data
});

client.on('end', () => {
  console.log('Disconnected from server');
});
