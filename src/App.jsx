import { useState } from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Timeline from './Timeline';
import TrendsList from './TRendslist';


function App({children}) {
  return (
    <>
      <div className='flex p-6  text-2xl'>
        <Sidebar>

        </Sidebar>

        {
          children
        }
       <TrendsList>

       </TrendsList>
      </div>


    </>
  )
}

export default App
