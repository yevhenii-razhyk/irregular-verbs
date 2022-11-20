import React, { useMemo, useState } from 'react';
import VerbsList from '../VerbsList/VerbsList';
import './App.scss';
import { verbsList } from '../../verbsList';
import SortPanel from '../SortPanel/SortPanel';
import Search from '../Search/Search';
import Select from '../Select/Select';

const App: React.FC = () => {

    const verbs = verbsList;
    const [selectedSort, setSelectedSort] = useState("");
    const [selectedSearch, setSelectedSearch] = useState("");
    const [searchQuerry, setSearchQuerry] = useState("")

    const sortList = (sort: string) => {
        setSelectedSort(sort);
    }

    const sortedList = useMemo(() => {
        if (selectedSort) {
            return [...verbs].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
        } else {
            return verbs;
        }
    }, [selectedSort, verbs]);

    const sortedAndSearchedList = useMemo(() => {
        if (selectedSearch) {
            return [...sortedList].filter(verb => verb[selectedSearch].toLowerCase().startsWith(searchQuerry.toLowerCase().trim()));
        } else {
            return verbs;
        }
    }, [searchQuerry, sortedList, selectedSearch])

    return (
        <div className="app">
            <div className="app__search">
                <Search
                    value={searchQuerry}
                    onChange={(value: string) => setSearchQuerry(value)}
                    placeholder={`Search verb in ${selectedSearch}`}
                />
                <Select onChange={(value: string) => setSelectedSearch(value)} />
            </div>
            <div className="app__wrapper">
                <table className="table">
                    <SortPanel sort={sortList} selectedSort={selectedSort} />
                    <VerbsList verbs={sortedAndSearchedList} />
                </table>
            </div>
        </div>
    );
}

export default App;
