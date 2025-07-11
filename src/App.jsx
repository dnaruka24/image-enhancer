import Home from './components/Home'

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-200 py-8 px-5'>
      
      <div className='text-center mb-5'>
        <h1 className='text-5xl font-bold text-gray-800 mb-2'>AI Image Enhancer</h1>

        <p className='text-lg text-gray-600'>Upload your Image and let AI enhance it in seconds! </p>

      </div>

      <Home />

      <div className='mt-10 text-sm text-center text-gray-400'>
        <p>Powered by @EnhanceAI</p>
      </div>
    </div>
  )
}

export default App