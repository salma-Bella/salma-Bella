"use client"

import EmailVerification from "@/email-verification"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-3xl font-bold mb-8">Démo de vérification d'email</h1>
      <EmailVerification />
    </main>
  )
}
