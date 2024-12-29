# Vikasalaya Foundation Website

## Core Technologies
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS-in-JS
- **State Management**: React Hooks
- **Animations**: Framer Motion
- **Media**: React YouTube, React Social Media Embed
- **Maps**: React Leaflet
- **Payment**: Razorpay
- **Meeting Scheduler**: Cal.com

## Project Structure

### Key Files
- Root Layout: [`app/layout.tsx`](app/layout.tsx) - Global layout configuration
- Entry Point: [`app/page.tsx`](app/page.tsx) - Main landing page
- Type Definitions: [`tsconfig.json`](tsconfig.json) - TypeScript configuration

## Core Features

### Authentication & Security
- Environment variables management
- Secure payment integration with Razorpay
- Protected API routes

### UI/UX
- Responsive design with mobile-first approach
- Smooth animations using Framer Motion
- Custom gradient components
- Accessible UI components

### Performance
- Image optimization with Sharp
- Dynamic imports for code splitting
- Suspense boundaries for loading states
- Client-side caching strategies

## Page Architecture

### Home Page
Entry point: [`app/page.tsx`](app/page.tsx)
Components:
- Hero Section: [`components/home/hero-section.tsx`](components/home/hero-section.tsx)
- Key Areas Section
- Get Involved Section: [`components/home/get-involved-section.tsx`](components/home/get-involved-section.tsx)
- FAQ Section: [`components/home/faq-section.tsx`](components/home/faq-section.tsx)

### About Page
Source: [`app/about/page.tsx`](app/about/page.tsx)
- Mission & Vision statements
- Core values with interactive tooltips
- Team member profiles with social links

### Programs Page
Source: [`app/programs/page.tsx`](app/programs/page.tsx)
- Dynamic program rendering
- Interactive subprogram displays
- Image galleries

### Resources Page
Source: [`app/resources/page.tsx`](app/resources/page.tsx)
- Document management
- Media galleries
- 

### Contact Page
Source: [`app/contact/page.tsx`](app/contact/page.tsx)
- Interactive map integration
- Contact form
- Social media links
- Calendar scheduling

### Donate Page
Source: [`app/donate/page.tsx`](app/donate/page.tsx)
- Razorpay integration
- Custom amount selection
- Offline payment options

## Development Setup

### Prerequisites
- Node.js 18+
- npm/yarn
- Git

### Installation
1. Clone the repository
2. Install dependencies: `npm install`
3. Create `.env.local` with required environment variables
4. Run development server: `npm run dev`

## Build & Deployment
- Build command: `npm run build`
- Production start: `npm start`

## Additional Resources
- [Package Dependencies](package.json)
- [Git Configuration](.gitignore)
- [TypeScript Config](tsconfig.json)