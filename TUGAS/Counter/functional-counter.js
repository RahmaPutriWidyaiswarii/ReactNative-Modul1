// Functional Component
const MyCounter = () => {
  // deklarasi nilai awal count "0"
    const [count, setCount] = React.useState(0);

  // jumlah count +1
    const incrementCount = () => {
    setCount((countValue) => countValue + 1);
    };

    const decrementCount = () => {
    setCount((countValue) => countValue - 1);
    };

    return (
    <>
      <h1>{count}</h1> {/* Menampilkan jumlah count diatas tombol */}
        <button
        onClick={decrementCount}
        style={{ margin: "0px" }}
        >
        -1
        </button>{" "}
      {/* Tombol -1,  dari decrementCount */}
        <button
        onClick={incrementCount}
        style={{ margin: "0px" }}
        >
        +1
        </button>{" "}
      {/* Tombol +1, dari incrementCount */}
    </>
    );
};
// code program untuk dipanggil
const myElement = <MyCounter />;
const myApp = myElement;
ReactDOM.createRoot(document.getElementById("functional-counter")).render(myApp);
