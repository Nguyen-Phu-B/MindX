import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="alert alert-dark">
                        <Link
                            className="text-decoration-none"
                            to="/formuser"
                        >
                            Form User
                        </Link>
                    </div>
                </div>
                <div className="col">
                    <div className="alert alert-light">
                        <Link
                            className="text-decoration-none"
                            to="/formfilter"
                        >
                            Form Fillter
                        </Link>
                    </div>
                </div>
                <div className="col">
                    <div className="alert alert-dark">
                        <Link
                            className="text-decoration-none"
                            to="/formadddel"
                        >
                            Form Add Delete
                        </Link>
                    </div>
                </div>
                <div className="col">
                    <div className="alert alert-light">
                        <Link
                            className="text-decoration-none"
                            to="/formtheme"
                        >
                            Form Themes
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
