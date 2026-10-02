# SMCSS Website

The official website project for the school of mathematical and computational science (SMCSS). It provides students with clear, accessible information about the society, its executives, events, services, resources, and ways to get in touch.

## Features

- Responsive layout for desktop, tablet, and mobile
- Home page with featured content and site navigation
- About, Events, Executives, Services, Resources, and Contact pages
- Event links that can direct students to the SMCSS Linktree
- Locker-rental service information
- Shared site navigation and footer

## Tech stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com/) for deployment

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) (current LTS recommended)
- npm (installed with Node.js)
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/anitaambrose28-del/SMCS-WEBSITE.git
```

Navigate to the project directory:

```bash
cd SMCS-WEBSITE
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available commands

```bash
npm run dev    # Run the local development server
npm run build  # Create an optimized production build
npm run start  # Run the production server after building
npm run lint   # Run ESLint
```

## Deployment

The recommended deployment platform is Vercel because it supports Next.js out of the box.

1. Push the project to GitHub.
2. Import the repository into [Vercel](https://vercel.com/new).
3. Keep the default Next.js build settings.
4. Deploy and connect a custom domain if needed.

Each push to the selected production branch can automatically create a new deployment.

## Integrating with Squarespace

Squarespace does not run a Next.js application directly. Deploy this project separately (for example, on Vercel), then connect it to Squarespace in one of the following ways.

### Option 1: Link to the deployed site

This is the simplest and most reliable approach. Add a navigation link, button, or announcement bar in Squarespace that points to the deployed SMCSS website, such as `https://www.example.com`.

### Option 2: Use a subdomain

Keep the primary Squarespace website on its existing domain and host this application on a subdomain such as `students.example.com` or `smcss.example.com`.

1. Deploy the app on Vercel.
2. Add the subdomain in the Vercel project’s domain settings.
3. In the DNS provider for the domain, add the DNS record Vercel specifies.
4. Add a Squarespace navigation link to the subdomain.

This approach preserves Squarespace for its existing pages while giving the student-society site its own fast, maintainable application.

### Option 3: Embed a page in Squarespace

If the Squarespace plan supports code blocks, an externally hosted page can be embedded with an iframe:

```html
<iframe
  src="https://your-deployed-site.example"
  title="SMCSS Website"
  width="100%"
  height="900"
  style="border: 0;"
></iframe>
```

Replace the URL with the deployed Vercel URL or custom domain. Test the embedded page on mobile, and confirm that the deployed site permits iframe embedding. Linking or using a subdomain is generally preferable for accessibility, analytics, and navigation.

## Project structure

```text
src/app/
├── about/       # About page
├── contact/     # Contact page
├── events/      # Events page
├── executives/  # Executive team page
├── resources/   # Student resources page
├── services/    # Services and locker rental information
├── globals.css  # Global styles
├── layout.tsx   # Shared application layout
└── page.tsx     # Home page
```

## Contributing

1. Create a branch for your change.
2. Make and test the change locally.
3. Run `npm run lint` before opening a pull request.
4. Submit a pull request with a concise description of the update.

## Contact

For questions, updates, or corrections, contact the SMCSS through the contact details published on the website.
