import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/article/";

const routesArticle = [
  <Route path="/articles/create" element={<Create />} key="create" />,
  <Route path="/articles/edit/:id" element={<Update />} key="update" />,
  <Route path="/articles/show/:id" element={<Show />} key="show" />,
  <Route path="/articles" element={<List />} key="list" />,
  <Route path="/articles/:page" element={<List />} key="page" />,
];

export default routesArticle;
