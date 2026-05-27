# Ras Metal Dynamics — Website

Production-ready Next.js website for Ras Metal Dynamics (Cape Town steel fabrication).

## Tech Stack
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS 4
- Fully responsive
- Vercel-optimized

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:3000

## How to Edit Content (Single Source of Truth)

All editable business content lives in one file:

**`src/content/site.ts`**

Update the following sections as needed:
- `company` — name, tagline, years, B-BBEE status
- `contact` — phones, email, address, hours (currently placeholders)
- `services`, `industries`, `process`, `capabilities`
- `cta` primary/secondary buttons
- `trust` points

After editing, the entire site updates automatically.

## Pages Included
- Home
- About
- Services
- Capabilities
- Industries
- Contact (functional form UI — wire to Formspree/Resend for production)
- Privacy Policy

## Marketing Materials

Located in `/marketing/`:
- `brand-messaging.md`
- `company-profile.md`
- `capability-statement.md`
- `brochure-copy.md`
- `linkedin-posts.md`
- `email-outreach-sequence.md`

These are written in the exact brand voice extracted from your approved creative assets.

## Deployment to Vercel

1. Push the project to GitHub
2. Import the repo in Vercel
3. Add environment variables if using a form service
4. Deploy

The project is already configured with proper metadata, Open Graph tags, and clean SEO structure.

## Important — Before Going Live

Search `TODO` and `placeholder` in the codebase. Replace:
- All contact details in `src/content/site.ts`
- B-BBEE status and certificate details
- Exact years in business
- Physical address
- Real domain in metadata
- OG image (`public/og-image.jpg`)
- Wire the contact form to a real service
- Replace privacy policy with final legal version

## Brand Application

This site strictly follows the visual and verbal identity from your provided creative assets:
- Industrial red/orange accent palette (#C53030 primary)
- Angular RM logo treatment
- Direct, confident, technical South African trade tone
- "Steel. Reimagined." positioning
- No invented certifications or client names

## Progress Save Location

A live development mirror of this project is kept at:  
`D:\One Drive\OneDrive\Documents\Ras Metal Dynamics - Website (dev)`

## License
Internal use for Ras Metal Dynamics.

## Deploying to Vercel (Recommended)

This is the fastest and cleanest way to get the site live.

### Step-by-step (easiest method)

1. **Push the code to GitHub** (do this from your Windows machine)
   - Go to the mirrored project folder:
     `D:\One Drive\OneDrive\Documents\Ras Metal Dynamics - Website (dev)`
   - Open a terminal in that folder
   - Run these commands:

   ```bash
   git init
   git add .
   git commit -m "Initial commit - Ras Metal Dynamics website"
   git branch -M main
   ```

   - Then create a new repository on GitHub (https://github.com/new)
   - Name it something like `ras-metal-dynamics-website`
   - Copy the commands GitHub shows under “push an existing repository” and run them

2. **Deploy on Vercel**
   - Go to https://vercel.com and sign in with your GitHub account
   - Click **“Add New Project”**
   - Import the repository you just created
   - Vercel will auto-detect it’s a Next.js project
   - Click **Deploy**

   Your site will be live in under 2 minutes at something like:
   `https://ras-metal-dynamics-website.vercel.app`

3. **(Optional but recommended) Add a custom domain later**
   - You can connect your own domain (e.g. rasmetaldynamics.co.za) in the Vercel dashboard under Settings → Domains.

### Before you deploy (Important)

Make sure you have replaced the placeholder information in:
`src/content/site.ts`

At minimum update:
- Phone numbers
- Email address
- Physical address (even if just the suburb)

The contact form currently shows an alert. If you want it to actually send emails, let me know — I can connect it to a free service before deployment.

## What I need from you right now

To help you get this live cleanly, please reply with:

1. Do you have a GitHub account? (If not, create one at github.com)
2. What real contact details should I update in the site before going live?
   - Phone numbers
   - Email
   - Any address / suburb you want shown
3. Do you want the contact form to actually send emails, or is the current alert version okay for now?
4. Preferred GitHub repo name (example: `ras-metal-dynamics-website`)

Once you give me that info, I can prepare the project perfectly for launch.
