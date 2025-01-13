import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { SocialIcon } from 'react-social-icons'
import Link from 'next/link'

const projects = [
  {
    name: '2 the Rescue Animal Sanctuary',
    description:
      'A website for an animal sanctuary based in Ramona, CA, that homes a wide range of animals from horses and cows to peacocks. Users can browse through all the animals, donate, set up sponsorships, and even take a personality quiz to see which animal is most like them.',
    features: 'Next.js, Node.js, GraphQL, Resend, Stripe, Multer, MongoDB, AWS S3, Tailwind',
    link: { href: 'https://www.2therescueanimalsanctuary.org/', label: '2therescueanimalsanctuary.org' },
    githubLink: { href: 'https://github.com/cfriedman2156/2-the-rescue', label: 'github.com/2-the-rescue' },
  },
  {
    name: 'FlowSense Solutions',
    description:
      'FlowSense Solutions specialize in crafting data strategies that align with your business goals. Their website clearly lays out their services, provides case studies, and has a functional contact section.',
    features: 'Next.js, Resend, Tailwind, Sanity',
    link: { href: 'https://www.flowsensesolutions.com/', label: 'flowsensesolutions.com' },
    githubLink: { href: 'https://github.com/cfriedman2156/flowsense', label: 'github.com/flowsense' },
  },
  {
    name: 'ReadyCheck',
    description:
      'A web app that allows you to send out "group-up" notifications to your friends! Get together for a gaming session, pickleball or anything in between. *Deployed via Render, please give it time to load.',
    features: 'MongoDB, GraphQL, Express.js, Node.js, Socket.io, React, Tailwind',
    link: { href: 'https://ready-check.onrender.com/', label: 'ready-check.onrender.com' },
    githubLink: { href: 'https://github.com/jasongalas/ready-check', label: 'github.com/ready-check' },
  },
  {
    name: 'PlayPoint',
    description:
      'A gaming review app where you can search for any game, write reviews, update reviews, add friends and see their reviews. *Deployed via Render, please give it time to load',
    features: 'Node.js, Express.js, Handlebars.js, PostgreSQL, Sequelize, Tailwind',
    link: { href: 'https://playpoint.onrender.com/signup', label: 'playpoint.onrender.com' },
    githubLink: { href: 'https://github.com/cfriedman2156/playpoint', label: 'github.com/playpoint' },
  },
]


export const metadata = {
  title: 'Projects',
  description: 'Things I’ve made trying to put my dent in the universe.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Chase's Projects"
      intro="Take a look at some projects I've worked on, both from my freelance work and my UC Berkeley Web Development Bootcamp."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name} className="pb-6 px-6 rounded-xl transition hover:bg-zinc-800">
            <h2 className="mt-6 text-base font-semibold text-zinc-100">
              {project.name}
            </h2>
            <Card.Description className='text-zinc-100'>{project.description}</Card.Description>
            <Card.Description>Features: {project.features}</Card.Description>
            <div className="relative z-10 mt-6 flex text-sm font-medium text-zinc-100">
              <div className="flex items-center space-x-2">
                <SocialIcon
                  url={project.link.href}
                  bgColor="transparent"
                  fgColor=""
                  style={{ height: '35px', width: '35px' }}
                />
                <a
                  href={project.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-100 hover:text-yellow-500 transition"
                >
                  {project.link.label}
                </a>
              </div>
            </div>
            <div className="relative z-10 mt-2 flex text-sm font-medium text-zinc-100">
              <div className="flex items-center space-x-2">
                <SocialIcon
                  url={project.githubLink.href}
                  bgColor="transparent"
                  fgColor=""
                  style={{ height: '35px', width: '35px' }}
                />
                <a
                  href={project.githubLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-100 hover:text-yellow-500 transition"
                >
                  {project.githubLink.label}
                </a>
              </div>
            </div>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
