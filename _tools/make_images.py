"""Builds the web images in assets/img from the original art in the Crane City project.

Run again whenever the logo, icon, feature graphics or screenshots change:

    python _tools/make_images.py                 # source: ../BlockBoss
    python _tools/make_images.py D:/path/BlockBoss

Needs Pillow (pip install pillow). Writes only into assets/img and the site root
(favicon.ico, apple-touch-icon.png).
"""
import glob
import os
import sys

from PIL import Image, ImageDraw

SITE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
GAME = sys.argv[1] if len(sys.argv) > 1 else os.path.join(os.path.dirname(SITE), "BlockBoss")
STORE = os.path.join(GAME, "Store")
LOGO = os.path.join(GAME, "Assets", "_CraneCity", "Art", "Logo", "retiverse_logo.png")

IMG = os.path.join(SITE, "assets", "img")
CC = os.path.join(IMG, "crane-city")
CREAM = (0xFE, 0xFC, 0xF3)

# Regions of the 1254x1254 logo: the whole artwork and the orange eye mark alone.
LOGO_BOX = (96, 196, 1158, 1044)
MARK_BOX = (236, 212, 1050, 742)
WORDMARK_Y = 745


def save_webp(im, path, width=None, quality=82):
    if width and im.width != width:
        im = im.resize((width, round(im.height * width / im.width)), Image.LANCZOS)
    im.save(path, "WEBP", quality=quality, method=6)
    return im


def transparent(logo, box, counters_from_y=None):
    """Logo region with the cream background removed.

    The background is flood-filled from the corners, so the near-cream white of the eye,
    which the eyelid encloses, stays opaque. Below counters_from_y (the lettering) every
    enclosed cream area, like the holes in R and A, is removed too.
    """
    crop = logo.crop(box).convert("RGB")
    magic = (255, 0, 255)
    w, h = crop.size
    for seed in ((0, 0), (w - 1, 0), (0, h - 1), (w - 1, h - 1)):
        ImageDraw.floodfill(crop, seed, magic, thresh=48)
    mk = crop.load()
    if counters_from_y is not None:
        for y in range(counters_from_y - box[1], h, 2):
            for x in range(0, w, 2):
                p = mk[x, y]
                if p != magic and sum(abs(a - b) for a, b in zip(p, CREAM)) < 12:
                    ImageDraw.floodfill(crop, (x, y), magic, thresh=48)
    rgba = logo.crop(box).convert("RGBA")
    px = rgba.load()
    for y in range(h):
        for x in range(w):
            if mk[x, y] == magic:
                px[x, y] = (0, 0, 0, 0)
    return rgba.crop(rgba.getbbox())


def square(im, size, pad, bg):
    """im centred on a size x size canvas, leaving `pad` (0..1) of the size free around it."""
    canvas = Image.new("RGBA", (size, size), bg)
    inner = round(size * (1 - 2 * pad))
    scale = inner / max(im.size)
    fitted = im.resize((round(im.width * scale), round(im.height * scale)), Image.LANCZOS)
    canvas.alpha_composite(fitted, ((size - fitted.width) // 2, (size - fitted.height) // 2))
    return canvas


def og_from_banner(src, dst):
    """1024x500 banner -> 1200x630 social image, extending the top and bottom edge rows."""
    im = Image.open(src).convert("RGB")
    im = im.resize((1200, round(im.height * 1200 / im.width)), Image.LANCZOS)
    out = Image.new("RGB", (1200, 630))
    top = (630 - im.height) // 2
    out.paste(im.crop((0, 0, 1200, 1)).resize((1200, top)), (0, 0))
    out.paste(im, (0, top))
    rest = 630 - top - im.height
    out.paste(im.crop((0, im.height - 1, 1200, im.height)).resize((1200, rest)), (0, top + im.height))
    out.save(dst, "JPEG", quality=86, optimize=True, progressive=True)


def main():
    os.makedirs(CC, exist_ok=True)
    logo = Image.open(LOGO).convert("RGBA")

    # Studio logo
    art = transparent(logo, LOGO_BOX, counters_from_y=WORDMARK_Y)
    save_webp(art, os.path.join(IMG, "logo-960.webp"), 960, quality=88)
    save_webp(art, os.path.join(IMG, "logo-480.webp"), 480, quality=88)
    logo.convert("RGB").resize((512, 512), Image.LANCZOS).save(os.path.join(IMG, "logo-512.png"), optimize=True)

    mark = transparent(logo, MARK_BOX)
    save_webp(mark, os.path.join(IMG, "mark-160.webp"), 160, quality=90)
    mark.resize((160, round(mark.height * 160 / mark.width)), Image.LANCZOS).save(
        os.path.join(IMG, "mark-160.png"), optimize=True)

    # Favicons and app icons
    square(mark, 256, 0.02, (0, 0, 0, 0)).save(
        os.path.join(SITE, "favicon.ico"), sizes=[(16, 16), (32, 32), (48, 48)])
    square(mark, 32, 0.0, (0, 0, 0, 0)).save(os.path.join(IMG, "favicon-32.png"), optimize=True)
    square(mark, 180, 0.12, CREAM + (255,)).convert("RGB").save(
        os.path.join(SITE, "apple-touch-icon.png"), optimize=True)
    square(mark, 192, 0.1, CREAM + (255,)).convert("RGB").save(os.path.join(IMG, "icon-192.png"), optimize=True)
    square(mark, 512, 0.1, CREAM + (255,)).convert("RGB").save(os.path.join(IMG, "icon-512.png"), optimize=True)
    square(mark, 512, 0.2, CREAM + (255,)).convert("RGB").save(
        os.path.join(IMG, "icon-maskable-512.png"), optimize=True)

    # Social preview for the studio pages
    og = Image.new("RGBA", (1200, 630), CREAM + (255,))
    fitted = art.resize((round(art.width * 560 / art.height), 560), Image.LANCZOS)
    og.alpha_composite(fitted, ((1200 - fitted.width) // 2, 35))
    og.convert("RGB").save(os.path.join(IMG, "og-retiverse.jpg"), "JPEG", quality=88, optimize=True)

    # Crane City
    icon = Image.open(os.path.join(STORE, "icon_512.png")).convert("RGB")
    icon.save(os.path.join(CC, "icon-512.png"), optimize=True)
    save_webp(icon, os.path.join(CC, "icon-256.webp"), 256)
    for lang in ("en", "tr"):
        banner = os.path.join(STORE, f"feature_graphic_{lang}.png")
        fg = Image.open(banner).convert("RGB")
        save_webp(fg, os.path.join(CC, f"feature-{lang}-1024.webp"), 1024)
        save_webp(fg, os.path.join(CC, f"feature-{lang}-640.webp"), 640)
        og_from_banner(banner, os.path.join(CC, f"og-{lang}.jpg"))
        shots = sorted(glob.glob(os.path.join(STORE, "screenshots", lang, "*.jpg")))
        for i, path in enumerate(shots, 1):
            shot = Image.open(path).convert("RGB")
            for width in (360, 720):
                save_webp(shot, os.path.join(CC, f"shot-{lang}-{i}-{width}.webp"), width, quality=80)

    total = sum(os.path.getsize(p) for p in glob.glob(os.path.join(IMG, "**", "*.*"), recursive=True))
    print(f"assets/img: {total / 1024:.0f} KB")


if __name__ == "__main__":
    main()
