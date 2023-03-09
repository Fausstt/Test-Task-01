import { useState } from "react"

export const useFetching = (callback) => {
  const [louder, isLouder] = useState(false)
  const [error, setError] = useState('')

  const Fetching = async () => {
    try {
      isLouder(true)
      await callback()
    } catch (e) {
      setError(e.massage);
    } finally {
      isLouder(false)
    }
  }
  return [Fetching, louder, error]
}