import { sleep } from '@/utils'
import { useEffect } from 'react'
import SvgIcon from './components/SvgIcon'
async function testAlias() {
  sleep(1000)
  console.log('hello feige')
}

function App() {
  useEffect(() => {
    testAlias()
  }, [])

  const onClick = () => {
    console.log('click')
  }
  return (
    <div>
      <h3 className='text-blue-500'>react18+vite5+ts+unocss+svg</h3>
      <SvgIcon
        name='close'
        color='blue'
        width={40}
        className='cursor-pointer'
        onClick={onClick}
      />
      <SvgIcon name='dir-delete' color='red' />
      <SvgIcon name='close' color='#ff0000' width={40} />
      <SvgIcon name='close' color='#ff000050' width={'40px'} />
      <SvgIcon name='close' color='#f00' width={'2em'} />
      <SvgIcon name='close' className='text-red-500' width={'2em'} />
    </div>
  )
}

export default App
