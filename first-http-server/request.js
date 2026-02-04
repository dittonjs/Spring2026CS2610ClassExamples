export class Request {
  constructor(requestString) {
    const [firstHalf, body] = requestString.split("\r\n\r\n");
    const [firstLine, ...headers] = firstHalf.split("\r\n");
    const [method, uri, version] = firstLine.split(' ');
    this.method = method;
    this.uri = uri;
    this.version = version;
    this.headers = headers.reduce((acc, header) => {
      const [name, value] = header.split(": ");
      acc.name = name;
      acc.value = value;
      return acc;
    }, {})
  }
}
