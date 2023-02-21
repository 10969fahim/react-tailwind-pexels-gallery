import React, { useState } from 'react';

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  }

  return (
    <div className='mb-3' style={{backgroundImage:`url(https://cdn.pixabay.com/index/2023/02/16/08-11-44-830_1920x550.jpg)`, height:'300px', backgroundPosition:'center center', backgroundSize:'cover'}}>
      <div className='max-w-lg rounded overflow-hidden mx-auto' style={{paddingTop:'10%'}}>
        <h1 className='text-xl font-bold text-white'>Temukan gambar yang anda inginkan dengan mencari dengan kata kunci</h1>
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <div className="flex items-center py-2">
        <input onChange={e => setText(e.target.value)} className="appearance-none px-2 py-2 bg-white border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search Image Term..." />
        <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
      Search
      </button>
      </div>
      </form>
		</div>
    </div>
  )
}

export default ImageSearch;
