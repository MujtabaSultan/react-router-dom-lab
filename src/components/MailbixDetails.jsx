import { useParams } from "react-router-dom";

const MailbixDetails = (props,mails) => {
  const { mailId } = useParams();

 console.log(props.mails)
  console.log(mailId);


  const oneMail = props.mails.find((mail) => {
    return mail._id === Number(mailId);
  });
  console.log(oneMail)

  return (
    <>
      <h1>mail {props.mails.indexOf(oneMail)+1}</h1>
      <h3>details:</h3>
      <p>box holder: {oneMail.boxholder}</p>
      <p>box size: {oneMail.boxsize}</p>
    </>
  );
};

export default MailbixDetails;
