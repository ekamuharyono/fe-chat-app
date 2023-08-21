import React from 'react'

const Contact = ({ name, avatar, info }) => {
  return (
    <div className='grid grid-cols-6 py-5 px-5 border-b border-slate-400 border-opacity-10 cursor-pointer'>
      <div id="avatar" className="col-span-1">
        <div className="avatar flex items-center">
          <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={avatar} />
          </div>
        </div>
      </div>
      <div id="info" className='col-span-5'>
        <div id="name">
          <h3 className='text-xl'>{name}</h3>
        </div>
        <div id="last-chat">
          <h5 className='text-slate-400'>{info}</h5>
        </div>
      </div>
    </div>
  )
}

export default Contact