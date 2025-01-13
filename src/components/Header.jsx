'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'

function CloseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function NavItem({ href, children }) {
  let isActive = usePathname() === href

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          'relative block px-3 py-2 transition',
          isActive
            ? 'text-yellow-400'
            : 'hover:text-yellow-400',
        )}
      >
        {children}
      </Link>
    </li>
  )
}

function DesktopNavigation(props) {
  return (
    <nav {...props}>
      <ul className="flex rounded-full px-3 text-sm font-medium shadow-lg shadow-zinc-800/5 ring-1 backdrop-blur bg-zinc-800/90 text-zinc-200 ring-white/10">
        <NavItem href="/">About</NavItem>
        <NavItem href="/resume">Resume</NavItem>
        <NavItem href="/projects">Projects</NavItem>
        <NavItem href="/chasegetsbetter">ChaseGetsBetter</NavItem>
      </ul>
    </nav>
  )
}

export function Header() {
  return (
    <header
      className="pointer-events-none relative z-50 flex flex-none flex-col"
    >
      <div
        className="top-0 z-10 h-16 pt-6"
      >
        <Container
          className="top-[var(--header-top,theme(spacing.6))] w-full"
        >
          <div className="relative flex gap-4">
            <div className="flex flex-1 justify-end md:justify-center">
              <DesktopNavigation className="pointer-events-auto hidden md:block" />
            </div>
          </div>
        </Container>
      </div>
    </header>
  )
}
