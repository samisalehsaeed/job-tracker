import "../cssFiles/Network.css";

export default function Network() {
  return (
    <div className="row network-section" id="networking">
      <h1 className="network-title">Networking</h1>
      <p className="network-def">
        <em>
          The action or process of interacting with others to exchange
          information and develop professional or social contacts. "the skills
          of networking, bargaining, and negotiation"
        </em>
      </p>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/sami-saeed-4929bb273/"
      >
        <img
          className="img linkedin"
          src="https://ccpi.ac.uk/wp-content/webpc-passthru.php?src=https://ccpi.ac.uk/wp-content/uploads/2022/06/Linkedin-Logo.png&nocache=1"
        />
      </a>
      <a
        target="_blank"
        href="https://www.eventbrite.co.uk/d/united-kingdom--london/networking/"
      >
        <img
          className="img eventbrite"
          src="https://i0.wp.com/accessaa.co.uk/wp-content/uploads/2020/08/Eventbrite-Logo-759x457-1.png?fit=759%2C457&ssl=1"
        />
      </a>
      <a
        target="_blank"
        href="https://www.indeed.com/career-advice/career-development/networking-connections"
      >
        <img
          className="img indeed"
          src="https://1000logos.net/wp-content/uploads/2023/01/Indeed-logo.png"
        />
      </a>
      <a target="_blank" href="https://www.jobcase.com/">
        <img
          className="img jobcase"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Jobcase-rebrand.6b3d19e6.svg/2560px-Jobcase-rebrand.6b3d19e6.svg.png"
        />
      </a>
      <br />
      <iframe
        className="yt-vid"
        src="https://www.youtube.com/embed/y0tVnE-8mwU"
        height="500"
        width="1000"
        allowFullScreen
      ></iframe>
    </div>
  );
}
