import Image from "next/image";
import { Button } from "antd";
import bookImage from "@/assest/book1.jpg";
import bookImage2 from "@/assest/book1.jpg";

// import { url } from "inspector";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
    //     <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
    //       Get started by editing&nbsp;
    //       <code className="font-mono font-bold">src/app/page.tsx</code>
    //     </p>
    //     <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
    //       <a
    //         className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
    //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         By{" "}
    //         <Image
    //           src="/vercel.svg"
    //           alt="Vercel Logo"
    //           className="dark:invert"
    //           width={100}
    //           height={24}
    //           priority
    //         />
    //       </a>
    //     </div>
    //   </div>

    //   <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
    //     <Image
    //       className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
    //       src="/next.svg"
    //       alt="Next.js Logo"
    //       width={180}
    //       height={37}
    //       priority
    //     />
    //   </div>

    //   <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
    //     <a
    //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Docs{" "}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Find in-depth information about Next.js features and API.
    //       </p>
    //     </a>

    //     <a
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Learn{" "}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Learn about Next.js in an interactive course with&nbsp;quizzes!
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Templates{" "}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Explore starter templates for Next.js.
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Deploy{" "}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
    //         Instantly deploy your Next.js site to a shareable URL with Vercel.
    //       </p>
    //     </a>
    //   </div>
    // </main>
    <main>
      <div
        className="home-con p-8 text-white"
        // style={{backgroundColor:`url(${bookImage})`}}
        style={{ backgroundImage: `url(${bookImage.src})` }}
      >
        <div className="top text-lg grid grid-cols-2 gap-4 items-center">
          {/* <h1>Home page</h1> */}
          {/* <h1>Hello pahe</h1> */}
          <div className="home-text-btn p-8">
            <h1 className=" text-4xl text-primary p-2 mb-2">
              Welcome to <span>Buuk</span>.
            </h1>

            <h3 className="text-2xl p-2 w-[70%] leading-8">
              Discover, Connect, and Dive into the World of Books with Buuk
            </h3>
            <p className=" leading-6 p-2">
              Uncover Hidden Gems and Bestsellers Explore a vast collection of
              books ranging from timeless classics to the latest bestsellers.
              Whether you're into fiction, non-fiction, romance, mystery, or
              fantasy, find your next great read with personalized book
              recommendations tailored just for you!
            </p>
            <div className="btns p-2">
              <Button
                size="large"
                style={{
                  padding: "",
                  backgroundColor: "transparent",
                  border: "2px solid rbg(14 33 237)",
                  marginRight: "4px",
                }}
              >
                Join
              </Button>
              <Button size="large" style={{ color: "white" }}>
                {" "}
                Sign in
              </Button>
            </div>
          </div>

          <div className="home-image p-8">
            <Image src={bookImage2} alt="book" width={500} height={300} />
          </div>
        </div>
      </div>
    </main>
  );
}

// here contents
// Certainly! Here's a catchy and attractive content for the home page of your community platform for readers:

// ---

// ### **Discover, Connect, and Dive into the World of Books with [Your Platform Name]!**

// ---

// #### **📚 Uncover Hidden Gems and Bestsellers**
// Explore a vast collection of books ranging from timeless classics to the latest bestsellers. Whether you're into fiction, non-fiction, romance, mystery, or fantasy, find your next great read with personalized book recommendations tailored just for you!

// ---

// #### **🌟 Share Your Insights and Reviews**
// Become a part of our vibrant reading community and share your thoughts, reviews, and ratings on your favorite books. Inspire others, spark engaging discussions, and connect with fellow book enthusiasts from around the globe!

// ---

// #### **📖 Dive Deeper with Summaries and Lessons**
// Get quick insights and key takeaways from books with our concise summaries and lessons. Enhance your reading experience, deepen your understanding, and discover new perspectives on the books you love!

// ---

// #### **🤝 Connect, Discuss, and Engage**
// Join book clubs, participate in forums, and engage in meaningful discussions with like-minded readers. Connect with authors, share book recommendations, and build lasting friendships within our supportive and welcoming community!

// ---

// #### **🔍 Personalize Your Reading Journey**
// Take your reading journey to the next level with personalized reading challenges, diverse reading filters, and curated book lists. Whether you're a casual reader or a bookworm, find books that resonate with your interests, preferences, and reading goals!

// ---

// #### **📱 Access Anytime, Anywhere**
// Enjoy seamless access to our platform across all devices, including desktop, tablet, and mobile. Dive into the world of books anytime, anywhere, and enrich your reading experience with our user-friendly and interactive platform!

// ---

// #### **Join [Your Platform Name] Today and Embark on an Exciting Reading Adventure!**
// 👇

// [**Sign Up/Login**](#) **|** [**Explore Our Library**](#)

// ---

// Feel free to customize the content to better align with your platform's unique features, branding, and target audience. Incorporating visually appealing graphics, images, and call-to-action buttons can further enhance the attractiveness and effectiveness of your home page content.
