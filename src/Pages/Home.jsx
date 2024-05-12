import React from 'react'
import { Links } from '../Components/Links/Links'
import LinkList  from '../Components/assets/my_links.js'
import './Css/Home.css'
import banner from '../Components/assets/mybanner.jpg'
export const Home = () => {
  let my_link = LinkList;
  return (
    <>
      <img src={banner} alt="" className='banner' />
      <div className="linklist">
        {my_link.map((item, i) => {
          return <Links link={item.link} logo={item.logo} name={item.name} date={item.date} />
        })}
      </div>
    </>
  )
}
