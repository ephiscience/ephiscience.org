# ÉPhiScience website

Source of [ephiscience.org](https://ephiscience.org), the website of ÉPhiScience (Éducation, Philosophie et Sciences), an association that strengthens the links between education professionals and academic research.

The site presents the association's work: educational videos (the EduKey YouTube channel), the cooperative philosophy game *Expédition Sagesse*, workshops and training, and resources for teaching critical thinking.

It is an [Angular](https://angular.dev) application, prerendered and served by a small Node server packaged as a Docker image.

## Contributing

Install [mise](https://mise.jdx.dev), then from the repository root:

```bash
mise install
```

```bash
pnpm install
```

`mise install` sets up the pinned Node version and pnpm (from `packageManager` in `package.json`).

Common commands:

- `pnpm start`: dev server on http://localhost:4200
- `pnpm test`: unit tests (Vitest)
- `pnpm build`: production build in `dist/`
