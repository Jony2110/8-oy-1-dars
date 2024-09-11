import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../redux/cartSlice';

const Hero = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(state => state.cart);

  const addProduct = () => {
    dispatch(addItem({ id: 1, name: 'Sample Product' }));
  };

  const removeProduct = () => {
    dispatch(removeItem(1));
  };

  return (
    <section className="p-4 container mx-auto flex justify-between items-center h-full w-full">
    <div className='flex flex-col  '>
    <p className='text-blue-700 mb-[1.706rem]'>- Webflow Design Agency</p>
      <h2 className="  mb-[0.752rem] w-[32.556rem] text-2xl font-bold">A top-notch Webflow <br /> Design Agency</h2>
      <p className='mb-[3.028rem] w-[31.229rem]'>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere vel venenatis eu sit massa volutpat massa rhoncus odio feugiat tellus, elit massa sed.</p>
      
      <div>
      <button  onClick={addProduct} className= " rounded-xl bg-blue-500 text-white p-2 ">Add to Cart</button>
      <button onClick={removeProduct} className=  "rounded-xl bg-red-500 text-white p-2  ml-2">Remove from Cart</button>
      </div>
      <div>
        <h3 className="mt-4 text-lg">Cart Items:</h3>
        {items.length > 0 ? (
          items.map(item => <p className='flex flex-wrap' key={item.id}>{item.name}</p>)
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </div>
    <img className='h-[40rem] w-[48rem]' src="./img/Mask Group.png" alt="" />
    </section>
  );
};

export default Hero;
