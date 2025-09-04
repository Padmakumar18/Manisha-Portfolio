# Personal Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS, perfect for freshers and new developers to showcase their skills and projects.

## 🌟 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Fast Loading**: Optimized for performance with minimal dependencies
- **Easy Customization**: Well-structured code that's easy to modify
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 🚀 Sections Included

1. **Hero Section** - Name, professional photo placeholder, and resume download
2. **About Me** - Education, skills, and career goals
3. **Skills** - Technical and soft skills with progress bars
4. **Projects** - Showcase of 4 sample projects with links
5. **Contact** - Contact form and social media links
6. **Footer** - Copyright and additional links

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS (via CDN)
- **Font**: Inter (Google Fonts)
- **Icons**: Heroicons (SVG)
- **Build Tool**: Create React App

## 📦 Installation & Setup

1. **Clone or download** this project to your local machine

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm start
   ```

4. **Open your browser** and visit `http://localhost:3000`

## 🎨 Customization Guide

### 1. Personal Information

**Update the following files with your information:**

#### `src/components/Hero.js`

- Replace `[Your Name]` with your actual name
- Update the professional tagline
- Add your resume file to `public/resume.pdf`

#### `src/components/About.js`

- Update education details (university, year, CGPA)
- Modify the about me description
- Update career goals and interests

#### `src/components/Contact.js` & `src/components/Footer.js`

- Replace `[your.email@example.com]` with your email
- Replace `[username]` with your GitHub username
- Replace `[username]` with your LinkedIn username

### 2. Projects Section

**Update `src/components/Projects.js`:**

- Replace sample projects with your actual projects
- Update project descriptions, tech stacks, and links
- Replace GitHub and demo links with your actual project URLs

### 3. Skills Section

**Update `src/components/Skills.js`:**

- Modify technical skills and their proficiency levels
- Update soft skills based on your strengths
- Change skill icons (emojis) if desired

### 4. Profile Photo

Replace the placeholder in `src/components/Hero.js`:

```jsx
// Replace this placeholder div with your actual photo
<div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
  <img
    src="/path-to-your-photo.jpg"
    alt="Your Name"
    className="w-full h-full object-cover"
  />
</div>
```

### 5. Colors & Styling

**Update colors in `public/index.html`:**

```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6", // Change this to your preferred primary color
        secondary: "#1E40AF", // Change this to your preferred secondary color
      },
    },
  },
};
```

### 6. Resume File

- Add your resume PDF to the `public` folder as `resume.pdf`
- Or update the download link in `Hero.js` to point to your resume location

## 📱 Mobile Responsiveness

The website is fully responsive and includes:

- Mobile-friendly navigation with hamburger menu
- Responsive grid layouts
- Touch-friendly buttons and links
- Optimized typography for all screen sizes

## 🚀 Deployment

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify
3. Your site will be live instantly!

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts to deploy

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
3. Run: `npm run deploy`

## 🎯 Performance Tips

- Images are optimized for web
- Minimal JavaScript bundle size
- CSS is loaded via CDN for faster loading
- Smooth animations that don't impact performance

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you make improvements that could benefit others, pull requests are welcome!

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out or create an issue in the repository.

---

**Happy coding! 🚀**
