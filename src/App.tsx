import SvgIcon from './components/SvgIcon'
import ReactSortable from './ReactSortablejs'
function App() {
  return (
    <div>
      <SvgIcon name='close' />
      <SvgIcon name='close' size='30px' />
      <SvgIcon name='close' size='3em' />
      <SvgIcon name='close' size='30' />
      <SvgIcon name='close' size={30} />
      <SvgIcon name='close' size={[30, 40]} />
      <ReactSortable />
    </div>
  )
}

export default App
