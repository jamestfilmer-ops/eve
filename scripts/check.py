#!/usr/bin/env python3
"""Eve pre-commit safety checker. Catches em dashes and bare apostrophes."""
import os, sys, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
APP = os.path.join(ROOT, 'app')
em = b'\xe2\x80\x94'
errors = []

for dirpath, dirs, files in os.walk(APP):
    dirs[:] = [d for d in dirs if d not in ['node_modules', '.next']]
    for fname in files:
        if not fname.endswith('.js'): continue
        path = os.path.join(dirpath, fname)
        with open(path, 'rb') as f: raw = f.read()
        rel = path.replace(ROOT + '/', '')
        if raw.count(em):
            errors.append(f"  {rel}: {raw.count(em)} em dashes")
        lines = raw.decode('utf-8', errors='replace').split('\n')
        for i, line in enumerate(lines, 1):
            for m in re.finditer(r":\s*'([^'\\]*(?:\\.[^'\\]*)*)'", line):
                inner = m.group(1)
                if "'" in inner and "\\''" not in inner:
                    errors.append(f"  {rel}:{i}: bare apostrophe: {line.strip()[:80]}")

if errors:
    print("ISSUES FOUND:")
    for e in errors[:20]: print(e)
    sys.exit(1)
else:
    print("All checks passed.")
