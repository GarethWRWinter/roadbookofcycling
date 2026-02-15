import { createVercelCompleteHandler } from 'netlify-cms-oauth-provider-node';

// Create the handler lazily at request time so misconfiguration doesn't crash module init.
export default async function handler(req, res) {
  const fn = createVercelCompleteHandler({}, { useEnv: true });
  return fn(req, res);
}
