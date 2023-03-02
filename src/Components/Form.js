import axios from "axios";
import { useState } from "react";

export default function Form() {
  const [formStatus, setFormStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState({
    name: "",
    email: "",
    subject:"",
    platform: ""
  });

  const handleChange = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });

    axios
      .post(
        "https://getform.io/f/efefa1bc-f673-4553-92c6-d3db1dbbf536",
        formData,
        { headers: { Accept: "application/json" } }
      )
      .then(function (response) {
        setFormStatus(true);
        setQuery({
          name: "",
          email: ""
        });
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });
  };
  return (
      <div >
         
        <form enctype="multipart/form-data" onSubmit={handleSubmit}>
        <div  className='getInTouch'>Get In Contact</div>
          <div className="form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={query.name}
              onChange={handleChange()}
            />
            <div className="label-text">Full Name</div>
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={query.email}
              onChange={handleChange()}
            />
            <div className="label-text">Email</div>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="subject"
              value={query.subject}
              onChange={handleChange()}
            />
            <div className="label-text">Message</div>
          </div>
            
          <button className="formButton" type="submit">Send</button>

          {formStatus &&<p style={{color:"#14cff0",fontSize:'24px'}}>
            Message sent.
          </p>}
          </div>
        </form>
      </div>

  );
}

