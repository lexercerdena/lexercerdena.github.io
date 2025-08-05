# Frontend Engineer Portfolio

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. This portfolio showcases the skills, projects, and experience of a frontend engineer with a beautiful, animated interface.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark theme and gradient accents
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Beautiful animations using Framer Motion
- **Interactive Components**: Hover effects, smooth scrolling, and interactive elements
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Fast Performance**: Built with Vite for optimal performance
- **Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **React Icons** - Comprehensive icon library
- **PostCSS** - CSS processing with autoprefixer

## 📋 Prerequisites

Before running this project, make sure you have Node.js installed on your system:

- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js)

## 🚀 Getting Started

### 1. Install Node.js

If you don't have Node.js installed, download and install it from [nodejs.org](https://nodejs.org/).

### 2. Install Dependencies

Once Node.js is installed, run the following command in your terminal:

```bash
npm install
```

### 3. Start Development Server

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### 4. Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### 5. Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

## 🎨 Customization

### Colors and Theme

The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ... more shades
  },
  dark: {
    100: '#1f2937',
    200: '#111827',
    300: '#0f172a',
  }
}
```

### Content

Update the content in each component file to match your personal information:

- **Hero.jsx**: Update name, tagline, and social links
- **About.jsx**: Update personal description and stats
- **Skills.jsx**: Update skills and proficiency levels
- **Projects.jsx**: Add your own projects
- **Experience.jsx**: Update work history
- **Contact.jsx**: Update contact information

### Images

Replace the placeholder images in the projects section with your own project screenshots. You can use services like:

- [Unsplash](https://unsplash.com/) for high-quality stock photos
- [Cloudinary](https://cloudinary.com/) for image optimization
- [ImgBB](https://imgbb.com/) for image hosting

## 🌐 Deployment

### GitHub Pages

This project is configured for GitHub Pages deployment. The `vite.config.js` includes the correct base path:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/lexercerdena.github.io/'
})
```

### Other Platforms

For other deployment platforms, update the base path in `vite.config.js`:

- **Netlify**: Remove the base path or set to `'/'`
- **Vercel**: Remove the base path or set to `'/'`
- **Custom Domain**: Set to your domain path

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Production-ready motion library for React
- [React Icons](https://react-icons.github.io/react-icons/) - Popular icon library

## 📞 Support

If you have any questions or need help with customization, feel free to reach out!

---

**Happy Coding! 🚀** 