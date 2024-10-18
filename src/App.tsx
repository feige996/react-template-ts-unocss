import { sleep } from '@/utils'
import { useEffect } from 'react'
async function testAlias() {
  sleep(1000)
  console.log('hello feige')
}
function App() {
  useEffect(() => {
    testAlias()
  }, [])

  return <div className='text-blue-500'>react18+vite5+ts+unocss+svg</div>
}

export default App
