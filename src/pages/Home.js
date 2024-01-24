import "./Home.css";
import Header from "../components/Header";

function Home() {
  return (
    <>
      <div>
        <Header
          label={
            <div
              style={{
                alignItems: "center",
                display: "flex",
                width: "100%",
                flexDirection: "row",
                justifyContent: "center",
                color: "white",
                fontSize: "40px",
                fontFamily: "Helvetica",
              }}
            >
              <h6>Tira-Fácil</h6>
            </div>
          }
        />
      </div>
      <img
        id="img"
        src={"/blog.svg"}
        // style={{ height: 500, width: "100%" }}
        alt="website logo"
      />
    </>
  );
}

export default Home;
