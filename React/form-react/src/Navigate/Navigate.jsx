import { Router, Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import FormAddDel from "../Screen/FormAddDel";
import FormFilter from "../Screen/FormFilter";
import FormApiTb from "../Screen/FormTableApi";
import FormThemes from "../Screen/FormThemes";
import FormUser from "../Screen/FormUser";
import NotFound from "../Screen/NotFound";
import TestMemo from "../Screen/TestMemo";

const Navigate = () => {
    return (
        <Routes>
            <Route path="" element={<Home />} />
            <Route path="/formuser" element={<FormUser />} />
            <Route path="/formfilter" element={<FormFilter />} />
            <Route path="/formadddel" element={<FormAddDel />} />
            <Route path="/formtheme" element={<FormThemes />} />
            <Route path="/formapi" element={<FormApiTb />} />
            <Route path="/testmemo" element={<TestMemo />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default Navigate;
