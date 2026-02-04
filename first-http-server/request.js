export class Request {
  constructor(requestString) {
    const firstLine = requestString.split("\r\n")[0];
    const [method, uri, version] = firstLine.split(' ');
    this.method = method;
    this.uri = uri;
    this.version = version;
  }
}
