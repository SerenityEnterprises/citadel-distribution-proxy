# Citadel Distribution Proxy

A simple proxy server to use with Citadel. It uses the `/api/v1/proxied_get` endpoint to pass along the requester's IP to the Citadel distribution server. This ensures correct functionality of Citadel's user-sharing detection, as otherwise every end user's IP would be logged as the IP of the proxy server.

## Usage

```bash
$ yarn install
$ yarn build
$ $EDITOR .env # Specify your Citadel API key and the target application's identifier
$
$ node build/index.js
```
