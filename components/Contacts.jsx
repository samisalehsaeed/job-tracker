import "../cssFiles/Contacts.css";
import { useState } from "react";

export default function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };
  const handleImageClick = () => {
    document.getElementById("fileInput").click();
  };
  const addContact = (e) => {
    e.preventDefault();
    if (name && email && number && image) {
      setContacts([
        ...contacts,
        { id: Date.now(), name, email, number, image },
      ]);
      setName("");
      setEmail("");
      setNumber("");
      setImage(null);
    }
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };
  return (
    <div className="row contact-section" id="contacts">
      <br />
      <div className="contact-center">
        <img
          src={
            image ||
            "https://www.shareicon.net/data/512x512/2017/02/05/878222_camera_512x512.png"
          }
          alt="Choose"
          onClick={handleImageClick}
          style={{
            cursor: "pointer",
            width: "70px",
            height: "70px",
            borderRadius: "50%",
          }}
        />

        <form onSubmit={addContact} className="contact-name">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="number"
            placeholder="Phone Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <br />
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageUpload}
          />

          <button className="pixel-font" type="submit">
            Add Contact
          </button>
          <br />
          <br />
        </form>
      </div>
      <ul>
        {contacts.map((contact) => (
          <li className="contact" key={contact.id}>
            {contact.image && (
              <img
                className="contact-img"
                src={contact.image}
                alt={contact.name}
                width="50"
                height="50"
              />
            )}
            <br />
            <strong>{contact.name}</strong>{" "}
            <button
              onClick={() => deleteContact(contact.id)}
              className="addcontact-btn"
            >
              <img
                className="delete-icon"
                src="https://cdn-icons-png.flaticon.com/512/484/484662.png"
              />
            </button>
            <br />
            {contact.number}
            <br />
            {contact.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
