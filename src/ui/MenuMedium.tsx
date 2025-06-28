import { FaHome, FaMap } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { useNavigate, useLocation } from "react-router"; // <-- ajouté

export default function MenuMedium() {
  const navigate = useNavigate();
  const location = useLocation(); // <-- ajouté

  // Fonction pour vérifier si le lien est actif
  const isActive = (path: string) => location.pathname === path;

  // Classes de base pour tous les boutons
  const baseClasses = "w-full flex gap-3 items-center px-4 py-3 rounded-lg";

  // Classes conditionnelles
  const activeClasses = "bg-primary-100 text-white";
  const inactiveClasses = "text-gray-100 hover:bg-primary-100 hover:text-white";

  return (
    <div className="hidden md:w-full md:pt-4 md:flex md:flex-col md:gap-4">
      <div className="w-full">
        <button
          onClick={() => navigate("/admin/dashboard")}
          className={`${baseClasses} ${
            isActive("/admin") ? activeClasses : inactiveClasses
          }`}
        >
          <FaHome />
          Dashboard
        </button>
      </div>
      <div className="w-full">
        <button
          onClick={() => navigate("/admin/users")}
          className={`${baseClasses} ${
            isActive("/admin/users") ? activeClasses : inactiveClasses
          }`}
        >
          <FaUserGroup />
          All Users
        </button>
      </div>
      <div className="w-full">
        <button
          onClick={() => navigate("/admin/trips")}
          className={`${baseClasses} ${
            isActive("/admin/trips") ? activeClasses : inactiveClasses
          }`}
        >
          <FaMap />
          AI Trips
        </button>
      </div>
    </div>
  );
}
