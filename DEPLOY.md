# Deploying Marquee

1. Set the account credentials (already wired for this project's accounts):
   `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`.
2. `npm install && npm run build`
3. `npx wrangler d1 migrations apply marquee-invitations --remote` (first time only)
4. `npx wrangler deploy`
5. The live invitation is at `https://marquee-invitation.<your-subdomain>.workers.dev`.

The project repo also has `scripts/deploy/deploy-site.sh marquee-invitation ACCOUNT2`
from the studio root, which does all of the above in one step.
