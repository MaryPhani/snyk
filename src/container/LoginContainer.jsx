import React, { useEffect, useState } from "react";
import LoginPage from "./LoginPage/LoginPage";
import { rxjsStore } from "../rxjsStore";

export default function LoginContainer() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    rxjsStore.getStoreCounter().subscribe((count) => {
      setCounter(count);
    });
  }, []);
  const handleCloseModal = () => {};
  return (
    <div>
      <LoginPage />
    </div>
  );
}
