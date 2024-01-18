
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function Products(){


    let [products,setproducts]=useState([]);


    let [modalvisible,setmodalvisible]=useState(false);

    let product=useRef({});

    function setUpdate(pro){
      setmodalvisible(true);
      product.current=pro;
    }

    function closeModal(){
      setmodalvisible(false);
    }

    // function readUpdate(property,value){
  

    // }



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
      <div>

       {
        modalvisible===true?(
          <div className="modalopen">
            <div className="center">

            <i class="fa-regular fa-circle-xmark text-danger close" onClick={function(){
              closeModal();
            }}></i>

            <h3>Update</h3>
            <form>
                <input type="Number" placeholder="Id" className="form-control mb-3" defaultValue={product.current.id}></input>
                <input type="text" placeholder="Enter Name" className="form-control mb-3" defaultValue={product.current.name}></input>
                <input type="text" placeholder="Enter Price" className="form-control mb-3" defaultValue={product.current.name}></input>
                <input type="text" placeholder="Enter Quantity" className="form-control mb-3" defaultValue={product.current.quantity}></input>

                <button  type='button' className="btn btn-primary">Update</button>

            </form>
              

            </div>
          </div>

        ):
        null
       }
        

      
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
                                    <i className="fa-regular fa-pen-to-square text-success me-1" onClick={function(){
                                      setUpdate(product);
                                    }}></i>
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

      </div>
    );
}

export default Products;