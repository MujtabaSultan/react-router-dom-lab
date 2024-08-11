import { useState } from "react";
import { useNavigate } from "react-router-dom";

const mailsForm = (props) => {
  //const [size, setSize] = useState("small");
  const [formData, setFormData] = useState({
    boxholder: "",
    boxsize: "small",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // setFormData({ ...formData, boxsize: size });
    props.addmail(formData);
    console.log(formData);
    navigate("/mailboxes");
  };

  return (
    <>
      <h2>new mail</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="boxholder">box holder:</label>
        <input
          type="text"
          name="boxholder"
          value={formData.boxholder}
          onChange={handleChange}
        />

        <select name="boxsize" onChange={handleChange}>
          <option value="small">small</option>
          <option value="mid">mid</option>
          <option value="big">big</option>
        </select>
        <button type="submit">add</button>
      </form>
    </>
  );
};

export default mailsForm;
