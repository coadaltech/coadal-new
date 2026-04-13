import { Suspense } from "react";
import LoginForm from "./LoginForm";

export default function AdminLoginPage() {
  return (
    <Suspense fallback={<div style={{ background: "#07080f", minHeight: "100vh" }} />}>
      <LoginForm />
    </Suspense>
  );
}
