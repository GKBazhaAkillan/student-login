import React from 'react'

const CustomInput = ({value,type,placeholder,onChange}) => {
  return (
    <div className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ">
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

export default CustomInput