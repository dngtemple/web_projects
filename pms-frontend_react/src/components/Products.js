
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Products(){


    let [products,setproducts]=useState([]);


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

    function deleteData(id){
        fetch("http://localhost:8000/products?id="+id,{
            method:"DELETE"
        })
        .then(function(response){
            return response.json();
        })
        .then(function(msg){
            console.log(msg);
        })
        .catch(function(err){
            console.log(err);
        })
    }

    return(
        <div className="container">
            <div className='header'>
              <h3>All Products</h3>

              <Link to='/create'><button className=' btn btn-primary'>Create</button></Link>
            </div>

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
                                    <i  onClick={function(){
                                        deleteData(product.id);
                                    }} className='fa-solid fa-trash text-danger'></i>
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