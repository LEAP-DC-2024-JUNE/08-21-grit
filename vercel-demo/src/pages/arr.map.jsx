import Card from "../components/Card";
const Home = () => {
  const arr = [1, 3, 4, 5, 6, 7];
  return (
    <div>
      {arr.map((element) => {
        return (
          <div>
            <Card />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
