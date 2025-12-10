# LocalLinkNL

Marketingwebsite voor LocalLinkNL - een platform dat reizigers, hotels en Nederlandse leveranciers met elkaar verbindt.

## Technologie

- **Next.js 14** met App Router
- **TypeScript**
- **Tailwind CSS**

## Installatie

```bash
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in je browser.

## Project structuur

```
locallinknl/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout met Header en Footer
│   ├── page.tsx           # Homepage (/)
│   ├── globals.css        # Global styles met Tailwind
│   ├── hotels/            # Hotels pagina (/hotels)
│   ├── suppliers/         # Leveranciers pagina (/suppliers)
│   ├── login/             # Login pagina (/login)
│   ├── about/             # Over ons pagina (/about)
│   └── faq/               # FAQ pagina (/faq)
├── components/            # React componenten
│   ├── Header.tsx         # Header met navigatie
│   └── Footer.tsx         # Footer met links
├── package.json          # Dependencies
├── tsconfig.json         # TypeScript configuratie
├── tailwind.config.ts    # Tailwind CSS configuratie
└── next.config.js        # Next.js configuratie
```

## Pagina's

- `/` - Homepage (B2C)
- `/hotels` - Overzicht van hotels en B&B's
- `/suppliers` - Informatie voor Nederlandse leveranciers
- `/login` - Login pagina
- `/about` - Over LocalLinkNL
- `/faq` - Veelgestelde vragen

# Locallink
# Locallink
# Locallink
