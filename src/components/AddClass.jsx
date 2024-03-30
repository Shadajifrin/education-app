// eslint-disable-next-line no-unused-vars
import React,{useCallback} from 'react'
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import toast from 'react-hot-toast';
import { FaAngleLeft } from "react-icons/fa";
import { MdFileUpload } from "react-icons/md";
import { useHistory } from 'react-router-dom';
import Back from './Back';


const AddClass = () => {
    const courses = [
        { id: 1, name: 'Introducing to Software Engineering' },
        { id: 2, name: 'Enhancing Adobe Photoshop CC 2020 Skills' },
        { id: 3, name: 'HTML, CSS, and Javascript for Web Developers' },
        { id: 4, name: 'Introducing to Programming with WordPress' },
        { id: 5, name: 'Introducing to Programming with ReactJS' },
        { id: 6, name: 'Learn Frontend Programming Language' },
        { id: 7, name: 'Introducing to Programming with HTML / CSS' },
        { id: 8, name: 'Introducing to Programming with JAVA' },
      ];
      const [addclass, setAddClass] = useState({
        image: null,
        course_name: '',
        validity: '',
        price: '',
      });
      const history = useHistory();
      const [error, setError] = useState({ validityity: '', price: '' });
      const handleBack = () => {
        
        history.push('/login');
      };
      const onDrop = useCallback(acceptedFiles => {
        if(acceptedFiles.length>1)
        {
          toast.error('cannot add more than one file')
        }else {
          const selectedFile = acceptedFiles[0];
          console.log('Selected File:', selectedFile);
      
         
          setAddClass({
            ...addclass,
            image: selectedFile,
          });
        }
      }, [addclass]);
     
      const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
      const handleInputChange = (e) => {
        const {  value } = e.target;
     
        
        setAddClass({
          ...addclass,
          course_name: value,
        });
      };
      const handlevalidityChange = (event) => {
        const value = event.target.value;
    
       
        if (!isNaN(value) || value === '') {
          setAddClass({ ...addclass, validity: value });
          setError({ ...error,validity: '' });
        } else {
          setError({ ...error, validity: 'Please enter a valid number' });
        }
      };
     
      const handlepriceChange = (event) => {
        const value = event.target.value;
    
       
        if (!isNaN(value) || value === '') {
          setAddClass({ ...addclass, price: value });
          setError({ ...error, price: '' });
        } else {
          setError({ ...error, price: 'Please enter a valid number' });
        }
      };
      
     

      // Function to handle form submission
      const handleAddClass = () => {
        // Handle form submission or validation here
        history.push({
          pathname: '/classlist',
          state: { formData: addclass },
        });
      };
    
 
      const handleCancel = () => {
        setAddClass({
            image: null,
            course_name: '',
            validity: '',
            price: '',
        });
      };
  return (
    <div className='addclass'>
      <Back/>
      <div  className='addclass-heading'>
      <FaAngleLeft  className='back-btn' onClick={handleBack} />
        <h2 className='addclass-h2'>Add New Class</h2>
      </div>
      <label className='file-label'>Class</label>
      <div className='dragdrop-box' {...getRootProps()}>
        <input 
          {...getInputProps()} />
          <MdFileUpload  className='icon-upload'/>
        {
          isDragActive ?

            <p className='dragdrop-text'>Drag & drop your files here</p>:
            // eslint-disable-next-line react/no-unescaped-entities
            <p className='dragdrop-text'>Drag 'n' drop your files here </p>
        }
        
      </div>
      <div>
        <label   className='addclass-label'>Course Name</label>
        <select
            className="input-coursename"
            name="Course"
            required
            value={addclass.course_name}
          onChange={handleInputChange}
          >
            <option value="">Select a course</option>
            {courses.map(course => (
              <option key={course.id} value={course.name}>
                {course.name}
              </option>
            ))}
          </select>
      </div>
      <div>
        <label  className='addclass-label'>Validity:</label>
        <input
          className='input-validity'
          type="text"
          name="validity"
          value={addclass.quantity}
          onChange={handlevalidityChange}
        />
         {error.validity && <span className="add-class-error">{error.validity}</span>}
      </div>
      <div>
        <label  className='addclass-label'>Price:</label>
        <input
          className='input-price'
          type="text"
          name="price"
          value={addclass.price}
          onChange={handlepriceChange}
        />
         {error.price && <span className="add-class-error">{error.price}</span>}
      </div>
      <div className='btns'>
        <button onClick={handleCancel} className='btn-cancel'>Cancel</button>
        <button onClick={handleAddClass} className='btn-add'>Add </button>
      </div>
    </div>
  
  )
}

export default AddClass
