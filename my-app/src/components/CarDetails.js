import React, { useRef, useEffect } from 'react';

const CarDetails = ({ initialData,  onFormSubmit }) => {
  const formRef = useRef(null);

  useEffect(() => {
    if (formRef.current) {
     
      formRef.current.reset();
    }
  }, [initialData]);

  const handleSubmit = (event) => {
    event.preventDefault();

    
    const formData = new FormData(formRef.current);
    const model = formData.get('model');
    const year = formData.get('year');
    const color = formData.get('color');

    console.log('Model:', model);
    console.log('Year:', year);
    console.log('Color:', color);
    
    onFormSubmit({ model, year, color });
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="model">Model:</label>
        <input type="text" id="model" name="model" defaultValue={initialData.model} />
      </div>
      <div>
        <label htmlFor="year">Year:</label>
        <input type="number" id="year" name="year" defaultValue={initialData.year} />
      </div>
      <div>
        <label htmlFor="color">Color:</label>
        <input type="text" id="color" name="color" defaultValue={initialData.color} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CarDetails;