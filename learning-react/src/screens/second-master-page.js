import React, {useContext} from 'react';

import DataSharing from '../context-api';

const SecondMasterPage = () => {

  const context = useContext(DataSharing);

  const searchList = context.searchHistory.map((value, index) => {
    return(
      <h2 key={index}>You have been searched for {value}</h2>
    )
  })

  return (
    <div>
      <h1>Your Search History</h1>
      {searchList}
    </div>
  );
};

export default SecondMasterPage;