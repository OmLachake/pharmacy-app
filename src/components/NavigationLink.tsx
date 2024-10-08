import React from 'react'
import Button from './Button'
import {useRouter} from 'next/navigation'

function NavigationLinks({}) {
  const router = useRouter();

  return (
    <div className='content'>
        <Button label='Stock Management' onClick={()=>router.push('/manage-stock')} size='long'/>
        <Button label='Reports' onClick={()=>router.push('/')} action='none'size='long'/>
        <Button label='Orders' onClick={()=>router.push('/')} action='none'size='long'/>
        <Button label='Products' onClick={()=>router.push('/')} action='none'size='long'/>
    </div>
  )
}

export default NavigationLinks