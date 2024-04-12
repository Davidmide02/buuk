import Image from "next/image";
import { Button } from "antd";
import bookImage from "@/assest/book-p.jpg";
import bookImage2 from "@/assest/book1.jpg";

export default function Home() {
  return (
    <main>
      <div
        className="home-con p-8 text-white"
        // style={{backgroundColor:`url(${bookImage})`}}
        // style={{ backgroundImage: `url(${bookImage.src})` }}
      >
        <div className="top text-lg flex flex-col-reverse md:grid md:grid-cols-2 md:gap-4 text-black">
          <div className="home-text-btn p-8 flex flex-col items-center md:block">
            <h1 className=" text-4xl text-primary p-2 mb-2">
              Welcome to <span>Buuk!</span>
            </h1>

            <h3 className="text-4xl p-2 md:w-[70%] leading-[3rem] text-black">
              Discover, Connect, and Dive into the World of Books with Buuk
            </h3>
            <p className=" leading-8 p-2">
              Uncover Hidden Gems and Bestsellers Explore a vast collection of
              books ranging from timeless classics to the latest bestsellers.
              Whether you're into fiction, non-fiction, romance, mystery, or
              fantasy, find your next great read with personalized book
              recommendations tailored just for you!
            </p>
            <div className="btns p-2">
              <Button size="large" className="mr-2">
                Join
              </Button>
              <Button size="large" className="bg-primary text-white">
                Sign in
              </Button>
            </div>
          </div>

          <div className="home-image p-8">
            <div className="card-con shadow-2xl p-2 rounded-md">
              <Image
                src={bookImage2}
                alt="book"
                width={800}
                height={300}
                className=" rounded-t-md"
              />
              <div className="card-text text-center">
                <h3>
                  Readers are leaders, join the over 1000 readers around the
                  glode
                </h3>
                <h3>You change your reading habit you change your life</h3>
              </div>
            </div>
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
