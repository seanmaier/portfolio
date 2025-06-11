const Projects = () => {
  return (
    <div className="bg-primary-500 flex w-screen items-center justify-center">
      <h1 id="work" className="text-4xl font-bold">
        Projects
      </h1>
      <div>
        <h2>ThouChat - Hackathon</h2>
        <p>
          A chat application built with React, TypeScript and C# over a weekend.
          It allows users to create accounts, join chat rooms, and send messages
          in real-time with a catch. Via a switch the user sends his messages in
          a shakespearean style.
          <br />
          <br />
          This was my first time working with web-sockets and working with a
          larger team of young devs. I learned aswell to present my work to a
          larger audience and illustrate its features.
        </p>
      </div>
      <div>
        <h2>MacroForge</h2>
        <p>
          MacroForge is a macro recorder and editor for Windows, built with C#
          and WPF. It allows users to record their mouse and keyboard actions
          and replay them later. The project was a great opportunity to learn
          about Windows API, event handling, and user interface design.
          <br />
          <br />I learned how to work with the Windows API to capture mouse and
          keyboard events, as well as how to create a user-friendly interface
          using WPF. The project also taught me about the importance of testing
          and debugging in software development.
        </p>
      </div>
      <div>
        <h2>Skatfreunde Jöllenbeck</h2>
        <p>
          Skatfreunde Jöllenbeck is a website built with React, TypeScript, and
          C#. It serves as a platform for the local Skat club to manage their
          members, events, and scores. The project was a great opportunity to
          learn about full-stack development and how to build a web application
          from scratch.
          <br />
          <br />I learned how to work with REST APIs, manage state in React, and
          how to deploy a web application using Node.js. The project also taught
          me about the importance of user experience and how to create a
          responsive design.
        </p>
      </div>
      <div>Certificates (e.g. Mosh Courses)</div>
    </div>
  );
};

export default Projects;
