school-management-frontend/
│
├── public/
│   ├── images/
│   │   ├── logo/
│   │   ├── banners/
│   │   └── gallery/
│   │
│   ├── icons/
│   └── favicon.ico
│
├── src/
│
├── app/
│   │
│   ├── (client)/
│   │   ├── layout.tsx
│   │   ├── page.tsx                 → Home Page
│   │   │
│   │   ├── about/
│   │   │   └── page.tsx
│   │   │
│   │   ├── admission/
│   │   │   └── page.tsx
│   │   │
│   │   ├── notice/
│   │   │   └── page.tsx
│   │   │
│   │   ├── events/
│   │   │   └── page.tsx
│   │   │
│   │   ├── gallery/
│   │   │   └── page.tsx
│   │   │
│   │   ├── teachers/
│   │   │   └── page.tsx
│   │   │
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   │
│   │   └── result-check/
│   │       └── page.tsx
│   │
│   │
│   ├── (admin-auth)/
│   │   └── admin/
│   │       └── login/
│   │           └── page.tsx
│   │
│   │
│   ├── (admin-panel)/
│   │   └── admin/
│   │       │
│   │       ├── layout.tsx
│   │       │
│   │       ├── dashboard/
│   │       │   └── page.tsx
│   │       │
│   │       ├── users/
│   │       │   └── page.tsx
│   │       │
│   │       ├── students/
│   │       │   └── page.tsx
│   │       │
│   │       ├── teachers/
│   │       │   └── page.tsx
│   │       │
│   │       ├── parents/
│   │       │   └── page.tsx
│   │       │
│   │       ├── staff/
│   │       │   └── page.tsx
│   │       │
│   │       ├── classes/
│   │       │   └── page.tsx
│   │       │
│   │       ├── subjects/
│   │       │   └── page.tsx
│   │       │
│   │       ├── attendance/
│   │       │   └── page.tsx
│   │       │
│   │       ├── exams/
│   │       │   └── page.tsx
│   │       │
│   │       ├── results/
│   │       │   └── page.tsx
│   │       │
│   │       ├── homework/
│   │       │   └── page.tsx
│   │       │
│   │       ├── fees/
│   │       │   └── page.tsx
│   │       │
│   │       ├── reports/
│   │       │   └── page.tsx
│   │       │
│   │       ├── notifications/
│   │       │   └── page.tsx
│   │       │
│   │       └── settings/
│   │           └── page.tsx
│   │
│   │
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── error.tsx
│   ├── not-found.tsx
│   └── globals.css
│
│
├── features/
│
│   ├── auth/
│   │   ├── components/
│   │   │   └── LoginForm.tsx
│   │   ├── api/
│   │   ├── hooks/
│   │   └── types/
│   │
│   ├── students/
│   ├── teachers/
│   ├── users/
│   ├── attendance/
│   ├── exams/
│   ├── results/
│   ├── fees/
│   └── settings/
│
│
├── components/
│
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   └── Card.tsx
│   │
│   ├── client/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   └── Section.tsx
│   │
│   └── admin/
│       ├── Sidebar.tsx
│       ├── Header.tsx
│       └── DashboardCard.tsx
│
│
├── services/
│   └── axios.ts
│
├── store/
│   └── auth.store.ts
│
├── hooks/
│
├── lib/
│
├── types/
│
├── utils/
│
├── constants/
│
├── middleware.ts
│
├── .env.local
├── next.config.ts
├── tsconfig.json
└── package.json



This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
