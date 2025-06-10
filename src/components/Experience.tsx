const Experience = () => {
  return (
    <div className="main bg-primary-500">
      <h1
        id="work"
        className="font-jetbrains relative mb-13 text-4xl text-[clamp(2.5rem,5vw,4rem)] font-bold text-white italic before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:bg-white before:content-['']"
      >
        Experience
      </h1>
      {/* <div className="grid" style={{ gridTemplateRows: "3px 1fr" }}>
        <div>August 30, 2017</div>
      </div> */}
      <div className="main container">
        <ul>
          <li>
            <h2 className="text-2xl font-bold">
              Internship at{" "}
              <a
                target="_blank"
                href="https://www.mehrwerk.com/en/"
                className="hover:text-mehrwerkblue group text-mehrwerkblue relative transition-colors duration-200 md:text-white"
              >
                Mehrwerk
                <img
                  src="https://www.mehrwerk.com/favicon.ico"
                  className="ml-2 inline-block h-5 transition-opacity duration-200 md:opacity-0 md:group-hover:opacity-100"
                  alt="Mehrwerk logo"
                />
              </a>
            </h2>
            <span className="date">Jan. 2019 - Feb. 2019</span>
            <span className="circle"></span>
            <p className="text-md">
              First hands on experience in IT and software development. I
              learned about the structure of a software company and how to work
              in a team.
            </p>
          </li>
          <li>
            <h2 className="text-2xl font-bold">
              Internship at{" "}
              <a
                target="_blank"
                href="https://www.sta-bielefeld.nrw.de/"
                className="hover:text-staatsanwaltsblau group text-staatsanwaltsblau relative transition-colors duration-200 md:text-white"
              >
                Staatsanwaltschaft Bielefeld
                <img
                  src="https://www.sta-bielefeld.nrw.de/favicon.ico"
                  className="ml-2 inline-block h-5 transition-opacity duration-200 md:opacity-0 md:group-hover:opacity-100"
                  alt="Staatsanwaltschaft Bielefeld logo"
                />
              </a>
            </h2>
            <span className="date">Jun. 2019 - Jul. 2019</span>
            <span className="circle"></span>
            <p className="text-md">
              At the public prosecutor's office i learned how important precise
              wording is. First experience with legal documents and how to write
              those.
            </p>
          </li>
          <li>
            <h2 className="text-2xl font-bold">
              Hackathon at{" "}
              <a
                target="_blank"
                href="https://paderborn-ist-informatik.de/"
                className="hover:text-pitred group text-pitred relative transition-colors duration-200 md:text-white"
              >
                PIT
                <img
                  src="https://paderborn-ist-informatik.de/wp-content/uploads/2017/01/favicon.png"
                  className="ml-2 inline-block h-5 transition-opacity duration-200 md:opacity-0 md:group-hover:opacity-100"
                  alt="PIT logo"
                />
              </a>
            </h2>
            <span className="date">Aug. 2023 - Present</span>
            <span className="circle"></span>
            <p className="text-md">
              I participated in a hackathon organized by PIT{" "}
              <a>(Paderborn ist Informatik)</a>. The event focused on developing
              innovative solutions for real-world problems. I collaborated with
              other participants to create a software solution that addressed a
              specific challenge on a weekend. This experience enhanced my
              problem-solving skills and allowed me to apply my knowledge in a
              practical setting.
            </p>
          </li>
          <li>
            <h2 className="text-2xl font-bold">
              Student for software Engineering at{" "}
              <a
                target="_blank"
                href="https://www.bib.de/"
                className="hover:text-bib group bib relative transition-colors duration-200 md:text-white"
              >
                bib Internation College
                <img
                  src="https://icons.duckduckgo.com/ip3/www.bib.de.ico"
                  className="ml-2 inline-block h-5 transition-opacity duration-200 md:opacity-0 md:group-hover:opacity-100"
                  alt="bib logo"
                />
              </a>
            </h2>
            <span className="date">Aug. 2023 - Present</span>
            <span className="circle"></span>
            <p className="text-md">
              Currently enrolled in a software engineering program at b.i.b.
              International College. The program focuses on practical
              applications of software development, including programming,
              project management, and teamwork. I am gaining valuable skills and
              knowledge that will prepare me for a successful career in the
              software industry.
            </p>
          </li>
          <li>
            <h2 className="text-2xl font-bold">
              Apprentice Software Engineering at{" "}
              <a
                target="_blank"
                href="https://www.hoermann.de/"
                className="hover:text-hoermannblue group text-hoermannblue relative transition-colors duration-200 md:text-white"
              >
                Hörmann
                <img
                  src="https://www.hoermann.de/favicon.ico"
                  className="ml-2 inline-block h-5 transition-opacity duration-200 md:opacity-0 md:group-hover:opacity-100"
                  alt="Hoermann logo"
                />
              </a>
            </h2>
            <span className="date">Aug. 2023 - Present</span>
            <span className="circle"></span>
            <p className="text-md">
              Currently in my apprenticeship as a software engineer at Hörmann.
              I am learning how to develop software in a professional
              environment, working with various technologies and methodologies.
              <br />
              Automation and optimization of processes are key aspects of my
              role. First experience with working with ERP Systems like SAP.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
