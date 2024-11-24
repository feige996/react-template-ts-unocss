import ErrorBoundaryDemo from './pages/ErrorBoundaryDemo'
import ErrorBoundaryDemoClassHooks from './pages/ErrorBoundaryDemoClassHooks'
// import ErrorBoundaryDemoHooks from './pages/ErrorBoundaryDemoHooks'
// import ErrorBoundaryDemoHooksClass from './pages/ErrorBoundaryDemoHooksClass'
function App() {
  return (
    <div>
      <div className='border border-red-500 border-solid p-4 m-2'>
        ErrorBoundaryDemo： CC 触发 CCB
        <ErrorBoundaryDemo />
      </div>
      <div className='border border-red-500 border-solid p-4 m-2'>
        ErrorBoundaryDemoClassHooks：FC 触发 CCB
        <ErrorBoundaryDemoClassHooks />
      </div>
      <div className='border border-red-500 border-solid p-4 m-2'>
        ErrorBoundaryDemoHooksClass：CC 触发 FCB (这里放开会导致程序崩溃)
        {/* <ErrorBoundaryDemoHooksClass /> */}
      </div>
      <div className='border border-red-500 border-solid p-4 m-2'>
        ErrorBoundaryDemoHooks：FC 触发 FCB (这里放开会导致程序崩溃)
        {/* <ErrorBoundaryDemoHooks /> */}
      </div>
      <div className='text-2xl text-green-500 p-4'>
        经过测试，Hooks的ErrorBoundary无法捕获到错误，只会导致程序崩溃，但是Class组件的ErrorBoundary可以！
      </div>
    </div>
  )
}

export default App
