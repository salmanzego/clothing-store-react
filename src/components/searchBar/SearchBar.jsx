import './SearchBar.css'

const SearchBar = ({query, setQuery}) => {
    
    const handleSearch = (event) => {
        setQuery(event.target.value);
    }
    return (
        <div className="search_bar">
            <input type="search" name="" id="" placeholder="search" value={query} onInput={(e)=>{handleSearch(e)}} />
        </div>
    )
}

export default SearchBar;