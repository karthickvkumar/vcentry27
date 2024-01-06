import React, {useState} from 'react';

const HeaderComponent = (props) => {
  console.log(props);

  const [searchForm, updateSearchForm] = useState("");

  const getValueFromInput = (event) => {
    updateSearchForm(event.target.value);
  }

  const searchClicked = () => {
    props.dog(searchForm);
  }

  return (
    <div className='header'>
        {props.cat}
        <input className='search' placeholder='Search any Product...' onChange={getValueFromInput}/>
        <button className='search' onClick={() => searchClicked()}>Search</button> 
    </div>
  );
};

export default HeaderComponent;