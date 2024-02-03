import Layout from "../../layouts/Layout";
import Login from "../../components/login/Login";
import './LoginPage.css';

const LoginPage = () => {
    return (
        <Layout>
            <div className="login_layout">
                <Login />
            </div>
        </Layout>
    )
}

export default LoginPage;