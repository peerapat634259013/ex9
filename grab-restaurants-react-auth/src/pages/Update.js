import React, {useState, useEffect } from 'react' //Effect ทำงานเมื่อหน้าเว็บโหลดขึ้นมา
import { Link, useNavigate , useParams } from 'react-router-dom'
import axios from 'axios'

const Update = () => {
  const [restaurant, setRestaurants] = useState({
    name:"",
    type:"",
    imageurl:""
  });
  const { restaurantId } = useParams();
  useEffect(()=>{
        const fetchAllRestaurant = async () =>{
            try {
                const res = await axios.get("http://localhost:5000/apis/restaurants/" + restaurantId
                );
                setRestaurants(res.data)
            } catch(error){
                console.log(error);
            }
        };
        fetchAllRestaurant();
    }, [restaurantId]);
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const handleChange = (e) =>{
    setRestaurants((prev)=>({...prev, [e.target.name]:e.target.value})); //...prev ก็อปของเดิม มาเปลี่ยนแปลงค่าใหม่ ที่2ตัวหลัง  
  };

  const handleClick = async (e) =>{
    e.preventDefault();
    try {
      await axios.put("http://localhost:5000/apis/restaurants/"+ restaurantId,
      restaurant
      );
      navigate("/") //เมื่อทำงานเสร็จแล้วให้เด้งไปที่หน้าแรก
    } catch (error) {
      console.log(error);
      setError(true)
    }
  };
  return (
   <div className='container'>
      <h1>Grab Restaurant</h1>
      <div className='row form'>
        <div className='col-6 card justify-content-center'>
          <h5 className='card-header'>Updaterestaurant</h5>
          <div className='card-body'>
              <form>
                <div className='form-group'>
                  <label>Restaurant Name</label>
                  <input type="text"
                   className='from-control' 
                   name="name" 
                   value={restaurant.name}
                  placeholder='Restaurant name' 
                  onChange={handleChange}
                  />
                </div>
                <div className='form-group'>
                  <label>Restaurant Type</label>
                  <input type="text" 
                  className='from-control' 
                  name="type"  
                  value={restaurant.type}
                  placeholder='Restaurant type' 
                  onChange={handleChange}
                  />
                </div>
                <div className='form-group'>
                  <label>Restaurant Image</label>
                  <input type="text"
                   className='from-control'
                    name="imageurl"
                     value={restaurant.imageurl}
                   placeholder='Restaurant Image'
                   onChange={handleChange}
                   />
                </div>
                <Link to="/" className="btn btn-success" onClick={handleClick}>
                  Update
                </Link>
                {" "}
                 <Link to="" className="btn btn-danger">
                  Cancel
                </Link>
                <div className="error">{error && "error โว้ยยยยย"} </div> 
              </form>
          </div>
        </div>
      </div>
   </div>
  )
}

export default Update