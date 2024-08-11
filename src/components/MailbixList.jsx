import { Link } from "react-router-dom"

const MailbixList = (props) => {
    return (
        <>
        <h2>Mails List</h2>
        <ul>
            {props.mails.map((currentMail) => {
                return <li>
                 <Link to={`/mailboxes/${currentMail._id}`}>mail {props.mails.indexOf(currentMail)+1}</Link> 
                    </li>
            })}
        </ul>
        </>
    )
}

export default MailbixList