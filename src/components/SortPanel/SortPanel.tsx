import "./SortPanel.scss";

interface SortPanelProps {
    sort: any
}

const SortPanel: React.FC<SortPanelProps> = ({sort}) => {
    return(
        <thead className="sort-panel">
            <tr>
                <th onClick={() => sort("v1")}>Infinitive</th>
                <th onClick={() => sort("v2")}>Past Simple</th>
                <th onClick={() => sort("v3")}>Past Participle</th>
                <th onClick={() => sort("translate")}>Translate</th>
            </tr>
        </thead>
    )
}

export default SortPanel;