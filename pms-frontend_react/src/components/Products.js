
import { useEffect, useState } from 'react';

function Products(){


    let [products,setproducts]=useState();


    useEffect(function(){
      fetch("http://localhost:8000/products",{
        method:"GET"
      })
      .then(function(response){
        return response.json();
      })
      .then(function(data){
        setproducts(data);
        console.log(data);
      })
      .catch(function(err){
        console.log(err);
      })
  
    },[]);

    return(
        <div className="container">
            <h3>All Products</h3>

            <table className="table table-striped mt-4">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                      products.map(function(product,index){
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td>
                                    <i className="fa-regular fa-pen-to-square text-success me-1"></i>
                                    <i className='fa-solid fa-trash text-danger'></i>
                                </td>                                
                            </tr>
                        );
                      })

                    }
                </tbody>
            </table>
        </div>  
    );
}

export default Products;