import Layout from "../../layouts/Layout";
import SignUp from "../../components/signup/SignUp";
import './SignUpPage.css';

const SignUpPage = () => {
    return (
        <Layout>
            <div className="signup_layout">
                <SignUp />
            </div>
        </Layout>
    )
}

export default SignUpPage;