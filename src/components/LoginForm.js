import styled from "@emotion/styled";
import Button from "./Button";
import Input from "./Input";

const CardForm = styled.form`
    padding: 16px;
    width: 400px;
    background-color: white;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
`;

const Title = styled.h1`
    font-size: 24px;
    text-align: center;
`;

const LoginForm = ({ onSubmit }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit && onSubmit();
    }

    return (
        <CardForm onSubmit={handleSubmit}>
            <Title>Login</Title>
            <Input type="text" name="name" placeholder="Name" />
            <Input 
                type="text" 
                name="password" 
                placeholder="Password" 
                style={{ marginTop: 8 }}
            />
            <Button type="submit" style={{ marginTop: 16 }}>
                Login
            </Button>
        </CardForm>
    );
};

export default LoginForm;