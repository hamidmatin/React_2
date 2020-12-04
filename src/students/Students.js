import React, { useState } from 'react';

import Loading from '../loading/Loading';

export default function Students() {
  const [studentList, setStudentList] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  const loadListHandler = () => {
    setIsloading(true);
    setTimeout(() => {
      const studentList = [
        {
          firstName: 'Hesam',
          lastName: 'Azadi',
        },
        {
          firstName: 'Shahrad',
          lastName: 'Gholizadeh',
        },
      ];
      setStudentList(studentList);
      setIsloading(false);
    }, 2000);
  };
  return (
    <div className='container'>
      <h1>Students List</h1>
      <hr />
      <>
        {isLoading ? (
          <Loading />
        ) : studentList.length === 0 ? (
          <>
            <p>List Is Empty</p>
            <button onClick={loadListHandler}>Load List</button>
          </>
        ) : (
          studentList.map((student) => {
            return (
              <div className='card'>
                <p>
                  <span>student Name: </span>
                  <span>{student.firstName}</span>
                </p>
              </div>
            );
          })
        )}
      </>
    </div>
  );
}
