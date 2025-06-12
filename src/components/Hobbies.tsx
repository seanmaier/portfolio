const Hobbies = () => {
  return (
    <div
      id="hobbies"
      className="bg-creme flex h-screen flex-col items-center justify-center"
    >
      <div className="wrapper">
        {Array.from({ length: 8 }).map((_, i, arr) => (
          <div
            key={i}
            className="itemLeft itemTests"
            style={
              { "--n": i + 1, "--count": arr.length } as React.CSSProperties
            }
          ></div>
        ))}
      </div>
      <div className="wrapper">
        {Array.from({ length: 8 }).map((_, i, arr) => (
          <div
            key={i}
            className="itemRight itemTests"
            style={
              { "--n": i + 1, "--count": arr.length } as React.CSSProperties
            }
          ></div>
        ))}
      </div>
      <div className="wrapper">
        {Array.from({ length: 8 }).map((_, i, arr) => (
          <div
            key={i}
            className="itemLeft itemTests"
            style={
              { "--n": i + 1, "--count": arr.length } as React.CSSProperties
            }
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Hobbies;
