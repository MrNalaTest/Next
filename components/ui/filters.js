"use client";
import React, { useState } from 'react'
import { Button } from './button'
import { ComboBoxResponsive } from '@/components/ui/Combobox'
import { Cards } from './cards';

export const Filters = ({onFilterChange}) => {
  
  const [selectedTag, setSelectedTag] = useState("All Products");

  const handleFilterChange = (tag) => {
    setSelectedTag(tag);
    onFilterChange(tag); // Envía el cambio hacia pages.js
  };

  const handleClearFilter = () => {
    setSelectedTag("All Products");
    onFilterChange("All Products");
  };
  
  return (
    <div>
      <div className="flex">
          <div className="m-2">
            < Button onClick={handleClearFilter} > Clear Filter </Button> 
          </div>
          <div className="m-2">
            <ComboBoxResponsive onFilterChange={handleFilterChange}/>
          </div>
      </div>
          <div>
            <Cards selectedTag={selectedTag} />
          </div>
    </div>
  )
}
