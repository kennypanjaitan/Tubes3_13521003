This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
- [Tech Stack](#tech-stack)
- [Setup](#setup)
- [Learn More](#learn-more)
- [Deploy on Vercel](#deploy-on-vercel)

## Tech Stack

- [React](https://reactjs.org/)
- [Next](https://nextjs.org/)
- [Tailwind](https://tailwindcss.com/)

## Setup

First, run the development server:

1. Clone the repo
    ````bash
    git clone https://github.com/kennypanjaitan/Tubes3_13521003.git
    ````

2. Install dependencies
    
    ```bash
    yarn
    ```

3. Run the development server
    ```bash
    yarn dev
    ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

5. For front-end, after you make your component, you can see your result by editing ```app/page.tsx``` by importing the new const, then replace the old const available in page.tsx with the new const or just add that new const below it.

    ```tsx
    import {/* const name */} from {/* route to your component\'s file */}
    import Sidebar from './contexts/Sidebar'

    const Home = (): JSX.Element => {

        return (
            <div>
                <{/* const name */} />
                <Sidebar />
            </div>
        )
    }
    ```

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[http://localhost:3000/api/hello](http://localhost:3000/api/hello) is an endpoint that uses [Route Handlers](https://beta.nextjs.org/docs/routing/route-handlers). This endpoint can be edited in `app/api/hello/route.ts`.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
