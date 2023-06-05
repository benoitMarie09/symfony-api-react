import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/comment/";

const routesComment = [
  <Route path="/comments/create" element={<Create />} key="create" />,
  <Route path="/comments/edit/:id" element={<Update />} key="update" />,
  <Route path="/comments/show/:id" element={<Show />} key="show" />,
  <Route path="/comments" element={<List />} key="list" />,
  <Route path="/comments/:page" element={<List />} key="page" />,
];

export default routesComment;
