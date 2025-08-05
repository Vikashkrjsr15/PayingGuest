import { motion } from "framer-motion";

function Dashboard() {
  return (
    <motion.div
      className="min-h-[80vh] bg-gradient-to-br from-indigo-50 to-purple-100 p-6"
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-indigo-800 mb-4">Welcome to your Dashboard</h2>
      <p className="text-lg text-gray-700">
        Here you can browse PG listings, manage your own listings (if you're an owner), and more. Features coming soon.
      </p>
    </motion.div>
  );
}

export default Dashboard;