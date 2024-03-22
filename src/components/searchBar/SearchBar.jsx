import './SearchBar.css'

const SearchBar = ({ state, setState }) => {

    const handleSearch = (event) => {
        setState(prev => { return { ...prev, query: event.target.value } });
    }
    return (
        <div className="search_bar">
            <input type="search" name="" id="" placeholder="search" value={state.query} onInput={(e) => { handleSearch(e) }} />
        </div>
    )
}

export default SearchBar;