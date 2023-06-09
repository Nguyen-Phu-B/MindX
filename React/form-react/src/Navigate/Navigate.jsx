import {  Router, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import FormAddDel from '../Screen/FormAddDel';
import FormFilter from '../Screen/FormFilter';
import FormThemes from '../Screen/FormThemes';
import FormUser from '../Screen/FormUser';
import NotFound from '../Screen/NotFound';

const Navigate = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formuser" element={<FormUser />} />
        <Route path="/formfilter" element={<FormFilter />} />
        <Route path="/formadddel" element={<FormAddDel />} />
        <Route path="/formtheme" element={<FormThemes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
}

export default Navigate;
