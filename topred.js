// 2023-01-16 10:28

if (!$response.body) $done({});
const url = $request.url;
let body = $response.body;

if (url.includes("/index-")) {
  body=body.replace(/routes:.*}\)/g,"routes:[]})");
}

$done({ body });
