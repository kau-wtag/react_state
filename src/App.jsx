import Image from "./Image";
import Profile from "./Profile";

function App() {
  return (
    <>
      <Profile name={"kaium"} age={26} />
      <Image
        src={"https://images.unsplash.com/photo-1446776811953-b23d57bd21aa"}
        alt={""}
      />
    </>
  );
}

export default App;
