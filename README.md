# AkimovLab.github.io

Static website for the Akimov Research Group at the University at Buffalo.

## Local preview

Build a clean local copy and serve it from the repository root:

```bash
python scripts/build_site.py
python -m http.server 8000 --directory _site
```

Then open <http://localhost:8000>.

The site intentionally has no package-manager or compilation dependency. The
build script copies publishable source files into `_site/`, matching the files
served by GitHub Pages while keeping generated output out of version control.
