import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
    plugins: [react()],
    base: "/",              // since this is a user‐page at the root
    build: {
        outDir: "docs",       // GitHub Pages will serve from docs/
        emptyOutDir: true,
    },
})
