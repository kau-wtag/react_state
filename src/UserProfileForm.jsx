import React, { useState } from 'react';

function UserProfileForm() {
  const [userInfo, setUserInfo] = useState({
    name: '',
    age: '',
    location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User Info:', userInfo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={userInfo.name}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={userInfo.age}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={userInfo.location}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Update Profile</button>
    </form>
  );
}

export default UserProfileForm;
