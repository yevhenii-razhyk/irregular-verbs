import React, { useMemo, useState } from 'react';
import VerbsList from '../VerbsList/VerbsList';
import './App.scss';
import { verbsList } from '../../verbsList';
import SortPanel from '../SortPanel/SortPanel';
import Search from '../Search/Search';
import Select from '../Select/Select';

const App: React.FC = () => {

  const verbs = verbsList;
  const [selectedSort, setSelectedSort] = useState("v1");
  const [selectedSearch, setSelectedSearch] = useState("v1");
  const [searchQuerry, setSearchQuerry] = useState("")

  const sortList = (sort: string) => {
    setSelectedSort(sort);
  }

  const sortedList = useMemo(() => {
    if (selectedSort) {
      return [...verbs].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    } else {
      return verbs
    }
  }, [selectedSort, verbs]);

  const sortedAndSearchedList = useMemo(() => {
    return [...sortedList].filter(verb => verb[selectedSearch].toLowerCase().startsWith(searchQuerry.toLowerCase().trim()))
  }, [searchQuerry, sortedList, selectedSearch])

  return (
    <div className="App">
      <div className="App__search">
        <Search 
          value={searchQuerry} 
          onChange={(value: string) => setSearchQuerry(value)} 
          placeholder={`Search verb in ${selectedSearch}`}
        />
        <Select onChange={(value:string) => setSelectedSearch(value)}/>
      </div>
      <table className="table">
        <SortPanel sort={sortList} selectedSort={selectedSort}/>
        <VerbsList verbs={sortedAndSearchedList}/>
      </table>
    </div>
  );
}

export default App;
