This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details



{/* Right Side */}

<div className="hidden items-center gap-4 lg:flex">

  {/* Notification */}
  <button className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-500/10">
    
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0018 9.75v-.7V9a6 6 0 10-12 0v.05c0 .243 0 .487-.002.73a8.967 8.967 0 00-2.31 6.022 23.848 23.848 0 005.454 1.31m5.715 0a24.255 24.255 0 01-5.715 0m5.715 0a3 3 0 11-5.715 0"
      />
    </svg>

    {/* Notification Dot */}
    <span className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full bg-cyan-400 animate-ping"></span>
    <span className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full bg-cyan-400"></span>
  </button>

  {/* User Profile */}
  <div className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40 hover:bg-cyan-500/10">

    {/* Profile Image */}
    <div className="relative">
      <img
        src="https://i.pravatar.cc/150?img=12"
        alt="user"
        className="h-12 w-12 rounded-full border-2 border-cyan-400 object-cover"
      />

      {/* Online Status */}
      <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-[#050b18] bg-green-400"></span>
    </div>

    {/* User Info */}
    <div className="hidden sm:block">
      <h4 className="text-sm font-bold text-white">
        Hridoy Akanda
      </h4>

      <p className="text-xs text-cyan-400">
        Premium Member
      </p>
    </div>

    {/* Dropdown Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-4 w-4 text-gray-400 transition-transform duration-300 group-hover:rotate-180"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  </div>

  {/* Logout Button */}
  <button className="rounded-2xl bg-gradient-to-r from-red-500 to-rose-600 px-5 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-500/30">
    Logout
  </button>
</div>