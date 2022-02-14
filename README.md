# My Website

This is a [Next.js](https://nextjs.org/) project created to show everything about me, experience, certificates, skills, etc. You can visit [INSERT LINK].

## Libraries

This project uses these libraries:

- tailwindcss 3
- date-fns
- supabase

## Development

1. Install the dependencies:

```bash
npm install
# or
yarn install
```

2. Setup the environment variables, where we need to setup our supabase keys

```bash
cp .env.example .env.development.local
```

3. Run the project:

```bash
npm run dev
# or
yarn dev
```

## Tasks

- [x] Create Home Page
- [x] Create About Me Page
- [x] Create Resume Page
- [x] Create Contact Page
- [x] Integrate form with [Formspark](https://formspark.io/)
- [x] Add supabase
  - [ ] Add tables and structured data
  - [ ] Multilingual data
- [x] Support multilingual pages
- [ ] Add language selector
- [ ] Add Recaptcha

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
