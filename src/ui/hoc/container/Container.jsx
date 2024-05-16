const Container = ({ children }) => {
  return (
    <div
      style={{
        width: "40%",
        margin: "auto",
        marginTop: "20px",
        borderRadius: "15px",
        padding: "20px",
        backgroundColor: "#b067b5",
      }}
    >
      {children}
    </div>
  );
};

export { Container };
