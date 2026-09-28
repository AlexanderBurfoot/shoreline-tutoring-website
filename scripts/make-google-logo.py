"""Build the square organisation logo Google shows beside search results.

The source is the mark we already use everywhere. It is only cropped to its own
ink and placed on navy: no rescaling of one axis, no redrawing, so the artwork
is pixel-for-pixel the logo the site already uses.
"""
from PIL import Image

SOURCE = 'public/Shoreline-Logo.png'
OUT = 'public/Shoreline-Logo-Google.png'
CANVAS = 1024
NAVY = (26, 35, 50)          # --color-navy, #1A2332
MARK_WIDTH_RATIO = 0.86      # leaves an even margin on the long axis

art = Image.open(SOURCE).convert('RGBA')
print(f'source            {art.size[0]}x{art.size[1]}')

# Crop away the transparent surround so the margin below is measured from the
# ink itself rather than from whatever padding the export happened to include.
bbox = art.getbbox()
art = art.crop(bbox)
print(f'cropped to ink    {art.size[0]}x{art.size[1]}  (bbox {bbox})')

target_w = round(CANVAS * MARK_WIDTH_RATIO)
target_h = round(art.size[1] * target_w / art.size[0])   # aspect preserved
art = art.resize((target_w, target_h), Image.LANCZOS)
print(f'scaled            {target_w}x{target_h}  aspect {target_w/target_h:.3f}:1')

canvas = Image.new('RGB', (CANVAS, CANVAS), NAVY)
canvas.paste(art, ((CANVAS - target_w) // 2, (CANVAS - target_h) // 2), art)
canvas.save(OUT, 'PNG', optimize=True)

check = Image.open(OUT)
print(f'written           {OUT}  {check.size[0]}x{check.size[1]}  mode={check.mode}')
