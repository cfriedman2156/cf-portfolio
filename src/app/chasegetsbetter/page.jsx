'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'

import image1 from '/public/images/photos/image-2.webp'
import image2 from '/public/images/photos/image-1.webp'
import image3 from '/public/images/photos/image-3.webp'
import image4 from '/public/images/photos/image-4.webp'
import image5 from '/public/images/photos/image-5.webp'
import tal from '/public/images/photos/tal.jpg'
import bertcast from '/public/images/photos/bertcast.png'
import access from '/public/images/photos/access.png'
import jefferson from '/public/images/photos/jefferson.webp'
import fox from '/public/images/photos/fox.png'
import abc from '/public/images/photos/abc.png'

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2'];

  return (
    <div className="mt-10 sm:mt-12">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl sm:w-72 sm:rounded-2xl bg-zinc-800',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function TikTokGrid() {
  const videos = [
    {
      url: 'https://www.tiktok.com/@chasegetsbetter/video/6933731406375816454',
      description: 'My initial recovery goal was to flip the bird, and I decided to make a funny video once I achieved it. After many requests, I posted it on TikTok as my first video ever, where it reached nearly 1 million views.'
    },
    {
      url: 'https://www.tiktok.com/@chasegetsbetter/video/7145558304943590702',
      description: 'I felt a massive sense of accomplishment after my recovery and shared a short timelapse of the transformation. This video reached over 22 million views on my account and was shared by platforms such as SportsCenter, Pubity, and Jay Shetty.'
    },
    {
      url: 'https://www.tiktok.com/@chasegetsbetter/video/6941035423347100934',
      description: 'Walking up the Rocky Steps seemed impossible at first, but after indescribably difficult work — and a tweet from Sly Stallone himself calling me "the real-life Rocky" — I was able to accomplish it.'
    },
    {
      url: 'https://www.tiktok.com/@chasegetsbetter/video/6951459831559507205',
      description: 'What started as a harmless joke while I was bedridden evolved into a challenging yet wildly entertaining experience that gained both local and international press coverage.'
    },
    {
      url: 'https://www.tiktok.com/@chasegetsbetter/video/6953315610415680774',
      description: "Dan's day of reckoning finally arrived, and he handled it like a true friend."
    },
    {
      url: 'https://www.tiktok.com/@chasegetsbetter/video/7250582157876268330',
      description: 'My most difficult challenge to date — running a 5K. I had no idea when setting this goal that it would take a year and a half of vigorous training to prepare. But when the event arrived, I delivered, finishing the 5K in 32 minutes.'
    }    
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://www.tiktok.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold tracking-tight text-zinc-100 text-center">
        Video Highlights
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video, index) => (
          <div key={index} className="text-center">
            <blockquote
              className="tiktok-embed"
              cite={video.url}
              data-video-id={video.url.split('/').pop()}
              style={{ maxWidth: '325px' }}
            >
              <a href={video.url}>Watch on TikTok</a>
            </blockquote>
            <p className="mt-4 text-sm text-zinc-400">{video.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ArticlesSection() {
  const articles = [
    { title: 'Access Hollywood', image: access, url: 'https://x.com/accesshollywood/status/1616228894109011974?lang=en' },
    { title: 'This American Life', image: tal, url: 'https://www.thisamericanlife.org/742/transcript' },
    { title: 'Bertcast', image: bertcast, url: 'https://www.youtube.com/watch?v=4JGvA6Jx9EQ' },
    { title: 'Philadelphia Inquirer', image: image2, url: 'https://www.inquirer.com/news/chase-friedman-art-museum-rocky-steps-paralyzed-tiktok-20210320.html' },
    { title: 'Fox', image: fox, url: 'https://www.fox29.com/video/915659' },
    { title: 'Jefferson Health', image: jefferson, url: 'https://www.jeffersonhealth.org/your-health/living-well/making-it-to-the-top-of-the-rocky-steps-after-paralysis' },
    { title: 'CBS', image: image4, url: 'https://www.cbsnews.com/philadelphia/news/chase-friedman-paralyzed-rocky-art-museum-steps/' },
    { title: 'ABC', image: abc, url: 'https://www.10news.com/positivelysandiego/san-diego-man-overcomes-obstacles-after-freak-injury' },
  ]

  return (
    <Container className="mt-24 md:mt-28">
      <h2 className="text-3xl font-bold tracking-tight text-zinc-100 text-center mb-8">
        Press
      </h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, index) => (
          <Link key={index} href={article.url} target="_blank">
            <div className="group relative rounded-lg overflow-hidden bg-zinc-800 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
              <Image
                src={article.image}
                alt={article.title}
                className="w-full h-56 object-cover group-hover:opacity-90"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-zinc-200 group-hover:text-yellow-500">
                  {article.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  )
}


export default function Home() {
  return (
    <>
      <Container className="mt-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-zinc-100">
            Chase's Social Media
          </h1>
          <p className="mt-6 text-base text-zinc-400">
            I was paralyzed from the shoulders down and told I’d spend the rest of my life in a wheelchair.
            But I refused to accept that fate. After a relentless, challenging journey filled with ups, downs,
            and moments of pure determination, I've made a nearly full recovery. I’ve shared the raw reality of
            my experience — the triumphs, struggles, and plenty of humor — with the world through social media,
            building a community of over 500k followers along the way. Here are some of the highlights from my journey.
          </p>
        </div>
      </Container>
      <Photos />
      <Container className="mt-2 md:mt-16">
        <TikTokGrid />
      </Container>
      <ArticlesSection />
    </>
  )
}
