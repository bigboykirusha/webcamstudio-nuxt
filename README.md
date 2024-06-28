# Nuxt 3 Minimal Starter

This project is built using Nuxt 3, focusing on a frontend-only experience with features like reactivity, images, videos, likes, and posts, without a backend. It's optimized for a smooth and fast user experience. For more details, check the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction).

## Setup

First, install the dependencies to get started with the project:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

To start the development server and see your changes in real time, run:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

Access the server at `http://localhost:3000`.

## Production

To build the application for production, use:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

You can preview the production build locally with:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Refer to the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for detailed information on deploying to various platforms.

## Documentation

### Code Structure

This project has a comprehensive directory structure:

- **api**: Contains serverless functions to manage likes updates.
- **assets**: Includes images, fonts, icons, and style files such as CSS.
- **components**: Houses background elements and reusable components.
- **layouts**: Manages layout templates.
- **pages**: Stores routing and view templates.
- **public**: Contains publicly accessible files like favicon, robots.txt, and additional images and icons.
- **src**:
  - **assets**: Holds database-like JSON files that are essential to the application.
- **static**: Includes folders such as videos that need direct access without processing.
- **root**: Some specific configuration and operational files like `.env` (sensitive environment configurations should be handled securely).

### Important Commands

Included in the `package.json` file are scripts for development and production environments:

- `dev`: Runs the development server.
- `build`: Builds the production-ready application.
- `preview`: Previews the built application locally.

## Performance and Optimization

Optimal performance is ensured by using compressed images of suitable formats and efficient code practices. Tools like Google Lighthouse can help assess and improve the site's performance.

## SEO and Accessibility

Basic SEO is implemented with appropriate meta tags, and accessibility features are included to support various user needs.

## Security

The project ensures data transmission security with HTTPS and implements Content Security Policy (CSP) to mitigate XSS risks.

## Credits

Special thanks to [Static Forms by @hussainanjar](https://staticforms.xyz) for providing easy form integration.
This project uses several open-source libraries and resources:

- [Vue.js](https://vuejs.org/)
- [Nuxt.js](https://nuxtjs.org/)
- [Supabase](https://supabase.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)

## Need More Information?

For additional information or queries about the project, please feel free to contact the project maintainers.
