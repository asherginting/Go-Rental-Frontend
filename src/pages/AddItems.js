// import React, {useRef, useState} from 'react';
// import { Link } from 'react-router-dom';
// import { FaChevronLeft} from 'react-icons/fa';
// import { useDispatch } from 'react-redux';
// // import { useNavigate } from 'react-router-dom';
// // import { increment, decrement } from '../redux/actions/counter';
// import noImage from '../assets/images/no-image.jpg';
// import {addVehicle} from '../redux/actions/addItems';

// export const AddItems = () => {
//     // const navigate = useNavigate();
//     // const counter = useSelector(state => state.counter);
//     const hiddenFileInput = useRef(null);
//     const [image, setImage] = useState();
//     const [input, setInput] = useState();
//     // const [paymentMethod, setPaymentMethod] = useState();
//     const dispatch = useDispatch();

//     const uploadFile = (e) => {
//         e.preventDefault();
//         hiddenFileInput.current.click();
//     };

//     const fileInputHandler = (e) => {
//         const reader = new FileReader();
//         const image = e.target.files[0];
//         reader.readAsDataURL(image); 
    
//         reader.onload = () => {
//             setImage(reader.result);
//         };
//         setInput ({image});
//     };

//     const addItem =(e)=>{
//         e.preventDefault();
//         if(image){
//             const image = input.image;
//             const id_category = e.target.elements['id_category'].value;
//             const brand = e.target.elements['brand'].value;
//             const capacity = e.target.elements['capacity'].value;
//             const location = e.target.elements['location'].value;
//             const price = e.target.elements['price'].value;
//             const qty = e.target.elements['qty'].value;
//             const data = {image, id_category, brand, capacity, location, price, qty};
//             console.log(data);
//             dispatch(addVehicle(data));
//         }else{
//             const id_category = e.target.elements['id_category'].value;
//             const brand = e.target.elements['brand'].value;
//             const capacity = e.target.elements['capacity'].value;
//             const location = e.target.elements['location'].value;
//             const price = e.target.elements['price'].value;
//             const qty = e.target.elements['qty'].value;
//             const data = {image, id_category, brand, capacity, location, price, qty};
//             console.log(data);
//             dispatch(addVehicle(data));
//         }
//     };
  
//     return (
//         <section>
//             <main className="container">
//                 <section className="back">
//                     <div className='pt-3'>
//                         <Link to="/vehicleType">
//                             <FaChevronLeft />
//                             <span>Add new item</span>
//                         </Link>
//                     </div>
//                 </section>

//                 <section className="preview">
//                     <form onSubmit={addItem}>
//                         <div className="row pt-5 pic mt-5">
//                             <div className="col text-center" style={{ cursor: 'pointer' }}>
//                                 <img src={image||noImage} className="img-fluid add" alt="Vehicle Detail" onClick={(e) => uploadFile(e)}/>
//                                 <input type="file"
//                                     ref={hiddenFileInput}
//                                     className='d-none'
//                                     name='image'
//                                     accept='profileImage'
//                                     onChange={(e) => fileInputHandler(e)}
//                                 />
//                                 <button type='submit' className="filled w-50 mt-5 btn btn-primary mb-5" style={{ cursor: 'pointer', fontWeight:'bold' }}>Save Item</button>
//                             </div>
//                             <div className="col">
//                                 <div className="desc">
//                                     <label style={{ fontSize: 24, fontFamily:'Playfair Display', fontWeight:'bold'}} className='mb-2'>Category</label>
//                                     <select id='id_category' name='isAvailable' className="form-select  w-100 mb-5">
//                                         <option value="" style={{ display: 'none' }}>Select Category</option>
//                                         <option value="1" className='text-dark'>Cars</option>
//                                         <option value="2" className='text-dark'>Motorbike</option>
//                                         <option value="3" className='text-dark'>Bike</option>
//                                     </select>
//                                     <div className="mb-3">
//                                         <input placeholder='Vehicle Name' id='brand' name='brand' className="d-block w-100 input-underline" type="text" />
//                                     </div>
//                                     <div className="mb-3">
//                                         <input placeholder='Capacity' id='capacity' name='capacity' className="d-block w-100 input-underline" type="text" />
//                                     </div>
//                                     <div className="mb-3">
//                                         <input placeholder='Location' id='location' name='location' className="d-block w-100 input-underline" type="text" />
//                                     </div>
//                                     <div className="mb-3">
//                                         <input placeholder='Price' id='price' name='price' className="d-block w-100 input-underline" type="number" />
//                                     </div>
//                                     <div className="mb-4">
//                                         <input placeholder='Qty' id='qty' name='qty' className="d-block w-100 input-underline" type="number" />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </form>
//                 </section>
//             </main>
//         </section>
//     );
// };

// export default AddItems;


