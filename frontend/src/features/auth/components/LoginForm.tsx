    import { useState } from "react";
    import { useNavigate } from "react-router-dom";
    import { useForm } from "react-hook-form";
    import { zodResolver } from "@hookform/resolvers/zod";

    import Button from "../../../components/ui/Button";
    import Card from "../../../components/ui/Card";
    import Input from "../../../components/ui/Input";
    import Label from "../../../components/ui/Label";
    import PasswordInput from "../../../components/ui/PasswordInput";
    import Spinner from "../../../components/ui/Spinner";

    import { loginSchema, type LoginFormData } from "../schemas/authSchema";
    import { login as loginApi } from "../api/authApi";
    import { useAuth } from "../../../context/AuthContext";

    function LoginForm() {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [serverError, setServerError] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: LoginFormData) => {
        try {
        setServerError("");

        const response = await loginApi(data);

        login(response.token, response.user);
        console.log("Login successful");
        console.log(response);
        console.log("Navigating...");
        navigate("/dashboard");
        } catch (error: any) {
        setServerError(
            error.response?.data?.message || "Something went wrong."
        );
        }
    };

    return (
        <Card className="w-full max-w-md p-8">
        <h1 className="mb-2 text-3xl font-bold">
            Welcome Back
        </h1>

        <p className="mb-8 text-slate-500">
            Login to continue.
        </p>

        <form
            className="space-y-5"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div>
            <Label htmlFor="email">Email</Label>

            <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                {...register("email")}
            />

            {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
                </p>
            )}
            </div>

            <div>
            <Label htmlFor="password">
                Password
            </Label>

            <PasswordInput
                id="password"
                placeholder="Enter your password"
                {...register("password")}
            />

            {errors.password && (
                <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
                </p>
            )}
            </div>

            {serverError && (
            <p className="text-red-500">
                {serverError}
            </p>
            )}

            <Button
            type="submit"
            fullWidth
            disabled={isSubmitting}
            >
            {isSubmitting ? <Spinner /> : "Login"}
            </Button>
        </form>
        </Card>
    );
    }

    export default LoginForm;