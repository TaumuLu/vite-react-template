import { Outlet } from 'react-router-dom'

export const Component = () => {
  return (
    <div className='size-full'>
      <Outlet />
    </div>
  )
}
