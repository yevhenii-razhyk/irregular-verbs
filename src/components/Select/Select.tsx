import "./Select.scss"

interface SelectProps {
    onChange: any,
}

const Select: React.FC<SelectProps> = ({onChange}) => {

    return(
        <select className="select" onChange={(e) => onChange(e.target.value)}>
            <option value="v1">Infinitive</option>
            <option value="v2">Past Simple</option>
            <option value="v3">Past Participle</option>
            <option value="translate">Translate</option>
        </select>
    )
}

export default Select;