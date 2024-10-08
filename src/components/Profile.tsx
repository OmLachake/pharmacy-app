import { userSelector } from '@/atoms'
import Image from 'next/image'
import React from 'react'
import { useRecoilValue } from 'recoil'

function Profile() {
  const user = useRecoilValue(userSelector)

  return (
    <div className='content pb-5'>
        <Image
            src={user.profilePhoto}
            alt={user.name}
            width={100}
            height={100}
            className='rounded-full'
        />
        <h1 className='title text-center'>{user.name}</h1>
        <h2 className='sub-title text-center'>{user.email}</h2>
    </div>
  )
}

export default Profile