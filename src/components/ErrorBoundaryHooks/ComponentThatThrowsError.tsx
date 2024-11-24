import React, { useEffect } from 'react'

const ComponentThatThrowsError: React.FC = () => {
  useEffect(() => {
    throw new Error('This is an error!')
  }, [])

  return <div>This component will throw an error.</div>
}

export default ComponentThatThrowsError
