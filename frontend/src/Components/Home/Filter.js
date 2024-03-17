import React, { useState } from 'react';
import FilterModal from './FilterModal';

const Filter = () => {
       //state for controlling modal visibility 
 const [isModalOpen, setIsModalOpen] = useState(false);
    //state for storing selected filters
 const [selectedFilters, setSelectedFilters] = useState({});

    //function to handle opening the modal /pop upping window
 const handleOpenModal = () =>{
        setIsModalOpen(true); //sets ismodalopen to true to open the modal
    };

 //function to handle closing the modal
 const handleCloseModal = () => {
    setIsModalOpen(false); //sets ismodalopen to false to close the modal
 };
    
     // update the selected filters with the new values.
const handleFilterChange = (filterName, value) => {    
   setSelectedFilters((prevFilters) => ({
     ...prevFilters,
     [filterName]: value,
   }));
 };

  return (
    <>
    {/*click event to open the modal*/}
     <span className ="material-symbols-outlined filter" onClick={ handleOpenModal }>tune</span>
     {isModalOpen && (
     <FilterModal
     selectedFilters = {selectedFilters}
     onFilterChange = {handleFilterChange}
     onclose = {handleCloseModal} 
       />
      )}
    </>
  );
};

export default Filter;