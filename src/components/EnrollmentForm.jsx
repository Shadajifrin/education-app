// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Back from './Back';

const EnrollmentForm = () => {
  const [user, setUser] = useState({
    Name: '',
    Email: '',
    Number: '',
    Course: ''
  });
  const [errors, setErrors] = useState({
    Name: '',
    Email: '',
    Number: ''
  });
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    validateInput(name, value);
  };
  const validateInput = (name, value) => {
    switch (name) {
      case 'Name':
        setErrors({...errors, [name]: value.match(/^[a-zA-Z\s]*$/) ? '' : 'Name must contain only letters and spaces'});
        break;
      case 'Email':
        setErrors({...errors, [name]: value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/) ? '' : 'Invalid email address'});
        break;
      case 'Number':
        setErrors({...errors, [name]: value.match(/^\d{10}$/) ? '' : 'Phone number must be 10 digits'});
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    };

    const res = await fetch('https://reactfirebase-ed6c9-default-rtdb.firebaseio.com/UserData.json', options);
    if (res.ok) {
      alert('Enrolled Successfully');
    } else {
      alert('Error Occurred');
    }
  };

  return (
    <div className='enrollment-form'>
      <Back title="Enrollment Form" />
      <h2>Enrollment Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="Name"
            value={user.Name}
            autoComplete='off'
            onChange={handleChange}
            required
          />
          <span className="error">{errors.Name}</span>
        </div>
        <div>
          <label className="email">Email:</label>
          <input
            type="email"
            id="email"
            name="Email"
            value={user.Email}
            autoComplete='off'
            onChange={handleChange}
            required
          />
              <span className="error">{errors.Email}</span>
        </div>
        <div>
          <label className="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="Number"
            value={user.Number}
            autoComplete='off'
            onChange={handleChange}
            required
          />
              <span className="error">{errors.Number}</span>
        </div>
        <div>
          <label className="selectedCourse">Select Course:</label>
          <select
            id="selectedCourse"
            name="Course"
            value={user.Course}
            onChange={handleChange}
            required
          >
            <option value="">Select a course</option>
            {courses.map(course => (
              <option key={course.id} value={course.name}>
                {course.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Enroll</button>
      </form>
    </div>
  );
};

export default EnrollmentForm;
