# Тело в балансе

Сайт массажной студии. Next.js, без базы данных: весь контент лежит в `src/data/`.

```sh
cp .env.example .env   # заполнить SITE_URL
npm install
npm run dev            # http://localhost:3000
npm run build
npm run lint
npm run typecheck
npm test
```

Переменные окружения:

- `SITE_URL` — адрес сайта без слэша в конце, например `https://telo-v-balanse.vercel.app`. Нужен для canonical, sitemap и разметки для поисковиков.

Где что править:

- `src/data/services.ts` — виды массажа, цены, описания, вопросы
- `src/data/studio-info.ts` — как найти вход, реквизиты, рассказ и фото Олега, документы
- `src/data/contacts.ts` — адрес, телефоны, часы работы, ссылки на Яндекс Карты
- `src/data/home.ts`, `src/data/pages.ts`, `src/data/faq.ts` — тексты страниц
- фото — в `public/images/`, фото и сканы Олега — в `public/images/master/`
