// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const EnrollmentForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  
 
  const courses = [
    { id: 1, name: 'Introducing to Software Engineering' },
    { id: 2, name: 'Enhancing Adobe Photoshop CC 2020 Skills' },
    { id: 3, name: 'HTML, CSS, and Javascript for Web Developers' },
    { id: 4,name:'Introducing to Programming with WordPress'},
    { id: 5,name:'Introducing to Programming with ReactJS'},
    { id: 6,name:'Learn Frontend Programming Language'}, 
    { id: 7,name:'Introducing to Programming with HTML / CSS'}, 
    { id: 8,name:'Introducing to Programming with JAVA'},
  ];

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ fullName, email, phoneNumber, selectedCourse });
    setFullName('');
    setEmail('');
    setPhoneNumber('');
    setSelectedCourse('');
  };

  return (
    <div>
      <h2>Enrollment Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="selectedCourse">Select Course:</label>
          <select
            id="selectedCourse"
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
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
