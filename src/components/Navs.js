import React from 'react';
import { Link } from 'react-router-dom';
const LINKS=[
    {to:'/' , text: 'Home'},
    {to:'/starred', text:'starred'}
]
const Navs = () => {
  return (
    <div>
      <ui>
        {LINKS.map(item=>(
            <li key={item.do}>
             <Link to ={item.do}> {item.text}</Link>
            </li>
        ))}
       
      </ui>
    </div>
  );
};

export default Navs;
