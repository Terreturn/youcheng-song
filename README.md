# Youcheng Song — Personal Website

Youcheng Song’s personal website, built with HTML, CSS, and optional Vite development tools. The three sections are Biography, Photography, and Data Science and Sports Analytics.

## 📂 Project Structure

```
personal-website/
├── index.html              # Home page
├── src/
│   ├── pages/
│   │   ├── biography.html   # Personal biography
│   │   ├── photography.html # Photography gallery
│   │   └── technical.html   # Data science and sports analytics projects
│   ├── styles/
│   │   ├── base.css        # Global styles and resets
│   │   └── variables.css   # Colors, fonts, and design tokens
│   └── components/         # (Ready for future React/JS components)
├── public/                 # Static assets (images, icons)
├── package.json            # Project configuration
└── vite.config.js          # Build configuration
```

## 🛠 How to Customize

### 1. Changing Text Content
Open any `.html` file in a text editor (like VS Code, Notepad, or TextEdit). Look for the text between the tags and replace it with your own.

**Example (index.html):**
```html
<!-- Change specific text -->
<h1 class="text-display fade-in-up">Youcheng<br>Song</h1>
<!-- To: -->
<h1 class="text-display fade-in-up">John Doe.<br>Developer.<br>Creator.</h1>
```

### 2. Updating the Photography Gallery
1.  Place your photo files in the `public/` folder (or create a new `images` folder inside it).
2.  Open `src/pages/photography.html`.
3.  Replace the placeholder `div`s with `img` tags:

```html
<!-- DELETE THIS: -->
<div class="photo-item"><div class="photo-placeholder">Photo 1</div></div>

<!-- ADD THIS: -->
<div class="photo-item">
    <img src="/images/my-photo.jpg" alt="Description of photo" loading="lazy">
</div>
```

### 3. Adding Data Science and Sports Analytics Projects
Open `src/pages/technical.html`. Copy and paste the `<div class="project-card">...</div>` block to create a new entry.

```html
<div class="project-card">
  <div class="project-thumbnail">
     <!-- Add an image here if you want -->
     <img src="/path/to/screenshot.png" alt="Project Screenshot">
  </div>
  <div class="project-content">
    <div class="project-title">My New Project</div>
    <p class="project-desc">Description of what you built.</p>
    <div class="tags">
      <span class="tag">Python</span>
      <span class="tag">AI</span>
    </div>
    <a href="https://github.com/yourusername/project" class="project-link">View Source &rarr;</a>
  </div>
</div>
```

### 4. Changing Colors & Fonts
All design settings are stored in **`src/styles/variables.css`**.
*   **To change the background color:** Edit `--color-bg`.
*   **To change the accent color (links/buttons):** Edit `--color-accent`.
*   **To change fonts:** Edit `--font-family-base`.

### 5. Updating the Biography
Open `src/pages/biography.html` and edit the text in the **About me** section. Replace the short introduction and the placeholder paragraph with your biography, education, experience, and interests. The page currently uses only Youcheng Song's name and the site's existing subject areas; no academic or professional history has been added.

---

## 🚀 How to Run

### Method 1: Simple (No Installation)
Just double-click **`index.html`** to open it in your web browser. This works perfectly for viewing the site.

### Method 2: Developer Mode (With Node.js)
If you want to use the modern development tools (hot-reloading, optimization):

1.  **Install Dependencies:**
    ```bash
    npm install
    ```
2.  **Start Dev Server:**
    ```bash
    npm run dev
    ```
3.  **Build for Production (Minified):**
    ```bash
    npm run build
    ```


## GitHub Pages

The site is prepared for publication from the `main` branch, `/(root)` directory of `Terreturn/youcheng-song`. The `.nojekyll` file lets GitHub Pages serve the HTML and CSS directly; no Node.js build is required for this deployment.

- Website address: https://terreturn.github.io/youcheng-song/
- In repository Settings → Pages, choose **Deploy from a branch**, **main**, and **/(root)**.
- After Pages is enabled, pushing changes to `main` automatically updates the website.
- For this direct deployment, put images in an `images/` folder at the repository root. From either page in `src/pages/`, reference them as `../../images/photo.jpg` so the repository subpath is preserved. The `public/` examples above apply to Vite development and builds.
- Photography currently contains placeholders. Data science and sports analytics projects are marked as coming soon until real project details are supplied.
