import Link from 'next/link'

import { ContainerInner, ContainerOuter } from '@/components/Container'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-yellow-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t pb-16 pt-10 border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-200">
                <NavLink href="/">About</NavLink>
                <NavLink href="/resume">Resume</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/chasegetsbetter">ChaseGetsBetter</NavLink>
              </div>
              <p className="text-sm text-zinc-500">
                &copy; {new Date().getFullYear()} Chase Friedman. All rights
                reserved.
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
