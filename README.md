# Тело в балансе

Сайт массажной студии с админкой на Payload CMS.

Нужны Node 24.22+ и PostgreSQL (локально — Postgres.app).

```sh
cp .env.example .env   # заполнить переменные
npm install
npm run dev            # сайт http://localhost:3000, админка /admin/
npm run build
npm run lint
npm run typecheck
```

Переменные окружения:

- `DATABASE_URL` — строка подключения к PostgreSQL, например `postgres://user@localhost:5432/bodyinbalance`
- `SITE_URL` — адрес сайта без слэша в конце, нужен для canonical и sitemap
- `PAYLOAD_SECRET` — случайная строка не короче 32 символов (`openssl rand -hex 32`)
