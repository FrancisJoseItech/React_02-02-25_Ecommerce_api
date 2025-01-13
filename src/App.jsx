import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ProductCard from './components/ProductCard'
//importing useEffect
import { useEffect } from 'react'

//import axios
import axios from 'axios';


function App() {

  // c-for storing product and since i is an Array, we will be using brackets here[]
   const[products,setProducts]=useState([])
 
  // c-fetch is used to hit the api; useEffect is where we write code for things to work during rendering
   useEffect(()=>{
  //   fetch('https://fakestoreapi.com/products')
  //           .then(res=>res.json())
  //           .then(json=>{
  //             console.log(json)
  //             // c- here we are using setProducts to update the state; items are coming as an array
  //             setProducts(json)
  //  })

  // // c-axios
  //   c- if the call is sccess we will be getting in then;if there is error you will get in catch;res.data as the object is available in data key
        axios.get('https://fakestoreapi.com/products').then((res)=>{
          console.log(res.data);
          setProducts(res.data)
        }).catch((err)=>{
          console.log(err);
        })

   },[])

  return (
    <div className='container text-center'>
      <div className='row'>
        <h1 className='bg-primary text-white'>Fake Store</h1>
      </div>
      
      <div className='row g-2 mt-2'>

        {/* //c-col-md-4 is used for limited number of cards as column */}

      {/* c- products here is the state; so the iteration happen and then each item in the array is rendered */}
        {products.map((product)=>(
          // c-key is given for unique rendering of the item; id is used as it is unique
          <div key={product.id} className='col-md-3'>
            {/* here we are passing the items of the array as props to the productCard */}
          < ProductCard item={product}/>
          
      </div>
        ))
      }
          <h6 className='bg-dark text-white'>2024 Fake Store. All rights reserved</h6>
          </div>
    

    </div>
  )
}

export default App

// we will call the api in the UseEffect;then we will use the items received in the state;then that state is mapped to get the card rendered
// axios is a package to make hit api using get; this will not be using fetch