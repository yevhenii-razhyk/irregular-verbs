import { IVerb } from "../../models/IVerb";
import VerbsListItem from "../VerbsListItem/VerbsListItem";

import "./VerbsList.scss"

type VerbsListProps = {
    verbs: IVerb[]
}

const VerbsList: React.FC<VerbsListProps> = ({verbs}) => {
    return (
        <tbody className="verb-list">
            {
                verbs.map(verb => (
                    <VerbsListItem key={verb.id} verb={verb}/>
                ))
            }
        </tbody>
    )
}

export default VerbsList;