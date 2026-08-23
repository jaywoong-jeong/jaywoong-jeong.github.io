'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function StatementOfPurposeRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/manifesto')
  }, [router])

  return (
    <main className="mt-24">
      <p className="text-zinc-600 dark:text-zinc-400">
        This page has moved to{' '}
        <Link className="underline" href="/manifesto">
          Manifesto
        </Link>
        .
      </p>
    </main>
  )
}
