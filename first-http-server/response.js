export class Response {
  constructor(
    status,
    reason,
    body,
  ) {
    this.status = status;
    this.reason = reason;
    this.body = body;
  }

  toString() {
    const startLine = `HTTP/1.1 ${this.status} ${this.reason}`;
    const headers =
      `Content-Type: text/html
Server: Joseph's server
Content-Length: ${this.body.length}
Connection: close`;
    return `${startLine}\r\n${headers}\r\n\r\n${this.body}`;
  }
}
