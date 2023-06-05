import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/tag/";

const routesTag = [
  <Route path="/tags/create" element={<Create />} key="create" />,
  <Route path="/tags/edit/:id" element={<Update />} key="update" />,
  <Route path="/tags/show/:id" element={<Show />} key="show" />,
  <Route path="/tags" element={<List />} key="list" />,
  <Route path="/tags/:page" element={<List />} key="page" />,
];

export default routesTag;
