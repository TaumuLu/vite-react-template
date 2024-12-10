import { useState } from 'react'

import viteLogo from '/vite.svg'
import reactLogo from '@/assets/react.svg'

export const Component = () => {
  const [count, setCount] = useState(0)

  return (
    <div className='size-full flex-col-center'>
      <div className='flex justify-center'>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='h-[144px] w-[144px] p-6' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img
            src={reactLogo}
            className='h-[144px] w-[144px] animate-[spin_20s_linear_infinite] p-6'
            alt='React logo'
          />
        </a>
      </div>
      <h1 className='text-center text-[3.2rem] text-white'>Vite + React</h1>
      <div className='p-8 flex-row-center'>
        <button
          onClick={() => setCount(count => count + 1)}
          className='rounded-lg border border-transparent bg-gray-700 px-12 py-8 text-white transition-colors duration-300 hover:border-[#646cff] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#646cff]'
        >
          count is {count}
        </button>
      </div>
      <p className='mt-4 text-center text-white'>
        Edit <code className='rounded bg-blue-500 px-2 py-1 font-mono'>src/App.tsx</code> and save to test HMR
      </p>
      <p className='text-center text-[#888]'>Click on the Vite and React logos to learn more</p>
    </div>
  )
}
