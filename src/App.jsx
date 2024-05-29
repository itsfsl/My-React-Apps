import Stopwatch from "./Stopwatch";

const fruits = [{id: 1, name: "Apple", calories: 214},
          {id: 2, name: "Banana", calories: 243},
          {id: 3, name: "Orange", calories: 124},
          {id: 4, name: "Strawberry", calories: 324},
          {id: 5, name: "Pineapple", calories: 424}]

const vegetables = [{id: 1, name: "Celery", calories: 214},
                    {id: 2, name: "Tomato", calories: 243},
                    {id: 3, name: "Bengan", calories: 124},
                    {id: 4, name: "Aalo", calories: 324},
                    {id: 5, name: "Gobi", calories: 424}]

function App() {
  return(
    <>
    <Stopwatch />
    <Stopwatch />
    </>
  );
}

export default App
