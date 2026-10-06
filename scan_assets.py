#!/usr/bin/env python3
"""Run after adding photos to assets/ :   python scan_assets.py
Finds every  NAME_X4.(webp|png|jpg|jpeg)  and writes assets/slides.js,
so the app shows NAME as a new slide (works on any host or by double-click)."""
import json, os, re
folder = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'assets')
slides = []
for f in sorted(os.listdir(folder)):
    m = re.fullmatch(r'(.+)_X4\.(webp|png|jpe?g)', f, re.I)
    if m:
        slides.append({'base': m.group(1), 'ext': m.group(2)})
        for z in ('X20', 'X40'):
            if not os.path.exists(os.path.join(folder, f'{m.group(1)}_{z}.{m.group(2)}')):
                print(f'warning: {m.group(1)}_{z}.{m.group(2)} is missing')
with open(os.path.join(folder, 'slides.js'), 'w', encoding='utf-8') as out:
    out.write('window.EXTRA_SLIDES = ' + json.dumps(slides, ensure_ascii=False, indent=2) + ';\n')
print(f'{len(slides)} slides written to assets/slides.js')
