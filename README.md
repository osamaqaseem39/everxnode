# EverXNode - Next.js Website

A modern, responsive website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- ⚡ **Next.js 14** - Latest version with App Router
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📱 **Responsive Design** - Mobile-first approach
- 🔧 **TypeScript** - Type-safe development
- 🚀 **Fast Performance** - Optimized for speed
- 📄 **Multiple Pages** - Home, About, Services, Contact
- 🎯 **SEO Optimized** - Built-in SEO features

## Pages

- **Home** (`/`) - Landing page with hero section and features
- **About** (`/about`) - Company information and values
- **Services** (`/services`) - Service offerings and details
- **Contact** (`/contact`) - Contact form and information

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd everxnode
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
everxnode/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── services/          # Services page
│   └── contact/           # Contact page
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   └── Footer.tsx         # Site footer
├── public/                # Static assets
│   ├── next.svg           # Next.js logo
│   └── vercel.svg         # Vercel logo
├── package.json           # Dependencies and scripts
├── next.config.js         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React 18** - UI library
- **ESLint** - Code linting

## Customization

### Styling
The project uses Tailwind CSS for styling. You can customize the design by modifying:
- `tailwind.config.ts` - Tailwind configuration
- `app/globals.css` - Global styles
- Component-specific classes

### Content
Update the content by editing the page components in the `app/` directory:
- `app/page.tsx` - Home page content
- `app/about/page.tsx` - About page content
- `app/services/page.tsx` - Services page content
- `app/contact/page.tsx` - Contact page content

### Components
Reusable components are located in the `components/` directory:
- `Header.tsx` - Navigation header
- `Footer.tsx` - Site footer

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For support, email info@everxnode.com or create an issue in the repository. 