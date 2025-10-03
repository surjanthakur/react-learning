import { useContext } from "react";
import UserContext from "../context/userContext";

export default function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return <div>please login plz</div>;
  return <div>welcom user {user.email}</div>;
}
