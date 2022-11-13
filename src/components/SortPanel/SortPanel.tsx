import "./SortPanel.scss";

interface SortPanelProps {
    sort: any,
    selectedSort: string
}

const SortPanel: React.FC<SortPanelProps> = ({sort, selectedSort}) => {

    const selectClassName = (marker:string) => {
        return marker === selectedSort ? "sort-panel__icon active" : "sort-panel__icon"
    }

    return(
        <thead className="sort-panel">
            <tr>
                <th onClick={() => sort("v1")}>
                    <div>
                        Infinitive
                        <img className={selectClassName("v1")} src={require(`../../assets/icons/arrow.svg`).default} alt="" /></div>            
                </th>
                <th onClick={() => sort("v2")}>
                    <div>
                        Past Simple
                        <img className={selectClassName("v2")} src={require(`../../assets/icons/arrow.svg`).default} alt="" />
                    </div>
                </th>
                <th onClick={() => sort("v3")}>
                    <div>
                        Past Participle
                        <img className={selectClassName("v3")} src={require(`../../assets/icons/arrow.svg`).default} alt="" />
                    </div>
                </th>
                <th onClick={() => sort("translate")}>
                    <div>
                        Translate
                        <img className={selectClassName("translate")} src={require(`../../assets/icons/arrow.svg`).default} alt="" />
                    </div>
                </th>
            </tr>
        </thead>
    )
}

export default SortPanel;