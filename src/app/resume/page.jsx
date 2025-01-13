import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata = {
  title: 'CF - Resume',
  description: 'The professional history and qualifications of Chase Friedman.',
}

export default function Resume() {
  return (
    <SimpleLayout
      title="Chase's Resume"
      intro="A comprehensive overview of my professional experience, skills, and education."
    >
      <div className="">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-zinc-100">Chase Friedman</h2>
          <p className='text-zinc-200'>Los Angeles, CA<br />Phone: (619) 866-8663 | Email: <a href="mailto:chaseafriedman@gmail.com" className="text-yellow-500">chaseafriedman@gmail.com</a><br />
            <a href="https://www.linkedin.com/in/chaseafriedman/" target='_blank' className="text-yellow-500 ">LinkedIn</a> |
            <a href="https://github.com/cfriedman2156" target='_blank' className="text-yellow-500"> GitHub</a></p>
        </div>

        <div className="space-y-2 ">
          <h3 className="text-2xl font-semibold text-zinc-200">Summary</h3>
          <p className='text-zinc-400'>Full Stack Web Developer with a diverse background in content creation, project management, and talent representation. Demonstrated expertise in developing user-friendly applications, managing high-profile projects, and building substantial online followings. Known for effective content strategy, audience engagement, and strong communication skills.</p>
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-semibold mt-4 text-zinc-200">Technical Skills</h3>
          <p className='text-zinc-400'>Technical Languages: HTML, CSS, JavaScript, React, Next.js, Node.js, Handlebars.js</p>
          <p className='text-zinc-400'>Applications: Git, Jest, Insomnia, GraphQL, MongoDB, PostgreSQL, Microsoft Office, Google Suite</p>
        </div>

        <div className="">
          <h3 className="text-2xl font-semibold mt-4 text-zinc-200">Related Experience</h3>

          <h4 className="text-xl font-bold my-4 text-zinc-300">Freelance | Web Developer</h4>
          <div>
            <h4 className="font-semibold text-zinc-300">2 The Rescue Animal Sanctuary | <a href="https://github.com/cfriedman2156/2-the-rescue" target='_blank' className="text-yellow-500 ">GitHub</a> | <a href="https://www.2therescueanimalsanctuary.org/" target='_blank' className="text-yellow-500 ">Deployed Site</a></h4>
            <div className='text-zinc-400'>
              <p>An animal sanctuary website featuring animal profiles, donation, sponsorship, and shop functionalities integrated with Stripe.</p>
              <p>Core responsibilities: Solo project, created all JS, styling, server-side, client-side, Multer, and Stripe integration.</p>
              <p>Tools / languages used: Next.js, Tailwind, MongoDB, Multer, Stripe, Resend</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mt-2 text-zinc-300">FlowSense Solutions | <a href="https://github.com/cfriedman2156/flowsense" target='_blank' className="text-yellow-500 ">GitHub</a> | <a href="https://www.flowsensesolutions.com/" target='_blank' className="text-yellow-500 ">Deployed Site</a></h4>
            <div className='text-zinc-400'>
              <p>A business services website detailing services, case studies, and client testimonials, with a functional contact section.</p>
              <p>Core responsibilities: Solo project, created all JS, styling, Sanity and Stripe integration.</p>
              <p>Tools / languages used: Next.js, Tailwind, Sanity, Resend</p>
            </div>
          </div>

        </div>
        <h4 className="text-xl font-bold my-4 text-zinc-300">UC Berkeley | Web Developer</h4>
        <div>
          <h4 className="font-semibold text-zinc-300">ReadyCheck | <a href="https://github.com/jasongalas/ready-check" target='_blank' className="text-yellow-500 ">GitHub</a> | <a href="https://ready-check.onrender.com/" target='_blank' className="text-yellow-500 ">Deployed Site</a></h4>
          <div className='text-zinc-400'>
            <p>A scheduling and event management tool with invite and RSVP functionality.</p>
            <p>Core responsibilities: Developed the frontend using React and Tailwind, implemented backend with NodeJS and MongoDB.</p>
            <p>Tools / languages used: React, NodeJS, MongoDB, Socket.io</p>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-zinc-300 mt-2">PlayPoint | <a href="https://github.com/cfriedman2156/playpoint" target='_blank' className="text-yellow-500 ">GitHub</a> | <a href="https://playpoint.onrender.com/" target='_blank' className="text-yellow-500 ">Deployed Site</a></h4>
          <div className='text-zinc-400'>
            <p>A game rating app where you can add friends, see and share their reviews.</p>
            <p>Core responsibilities: Designed and implemented the page using Tailwind CSS, DaisyUI, and Handlebars. Developed backend routes for a Sequelize database.</p>
            <p>Tools / languages used: Node, Handlebars, Insomnia, PostgreSQL</p>
          </div>

        </div>

        <h3 className="text-2xl font-semibold mt-4 text-zinc-200">Additional Experience</h3>

        <h4 className="font-bold mt-4 text-zinc-300">Content Creator</h4>
        <p className='text-zinc-300'>Self-Employed, Los Angeles, CA, August 2022 - Present</p>
        <div className='text-zinc-400'>
          <p>Documented and shared the recovery journey from a C4-C7 spinal cord injury. 
            Built a substantial and engaged follower base of
            over 500,000. Negotiated brand deals and provided personalized
            consultation to spinal cord injury patients.</p>
          <p>Key Accompllishments</p>
          <p>* Grew social media following to 500,000+ through effective content strategy.</p>
          <p>* Successfully negotiated profitable brand deals independently.</p>
          <p>* Provided support and guidance to spinal cord injury patients.</p>
        </div>

        <h4 className="font-bold mt-4 text-zinc-300">Project Manager</h4>
        <p className='text-zinc-300'>Levity Live, Los Angeles, CA, November 2021 - August 2022</p>
        <div className='text-zinc-400'>
          <p>Managed day-to-day business operations for high-profile clients.
            Produced and promoted multiple Netflix Comedy Specials and
            developed innovative solutions during the COVID-19 pandemic.</p>
          <p>Key Accompllishments</p>
          <p>* Produced and promoted Netflix Comedy Specials, achieving Top 10 releases.</p>
          <p>* Developed and managed Bert Kreischer’s drive-in theater tour during COVID-19.</p>
          <p>* Negotiated high-value deals and promoted successful comedy tours.</p>
        </div>

        <h4 className="font-bold mt-4 text-zinc-300">Assistant</h4>
        <p className='text-zinc-300'>Levity Live, Los Angeles, CA, March 2019 - November 2021</p>
        <p className='text-zinc-400'>Supported the President of Talent, managed client calendars,
          and communicated with producers and casting directors.</p>

        <h4 className="font-bold mt-4 text-zinc-300">Assistant</h4>
        <p className='text-zinc-300'>Paradigm Talent Agency, Beverly Hills, CA, June 2018 - March 2019</p>
        <p className='text-zinc-400'>Supported the head of TV Talent department, scheduled auditions, and evaluated scripts.</p>

        <div className="">
          <h3 className="text-2xl font-semibold my-4 text-zinc-200">Education</h3>
          <p className='font-bold text-zinc-300'>Full Stack Web Development Boot Camp Certificate</p>
          <div className='text-zinc-400'>
            <p>UC Berkeley Extension, Los Angeles, CA</p>
            <p>Graduated June 2024</p>
            <p>An intensive program focused on gaining technical programming skills in
              HTML5, CSS3, JavaScript, JQuery, Bootstrap, Node.js, MySQL, MongoDB, Express, Handlebars.js, and React.</p>
          </div>

          <p className='font-bold text-zinc-300 mt-4'>Bachelor of Arts in Film and Media Studies</p>
          <div className='text-zinc-400'>
            <p>Whitman College, Walla Walla, WA</p>
            <p>Graduated May 2018</p>
            <p>Pearson Achievement Scholarship Recipient, NCAA Scholar Athlete (Tennis)</p>
          </div>

        </div>
      </div>
    </SimpleLayout>
  )
}
