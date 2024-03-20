import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className="text-center bg-zinc-600 text-white text-3xl py-5">
      User : {userid}{" "}
    </div>
  );
}

export default User;
