
import { useRef } from "react";
import { Link } from "react-router-dom";



function Create(){

    let product={};


    function readProduct(property,value){
        product[property]=value;
    }

    let form=useRef();


    function createproduct(){
        fetch("http://localhost:8000/products",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(product)
        })
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
        })
        .catch(function(err){
            console.log(err);
        })

        form.current.reset();
    }
    return(

    <div className="container">
        <div className='header'>
            <h3>All Products</h3>
    
            <Link to="/products"><button className=' btn btn-primary'>All Products</button></Link>
        </div>

        <div className="inputs">
            <form ref={form}>
                <input type="Number" placeholder="Id" className="form-control mb-3" onChange={function(event){
                    readProduct('id',event.target.value);
                }}></input>
                <input type="text" placeholder="Enter Name" className="form-control mb-3" onChange={function(event){
                    readProduct('name',event.target.value);
                }}></input>
                <input type="text" placeholder="Enter Price" className="form-control mb-3" onChange={function(event){
                    readProduct('price',event.target.value);
                }}></input>
                <input type="text" placeholder="Enter Quantity" className="form-control mb-3" onChange={function(event){
                    readProduct('quantity',event.target.value);
                }}></input>

                <button  type='button' className="btn btn-primary" onClick={function(){
                    createproduct();
                }}>create product</button>

            </form>
            

        </div>

    </div>
    
  );
}
export default Create;