module.exports = {
  '{packages,core}/**/*': [
    'pnpm --reporter=silent lint:fix',
    'pnpm --reporter=silent format:fix'
  ],
  '{packages,core}/**/*.{ts,tsx}': "bash -c 'pnpm types:check'"
}
