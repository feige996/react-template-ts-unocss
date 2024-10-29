import SvgIcon from './components/SvgIcon'

function App() {
  return (
    <div>
      <SvgIcon name='close' />
      <SvgIcon name='close' size='30px' />
      <SvgIcon name='close' size='3em' />
      <SvgIcon name='close' size='30' />
      <SvgIcon name='close' size={30} />
      <SvgIcon name='close' size={[30, 40]} />
    </div>
  )
}

export default App
