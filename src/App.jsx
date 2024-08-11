import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/navBar";

import MailboxList from "./components/MailbixList";
import MailDetails from "./components/MailbixDetails";
import MailForm from "./components/MailForm";

const App = () => {
  const mailboxExample = {
    _id: 1,
    boxsize: "Small",
    boxholder: "Alex",
  };

  const [mails, setMails] = useState([mailboxExample]);

  const addmail = (newmail) => {

    const newBoi=newmail
    newBoi._id=mails.length+1
    setMails([...mails, newmail]);
    console.log(mails)
  };
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route path="/new" element={<MailForm addmail={addmail}/>} />
        <Route path="/mailboxes" element={<MailboxList mails={mails} />} />
        <Route
          path="/mailboxes/:mailId"
          element={<MailDetails mails={mails} />}
        />
      </Routes>
    </>
  );
};

export default App;
