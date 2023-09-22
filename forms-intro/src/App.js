import './App.css';
import React from 'react';

function App() {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    comments: '',
    isFriendly: true,
    employment: '',
    favColor: '',
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    console.log(name, value, type, checked);
    setFormData(prevState => {
      return {
        ...prevState,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  }

  function handleSubmit(event) { 
    event.preventDefault() // won't refresh page and re-render app
    console.log(formData)
  }

  return (
    <form onSubmit="{handleSubmit}">
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="firstName"
        value={formData.firstName} //setting up a controlled componenet here, state drives the input
      />

      <input
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        name="lastName"
        value={formData.lastName}
      />

      <input
        type="text"
        placeholder="Email"
        onChange={handleChange}
        name="email"
        value={formData.email}
      />

      <textarea
        name="comments"
        onChange={handleChange}
        value={formData.comments}
        placeholder="Comments"
      />

      {/* Checkbox set up different than those above */}
      <input
        type="checkbox"
        id="isFriendly"
        checked={formData.isFriendly}
        onChange={handleChange}
        name="isFriendly"
      />

      <label htmlFor="isFriendly">Are you friendly?</label>

      {/* Radio buttons */}
      <fieldset>
        <legend>Current employment status</legend>

        <input
          type="radio"
          id="unemployed"
          name="employment"
          value="unemployed"
          checked={formData.employment === 'unemployed'}
          onChange={handleChange}
        />
        <label htmlFor="unemployed">Unemployed</label>

        <input
          type="radio"
          id="employed"
          name="employment"
          value="employed"
          checked={formData.employment === 'employed'}
          onChange={handleChange}
        />
        <label htmlFor="employed">Employed</label>

        <input
          type="radio"
          id="fullTime"
          name="employment"
          value="fullTime"
          checked={formData.employment === 'fullTime'}
          onChange={handleChange}
        />
        <label htmlFor="fullTime">Full Time</label>
      </fieldset>

      {/* Select box */}
      <label>What is your favorite color?</label>
      <select
        id="favColor"
        value={formData.favColor}
        onChange={handleChange}
        name="favColor">
        
        <option value="">Choose</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
      </select>

      <button>Submit</button>
    </form>
  );
}

export default App;
