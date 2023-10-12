import React from 'react'

function Navbar() {
  return (
    <>
    
        <div className="nav flex justify-around ">
        <h3 className='text-white uppercase p-2'>Infinity creative studio</h3>
        <nav className='flex gap-2'>
            <a href="#pocetna" className='text-white p-2 rounded hover:bg-slate-600'>Početna</a>
            <a href="#cijene" className='text-white p-2 rounded hover:bg-slate-600'>Cijene</a>
        </nav>
        </div>

    
    </>
  )
}

export default Navbar