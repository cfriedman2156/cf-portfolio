import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import portraitImage from '/public/images/portrait.jpg'
import { SocialIcon } from 'react-social-icons'


export const metadata = {
  title: 'Chase Friedman',
  description:
    'About Chase Friedman: web developer, content creator, spinal cord injury survivor.',
}

export default function About() {
  return (
    <Container className="mt-10 sm:mt-20">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rounded-2xl object-cover bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-zinc-100">
            About Chase
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-400">
            <p>
              Chase Friedman's journey is nothing short of remarkable. Originally hailing from San Diego,
              he ventured to Whitman College to pursue his passion for tennis, eventually graduating with
              a degree in Film and Media Studies, coupled with a minor in Chemistry.
            </p>
            <p>
              His career path led him into the dynamic world of entertainment, where he began at Paradigm Talent Agency,
              honing his skills before transitioning to Levity Live. There, he specialized in managing stand-up comedians, collaborating with renowned names such as
              Sebastian Maniscalco, Bert Kreischer, Whitney Cummings, and Taylor Tomlinson, leaving an indelible mark in the industry.
            </p>
            <p>
              However, fate intervened drastically on New Year's Day in 2021 when Chase faced a life-altering accident,
              leaving him paralyzed from the neck down. Despite grim prognoses, his resilience and unwavering determination
              became the catalyst for an extraordinary turnaround. Through relentless dedication and rigorous physical therapy,
              Chase defied all odds, astonishing doctors by not only walking unassisted after just two months but also reclaiming
              his place in the workforce within a year.
            </p>
            <p>
              Yet, this transformative experience instigated a profound introspection within Chase. Realizing the profound shift within himself,
              he embarked on a quest for a new purpose. Departing from the entertainment realm, he embraced the creative freedom of full-time content
              creation, delving into social media to explore possibilities for his future.
            </p>
            <p>
              Amidst this exploration, a new passion emerged: coding. Recognizing the potential for a fulfilling career in this field, Chase committed
              himself to mastering the craft, currently undergoing intensive training in a coding boot camp to refine his skills and contribute meaningfully to the workforce.
            </p>
            <p>
              Chase Friedman's story is a testament to resilience, adaptability, and the unwavering pursuit of passion and purpose. From navigating the heights
              of the entertainment industry to overcoming seemingly insurmountable challenges, Chase embodies the essence of turning adversity into opportunity,
              inspiring others to embrace change and forge their own paths with courage and determination.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            {[
              { url: 'https://www.tiktok.com/@chasegetsbetter', label: 'Follow on TikTok' },
              { url: 'https://www.instagram.com/chaseunfiltered/?hl=en', label: 'Follow on Instagram' },
              { url: 'https://github.com/cfriedman2156', label: 'Follow on GitHub' },
              { url: 'https://www.linkedin.com/in/chaseafriedman/', label: 'Follow on LinkedIn' },
            ].map((item, index) => (
              <li key={index} className="flex items-center space-x-4 group hover:text-yellow-500 duration-0 ease-linear">
                <SocialIcon
                  url={item.url}
                  bgColor="transparent"
                  fgColor="gray"
                  className="h-6 w-6 group-hover:fill-yellow-500 duration-0 ease-linear"
                />
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-zinc-300 group-hover:text-yellow-500 duration-0 ease-linear"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ul>
            <li className="flex mt-1 items-center space-x-4 group border-t border-gray-700 hover:text-yellow-500 duration-0 ease-linear border-t">
              <SocialIcon
                url='mailto:chaseafriedman@gmail.com'
                bgColor="transparent"
                fgColor="gray"
                className="h-6 w-6 group-hover:fill-yellow-500 duration-0 ease-linear"
              />
              <p
                rel="noopener noreferrer"
                className="text-sm font-medium text-zinc-300 group-hover:text-yellow-500 duration-0 ease-linear"
              >
                chaseafriedman@gmail.com
              </p>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  )
}



