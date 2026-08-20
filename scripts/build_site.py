#!/usr/bin/env python3
"""Build the dependency-free static site into ``_site``."""

from __future__ import annotations

import shutil
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "_site"
EXCLUDED_DIRECTORIES = {".git", ".github", "_site", "__pycache__"}
EXCLUDED_FILES = {".DS_Store"}


def main() -> None:
    """Copy publishable source files into a clean local build directory."""
    if OUTPUT.exists():
        shutil.rmtree(OUTPUT)
    OUTPUT.mkdir()

    copied = 0
    for source in ROOT.rglob("*"):
        relative = source.relative_to(ROOT)
        if any(part in EXCLUDED_DIRECTORIES for part in relative.parts):
            continue
        if source.name in EXCLUDED_FILES or source.is_dir():
            continue

        destination = OUTPUT / relative
        destination.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(source, destination)
        copied += 1

    print(f"Built {copied} files in {OUTPUT}")
    print("Preview with: python -m http.server 8000 --directory _site")


if __name__ == "__main__":
    main()
