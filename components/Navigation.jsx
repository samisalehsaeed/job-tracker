import "../cssFiles/Navigation.css";

export default function Navigation() {
  return (
    <>
      <div className="welcome-nav">
        <img
          className="welcome-coffee"
          src="https://media3.giphy.com/media/utfeiHQ7CcpyRtXla6/giphy.webp?cid=ecf05e47w35fn2lnn41brki2qob2oykoimsb37wvi0a7j9rz&ep=v1_stickers_search&rid=giphy.webp&ct=s"
        />
        <br />
        <ul>
          <div className="nav-links">
            <br />
            <br />
            <a href="#calendar">Calendar</a>
            <br />
            <br />
            <br />
            <br />
            <a href="#managejobs">Manage Jobs</a>
            <br />
            <br />
            <br />
            <br />
            <a href="#contacts">Contacts</a>
            <br />
            <br />
            <br />
            <br />
            <a href="#networking">Networking</a>
          </div>
        </ul>
      </div>

      {/* <h2>Quote of the day</h2>
      <p>
        <em>“Start where you are. Use what you have. Do what you can.”</em>
      </p> */}
    </>
  );
}
