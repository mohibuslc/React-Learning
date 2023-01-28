import {react} from 'react'; 

import "./index.css";

function TodoApp(){

    const heading = " Todo Apps " ; 

    const cardTitle ="Call Family"

    const cardDetails ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit architecto ad vel iste quidem consequuntur qui eos recusandae fugiat, sit sunt. Libero qui quas nisi voluptate explicabo consequuntur delectus."
    const date = new Date();
    const dateName = date.getDay();
    const monthName = date.getMonth();
    const currentYear = date.getFullYear();
    return(


        <>
        <h1 className='heading'>{heading}</h1>

        <div className='card'>
        <h3 className='title'>{cardTitle}</h3>
        <p className='details'>{cardDetails}</p>
        <p className='footer'>{dateName+ "/ "+ monthName +" / "+currentYear}</p>
        </div>
        
        </>
    )
}

export default TodoApp ; 