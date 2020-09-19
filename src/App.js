import React from 'react';
import './App.css'
import ServiceList from "./Components/ServiseList";
// import logo from "./logo.svg"

const categories = ['Кино', 'Рестораны', 'Концерты', 'Путешествия', 'Топливо', 'Товары', 'Спорт', 'Страхование', 'Театр'];



function App() {
  return (
      <>
          <ServiceList categories={categories}></ServiceList>
      </>
  );
}

export default App;
