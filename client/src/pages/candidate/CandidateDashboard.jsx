import { useAuth } from "../../context/AuthContext";

const CandidateDashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow px-6 py-4 flex justify-between">
        <h1 className="text-xl font-bold">
          Recruitment Platform
        </h1>

        <button
          onClick={logout}
          className="text-red-600 font-semibold"
        >
          Logout
        </button>
      </nav>

      <main className="p-8">
        <h2 className="text-3xl font-bold">
          Welcome, {user?.name}
        </h2>

        <p className="text-gray-600 mt-2">
          Candidate Dashboard
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold">
              Applications
            </h3>
            <p className="text-3xl font-bold mt-2">0</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold">
              Interviews
            </h3>
            <p className="text-3xl font-bold mt-2">0</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold">
              Profile
            </h3>
            <p className="text-3xl font-bold mt-2">
              0%
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CandidateDashboard;