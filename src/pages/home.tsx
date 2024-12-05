import { useState } from 'react'

import viteLogo from '/vite.svg'
import reactLogo from '@/assets/react.svg'

export const Component = () => {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-slate-100'>
      {/* 响应式导航栏 */}
      <nav className='relative border-b border-slate-200 bg-white/70 backdrop-blur-md'>
        <div className='mx-auto max-w-6xl px-4'>
          <div className='flex h-16 items-center justify-between'>
            {/* Logo区域 - 在所有屏幕尺寸下显示 */}
            <div className='flex items-center space-x-4'>
              <img src={viteLogo} className='h-8 w-8 transition-transform hover:scale-110' alt='Vite logo' />
              <img src={reactLogo} className='h-8 w-8 transition-transform hover:scale-110' alt='React logo' />
            </div>
          </div>
        </div>
      </nav>

      {/* 主要内容区域 */}
      <main className='container mx-auto px-4 py-8'>
        {/* 卡片1 */}
        <div className='rounded-xl bg-white/70 p-6 text-center shadow-lg shadow-slate-200/50 backdrop-blur-md transition-shadow hover:shadow-xl'>
          <h2 className='mb-4 text-xl font-bold text-slate-800 md:text-2xl'>计数器</h2>
          <button
            className='py-2.5 rounded-lg bg-indigo-500 px-6 text-white shadow-md shadow-indigo-500/20 transition-colors hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-500/30 active:bg-indigo-700'
            onClick={() => setCount(count => count + 1)}
          >
            点击次数: {count}
          </button>
        </div>
      </main>
    </div>
  )
}
