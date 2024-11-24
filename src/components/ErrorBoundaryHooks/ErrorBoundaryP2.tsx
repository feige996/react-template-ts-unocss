import React, { useState, useEffect } from 'react'

interface ErrorBoundaryProps {
  children: React.ReactNode
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const handleError = (error: ErrorEvent) => {
      setHasError(true)
      console.error('Uncaught error:', error)
    }

    window.addEventListener('error', handleError)

    return () => {
      window.removeEventListener('error', handleError)
    }
  }, [])

  if (hasError) {
    // 你可以自定义降级后的 UI 并渲染
    return <h1>Something went wrong.P2</h1>
  }

  // 正常情况下渲染子组件
  return <>{children}</>
}

export default ErrorBoundary
