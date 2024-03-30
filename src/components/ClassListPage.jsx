// eslint-disable-next-line no-unused-vars
import React from 'react';

const ClassListPage = ({ formData }) => {
  return (
    <div>
      <h2>Class List</h2>
      <ul>
        {formData.map((data, index) => (
          <li key={index}>
            Course Name: {data.course_name}, Validity: {data.validity}, Price: {data.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClassListPage;
