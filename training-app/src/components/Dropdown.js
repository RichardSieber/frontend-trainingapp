import React from 'react'

const Dropdown = () => {
    
    const [name, setName] = React.useState('');
      
      
    const handleNameChange = (event) => {
        setName(event.target.value);
    };
  return (
    <div className='app-dropdown' >
    <Menu 
      label="Bitte einen Namen auswählen!  "
      options={[
        { label: 'A', value: 'a' },
        { label: 'B', value: 'b' },
        { label: 'C', value: 'c' },
      ]}
      value={name}
      onChange={handleNameChange}
    />
    </div>
  )
}
const Menu = ({ label, value, options, onChange }) => {
    return (
      <label>
        {label}
        <select 
        value={value}
        onChange={onChange}>
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>
    );
  };

export default Dropdown