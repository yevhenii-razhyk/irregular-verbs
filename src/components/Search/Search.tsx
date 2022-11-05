import "./Search.scss"


interface SearchProps {
    value: string,
    onChange: any,
    placeholder: string;
}

const Search: React.FC<SearchProps> = ({value, onChange, placeholder}) => {
    return(
        <input className="search" type="text" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} />
    )
}

export default Search