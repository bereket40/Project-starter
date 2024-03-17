import React, { useState } from 'react';
import { DatePicker, Space } from 'antd';

function Search() {
  const { RangePicker } = DatePicker;
  const [keyword, setKeyword] = useState({});

  // Storing the data range value
  const [value, setValue] = useState([]);

  function returnDates(date, dateString) {
    // Setting the date range value in state
    setValue([date[0], date[1]]);
    // Updating keyword object with date range
    updateKeyword('dateIn', dateString[0]);
    updateKeyword('dateOut', dateString[1]);
  }

  // Function to update a specific field in the keyword state object
  const updateKeyword = (field, value) => {
    setKeyword((prevKeyword) => ({
      ...prevKeyword,
      [field]: value,
    }));
  };

  return (
    <>
      <div className="searchbar">
        {/* Input field for searching destination */}
        <input
          className="search"
          id="search_destination"
          placeholder="Search destination"
          type="text"
          value={keyword.city}
          onChange={(e) => updateKeyword('city', e.target.value)}
        />
        {/* Date Range Picker */}
        <Space direction="vertical" size={12} className="search">
          <RangePicker
            format="YYYY-MM-DD"
            picker="date"
            className="date_picker"
            disabledDate={(current) => {
              return current && current.isBefore(Date.now(), 'day');
            }}
            onChange={returnDates}
          />
        </Space>
        {/* Input field for adding guest */}
        <input
          className="search"
          placeholder="Add guest"
          id="addguest"
          type="number"
          value={keyword.guests}
          onChange={(e) => updateKeyword('guests', e.target.value)}
        />
        {/* Search icon */}
        <span className="material-symbols-outlined search-icon"></span>
        
      </div>
    </>
  );
}

export default Search;