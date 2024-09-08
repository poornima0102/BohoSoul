import React from 'react'

const CategoryForm = ({handleSubmit,value,setValue}) => {
  return (
    <>
<form onSubmit={handleSubmit}>
  <div className="mb-3">
    
    <input type="text" className="form-control" 
    placeholder='Enter new category'
    value={value}
    onChange={(e)=>setValue(e.target.value)}
    />
   
  </div>
 
  <button type="submit" className="btn btn-primary w-50 "
  style={{ backgroundColor: '#9373cf ', borderColor: '#b4a5cf' }}>
    Submit
  </button>
</form>

    </>
  )
}

export default CategoryForm
