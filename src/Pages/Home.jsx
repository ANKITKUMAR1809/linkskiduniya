import React from 'react'
import { Links } from '../Components/Links/Links'
import LinkList  from '../Components/assets/my_links.js'
import './Css/Home.css'
export const Home = () => {
  let my_link = LinkList;
  return (
    <>
      <div className="linklist">
        {my_link.map((item, i) => {
          return <Links link={item.link} logo={item.logo} name={item.name} date={item.date} />
        })}
      </div>
    </>
  )
}
