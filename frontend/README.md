## Project Structure

```text
frontend/
├─ api/                    # Serverless API functions (chatbot)
├─ src/
│  ├─ components/
│  │  ├─ chatbot-section/ 
│  │  └─ navbar-section/
│  ├─ pages/           
│  │  ├─ portfolio-page/
│  │  ├─ blog-page/
│  │  └─ error-page/
│  ├─ App.jsx              # Router
│  └─ main.jsx             # App entry
├─ vite.config.js          # Vite configuration
└─ vercel.json             # Vercel configuration
```

## Components/Pages Sub-folders

- Assets: images and other static files.
- Components: smaller reusable UI components.
- Constants: data to be displayed.
- Hooks: custom React hooks for reusable logic.
- Services: API calls and other external interactions.