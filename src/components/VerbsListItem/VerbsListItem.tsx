import { IVerb } from "../../models/IVerb";

type VerbsListItemProps = {
    verb: IVerb
}

const VerbsListItem: React.FC<VerbsListItemProps> = ({verb}) => {
    return(
        <tr>
            <td>to {verb.v1}</td>
            <td>{verb.v2}</td>
            <td>{verb.v3}</td>
            <td>{verb.translate}</td>
        </tr>
    )
}

export default VerbsListItem;