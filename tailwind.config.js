import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
EOT

# 2. Ensure PostCSS Config exists
cat <<EOT > postcss.config.mjs
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
};
export default config;
EOT

# 3. Ensure Global CSS has Tailwind directives
mkdir -p app
cat <<EOT > app/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;