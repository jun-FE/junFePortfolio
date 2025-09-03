# Portfolio

A modern, production-ready portfolio website built with React, TypeScript, and Vite.

## 🚀 Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Styling**: Custom CSS with utility classes
- **Package Manager**: Yarn

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg          # Site favicon
│   ├── og.png              # Open Graph image (placeholder)
│   ├── resume.pdf          # Resume download (placeholder)
│   └── _redirects          # Netlify SPA routing
├── src/
│   ├── components/
│   │   ├── Header.tsx      # Navigation header
│   │   └── Footer.tsx      # Site footer
│   ├── pages/
│   │   ├── Home.tsx        # Landing page
│   │   ├── Projects.tsx    # Projects showcase
│   │   ├── Resume.tsx      # Resume/experience
│   │   └── NotFound.tsx    # 404 page
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # App entry point
│   └── index.css           # Global styles
├── index.html              # HTML template with SEO meta tags
├── vercel.json             # Vercel deployment config
└── package.json            # Dependencies and scripts
```

## 🛠️ Development

### Prerequisites

- Node.js (v18+)
- Yarn package manager

### Getting Started

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   yarn
   ```

3. **Start development server**

   ```bash
   yarn dev
   ```

   Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build locally
- `yarn lint` - Run linter (placeholder for now)

## 🚢 Deployment

### Vercel

1. Import your repository to Vercel
2. Set build command: `yarn build`
3. Set output directory: `dist`
4. Deploy!

The `vercel.json` file handles SPA routing automatically.

### Netlify

1. Connect your repository to Netlify
2. Set build command: `yarn build`
3. Set publish directory: `dist`
4. Deploy!

The `public/_redirects` file handles SPA routing automatically.

## 🎨 Customization

### Content

- Update personal information in `src/pages/Home.tsx`
- Add your projects in `src/pages/Projects.tsx`
- Update experience in `src/pages/Resume.tsx`
- Modify contact links in `src/components/Footer.tsx`

### Styling

- Global styles are in `src/index.css`
- Uses utility-first CSS classes
- Ready for Tailwind CSS integration

### SEO

- Update meta tags in `index.html`
- Replace placeholder Open Graph image (`public/og.png`)
- Add your actual resume PDF (`public/resume.pdf`)

## 📝 Features

- ✅ Responsive design
- ✅ SEO optimized with meta tags
- ✅ Client-side routing
- ✅ TypeScript for type safety
- ✅ Production-ready build
- ✅ Deployment configurations for Vercel & Netlify
- ✅ Clean, modern UI
- ✅ Accessible navigation

## 🔧 Next Steps

1. **Add your content**: Replace placeholder text with your actual information
2. **Style customization**: Add Tailwind CSS or your preferred styling solution
3. **Add assets**: Replace placeholder images and PDF
4. **SEO optimization**: Update meta tags with your information
5. **Analytics**: Add Google Analytics or your preferred analytics solution
6. **Performance**: Optimize images and add lazy loading
7. **Testing**: Add unit tests with Vitest or Jest

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
