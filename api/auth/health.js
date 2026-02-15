export default function handler(req, res) {
  const required = [
    'ORIGIN',
    'COMPLETE_URL',
    'ADMIN_PANEL_URL',
    'OAUTH_PROVIDER',
    'OAUTH_CLIENT_ID',
    'OAUTH_CLIENT_SECRET',
  ];

  const present = Object.fromEntries(
    required.map((k) => [k, Boolean(process.env[k])])
  );

  res.statusCode = 200;
  res.setHeader('content-type', 'application/json; charset=utf-8');
  res.end(JSON.stringify({ ok: required.every((k) => present[k]), present }, null, 2));
}
