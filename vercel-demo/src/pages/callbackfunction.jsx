export default function Home() {
  const handleClick = (callback, param2) => {
    console.log("button daragdlaa");
    callback();
    console.log(param2);
  };
  const logHelloWorld = () => {
    console.log("hello World");
  };

  return (
    <div>
      <button onClick={() => handleClick(logHelloWorld)}>
        Click me ehnii arga
      </button>

      <button
        onClick={() =>
          handleClick(() => {
            console.log("callback ajillaa");
          }, "Leap")
        }
      >
        Click me 2doh arga
      </button>
    </div>
  );
}
