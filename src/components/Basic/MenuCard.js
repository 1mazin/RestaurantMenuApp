import React from 'react';
import Menu from './menuApi';

const MenuCard = ({menuData}) => {
console.log(menuData)
  return (
  <>
    
        <section className='main-card--cointainer'>
        {menuData.map((curElem)=>{
            const { id,image, name, category, price, description } = curElem;
        return (
        <>
        <div className='card-container' key={id}>
            <div className='card'>
            <div className='card-body'>
                <span className='card-number card-circle subtle'>{id}</span>
                <span className='card-author subtle' >{category}</span>
                <h2 className='card-title'>{name}</h2>
                <span className="card-description subtle">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe distinctio deleniti quos nulla. Sunt assumenda optio qui nostrum atque doloribus quos sapiente, debitis ea necessitatibus suscipit, repudiandae enim voluptate perferendis?
                </span>
                <div className='card-read'>Read</div>
    

            </div>
            <img src={image} alt="images" className='card-media' />
            </div>
        </div>
        </>
            

            );

        })}
    
</section>

 

</> 
  );
};

export default MenuCard
