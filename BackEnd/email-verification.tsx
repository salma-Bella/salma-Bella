"use client"

import type React from "react"
import { useState, useEffect } from "react"

const EmailVerification: React.FC = () => {
  // États pour gérer le composant
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState("")
  const [isVerifying, setIsVerifying] = useState(false)
  const [isVerified, setIsVerified] = useState(false)

  // Fonction pour démarrer le processus de vérification
  const startVerification = () => {
    setEmail("")
    setIsVerified(false)
    setIsVisible(true)
  }

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!email.trim()) return

    // Commencer la vérification
    setIsVerifying(true)

    // Simuler une vérification d'email (1 seconde)
    setTimeout(() => {
      setIsVerifying(false)
      setIsVerified(true)
    }, 1000)
  }

  // Effet pour fermer la boîte après vérification réussie
  useEffect(() => {
    if (isVerified) {
      const timer = setTimeout(() => {
        setIsVisible(false)
      }, 1500)

      // Nettoyer le timer si le composant est démonté
      return () => clearTimeout(timer)
    }
  }, [isVerified])

  return (
    <div>
      {/* Bouton pour démarrer le processus */}
      <button onClick={startVerification} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Vérifier un email
      </button>

      {/* Boîte de vérification (visible conditionnellement) */}
      {isVisible && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md overflow-hidden">
            <div className="p-4 border-b">
              <h2 className="text-lg font-semibold">Vérification de l'email</h2>
            </div>

            <div className="p-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Adresse email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isVerifying || isVerified}
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="exemple@domaine.com"
                    required
                  />
                </div>

                {isVerified && (
                  <div className="mb-4 p-3 bg-green-50 text-green-700 rounded-md">Email is verified ✅</div>
                )}

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => setIsVisible(false)}
                    className="px-4 py-2 text-gray-600 mr-2"
                    disabled={isVerifying}
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    disabled={isVerifying || isVerified || !email.trim()}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300"
                  >
                    {isVerifying ? "Vérification en cours..." : "Envoyer l'e-mail"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default EmailVerification
