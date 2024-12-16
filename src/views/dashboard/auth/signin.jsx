import React, {Fragment, memo, useEffect, useState} from "react";
import {Alert, Button, Col, Container, Form, Row} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import authApi from "../../../api/auth";
import userProfileApi from "../../../api/userProfile";

const SignIn = memo(() => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            fetchUserProfile(token);
        }
    }, []);

    const fetchUserProfile = async (token) => {
        try {
            const response = await userProfileApi.getProfile(
                { eMail: email },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            const { userData, profileData, preferencesData, verificationData } = response.data;

            // Save the complete profile information securely
            localStorage.setItem('userProfile', JSON.stringify({
                userData,
                profileData,
                preferencesData,
                verificationData
            }));

            setSuccess(t("authentication.profile_fetch_success"));
            setTimeout(() => navigate("/home"), 2000); // Redirect after success
        } catch (err) {
            console.error("Error fetching user profile:", err);
            setError(t("authentication.profile_fetch_error"));
            setTimeout(() => setError(null), 5000); // Hide error after 5 seconds
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await authApi.login({
                eMail: email,
                password,
                rememberMe,
            });

            // Save token and set success message
            const { accessToken, findUser } = response.data;
            localStorage.setItem("token", accessToken);

            setSuccess(t("authentication.login_success"));
            setTimeout(() => {
                if (findUser.userType === "USER" || findUser.userType === "PREMIUM") {
                    setError(t("authentication.login_failed_not_authorized"));
                    setTimeout(() => setError(null), 5000); // Hide error after 5 seconds
                } else {
                    fetchUserProfile(accessToken); // Fetch user profile after successful login
                }
            }, 2000); // Redirect or show error based on user type
        } catch (err) {
            setError(err.response?.data?.message || t("authentication.login_failed"));
            setTimeout(() => setError(null), 5000); // Hide error after 5 seconds
        }
    };

    return (
        <Fragment>
            <section className="sign-in-page">
                <Container>
                    <Row className="justify-content-center align-items-center height-self-center">
                        <Col lg="5" md="12" className="align-self-center">
                            <div className="sign-user_card">
                                <div className="sign-in-page-data">
                                    <div className="sign-in-from w-100 m-auto">
                                        <h3 className="mb-3 text-center">
                                            {t("authentication.sign_in")}
                                        </h3>
                                        {error && <Alert variant="danger">{error}</Alert>}
                                        {success && <Alert variant="success">{success}</Alert>}
                                        <Form className="mt-4" onSubmit={handleLogin}>
                                            <Form.Group className="mb-3">
                                                <Form.Control
                                                    type="email"
                                                    className="mb-0"
                                                    placeholder={t("authentication.enter_email")}
                                                    autoComplete="off"
                                                    required
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Control
                                                    type="password"
                                                    className="mb-0"
                                                    placeholder={t("authentication.password")}
                                                    required
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                            </Form.Group>
                                            <div className="d-flex justify-content-between align-items-center sign-info">
                                                <Button type="submit" variant="btn btn-primary">
                                                    {t("authentication.sign_in")}
                                                </Button>
                                                <div className="custom-control custom-checkbox d-inline-block">
                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input mx-2"
                                                        id="customCheck"
                                                        checked={rememberMe}
                                                        onChange={(e) => setRememberMe(e.target.checked)}
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="customCheck"
                                                    >
                                                        {t("authentication.remember_me")}
                                                    </label>
                                                </div>
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <div className="d-flex justify-content-center links">
                                        {t("authentication.dont_have_an_account")}{" "}
                                        <Link to="/auth/sign-up" className="text-primary ms-2">
                                            {t("authentication.sign_up")}
                                        </Link>
                                    </div>
                                    <div className="d-flex justify-content-center links">
                                        <Link to="/auth/recoverpw" className="f-link">
                                            {t("authentication.forgot_your_password")}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Fragment>
    );
});

SignIn.displayName = "SignIn";
export default SignIn;
