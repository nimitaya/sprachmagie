
import CardsCategoriesPage from "./pages/CardsCategoriesPage";
import CardsPage from "./pages/CardsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          
          <Route path="/cards-categories" element={<CardsCategoriesPage />} />
          <Route path="/cards/:categoryId" element={<CardsPage />} />
          
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
