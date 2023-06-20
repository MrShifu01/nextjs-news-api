import Meta from "@/components/Meta";

// Function to display the about page with dynamic title
const About = () => {
  return (
    <div>
      <Meta title="About"/>
      <h1 className="title">About</h1>
      <p>Welcome to the wacky world of "Elon's Wild News"!</p>
      <p>We're a bunch of Elon Musk enthusiasts who just couldn't resist the temptation of creating a news site solely dedicated to our favorite tech billionaire.</p>
      <p>Here, you'll find all the latest updates on Elon Musk's adventures, ideas, and probably a few of his interstellar plans too. We're all about rockets, flamethrowers, and electric cars that may or may not come equipped with autopilot mode.</p>
      <p>But hey, don't take everything you read here too seriously. We might sprinkle a dash of humor, a pinch of speculation, and a generous dollop of Elon memes into our news articles. It's all in good fun!</p>
      <p>So sit back, relax, and prepare to enter a world where the boundaries of reality are as elastic as the SpaceX Starship's landing attempts. We hope our website brings a smile to your face and leaves you wondering, "What on Earth (or Mars) will Elon do next?"</p>
      <p>By the way, we have a team of highly trained Martian hamsters working around the clock to gather the latest news from all corners of the internet. These hamsters have an uncanny ability to spot Elon-related stories even before they hit the headlines. It's a secret they guard with their tiny hamster lives.</p>
      <p>And don't worry, we've implemented top-notch security measures to protect our website from any potential hacker attacks. Our defenses are so advanced that we even have a password requirement that includes a combination of Elon Musk's favorite space-themed movies, his favorite childhood pet's name, and the number of patents he holds (you'll never guess it!).</p>
      <p>Lastly, we'd like to thank our loyal readers for joining us on this whimsical journey. Without you, we'd just be a bunch of Elon fanatics talking to ourselves. So please, enjoy the news, share a laugh, and remember to keep your eyes on the stars, because Elon Musk certainly is.</p>
      <p>Stay tuned for more thrilling updates, mind-bending inventions, and maybe even an exclusive interview with a sentient Tesla car. Who knows what surprises await?</p>
      <p>Thank you for being a part of the "Elon's Wild News" family!</p>

{/* Styling of the about page */}
      <style jsx>{`
        .title {
          margin: 2rem;
          font-weight: 600;
          font-size: 2rem;
        }
      `}</style>
    </div>
  );
}

export default About;
