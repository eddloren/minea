function sanitizeURL(uri) {
  let url = uri.toLowerCase();
  url = decodeURIComponent(url);
  url = url.replace(/[^a-zA-Z0-9._-]/g, '');
  url = url.replace(/\//g, '/');
  let anchor = url.match(/#.*/);
  if (anchor) {
    url = url.replace(/#.*/, '');
  }
  return url;
}
