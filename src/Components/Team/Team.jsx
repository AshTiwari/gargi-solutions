import './Team.css';
import founderPhoto from '../../assets/priyanka3.jpg'; // Replace with your actual founder image path
import ashutoshPhoto from '../../assets/ashutosh.jpeg'; // Replace with your team member image path
import pricePhoto from '../../assets/prince.jpeg'; // Replace with your team member image path


const MeetTheTeam = () => {
  const founder = {
    name: "Priyanka Mukesh Tiwari",
    title: "Founder & Chief Content Creator",
    bio: "The young and dynamic founder of Kratoos, is a trailblazer born to break limits and challenge the status quo. A dreamer at heart, she possesses the rare blend of qualities needed to turn visions into reality. With an innate ability to harness the power of content, technology, teamwork, and innovation, she ensures her brand stands out in the competitive digital arena. Priyanka seamlessly combines her creative flair and technical expertise with sharp business acumen, crafting strategies that redefine success. Her relentless drive and entrepreneurial spirit make her a force to reckon with, as she continues to lead Kratoos to new heights of digital dominance.",
    image: founderPhoto,
  };

  const teamMembers = [
    {
      id: 1,
      name: "Prince",
      title: "Head of Accounts & Audit",
      bio: "Leading the Accounts division at Kratoos, brings unmatched expertise in Accounts and Audit. His sharp acumen ensures precision and efficiency, elevating  organizational excellence.",
      image: pricePhoto,
    },
    {
      id: 2,
      name: "Ashutosh Kumar",
      title: "Chief Tech Developer",
      bio: "The Head of Tech Services at Kratoos, is a versatile Backend and Quant Developer specializing in GO, Python, and C++. With expertise in building platforms like 021.trade, he ensures top-tier code and website development solutions for clients",
      image: ashutoshPhoto,
    },
    {
      id: 3,
      name: "Devesh. D",
      title: "Admin & VA",
      bio: "the Admin Assistant at Kratoos, ensures seamless administrative operations with precision and dedication.",
      image: ashutoshPhoto,
    },
  ];

  return (
    <div className="meet-team-container">
      {/* Founder Section */}
      <section className="founder-section">
        <div className="founder-image-container">
          <img src={founder.image} alt={founder.name} className="founder-image" />
        </div>
        <div className="founder-info">
          <h1 className="founder-name">{founder.name}</h1>
          <p className="founder-title">{founder.title}</p>
          <p className="founder-bio">{founder.bio}</p>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="team-members-section">
        <h2 className="section-heading">Meet Our Team</h2>
        <div className="team-grid">
          {teamMembers.map(member => (
            <div key={member.id} className="team-card">
              <div className="team-card-image-container">
                <img src={member.image} alt={member.name} className="team-card-image" />
              </div>
              <div className="team-card-info">
                <h3 className="team-card-name">{member.name}</h3>
                <p className="team-card-title">{member.title}</p>
                <p className="team-card-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MeetTheTeam;
