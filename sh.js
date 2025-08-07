import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { User, DollarSign, Activity } from "lucide-react";

const data = [
  { name: "Jan", revenue: 4000, users: 2400, expenses: 2400 },
  { name: "Feb", revenue: 3000, users: 1398, expenses: 2210 },
  { name: "Mar", revenue: 2000, users: 9800, expenses: 2290 },
  { name: "Apr", revenue: 2780, users: 3908, expenses: 2000 },
  { name: "May", revenue: 1890, users: 4800, expenses: 2181 },
  { name: "Jun", revenue: 2390, users: 3800, expenses: 2500 },
  { name: "Jul", revenue: 3490, users: 4300, expenses: 2100 },
];

const Dashboard = () => {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Key Metrics */}
      <Card className="p-4 flex items-center gap-4">
        <User size={32} className="text-blue-500" />
        <div>
          <p className="text-gray-500">Total Users</p>
          <h2 className="text-2xl font-bold">12,400</h2>
        </div>
      </Card>
      <Card className="p-4 flex items-center gap-4">
        <DollarSign size={32} className="text-green-500" />
        <div>
          <p className="text-gray-500">Revenue</p>
          <h2 className="text-2xl font-bold">$42,000</h2>
        </div>
      </Card>
      <Card className="p-4 flex items-center gap-4">
        <Activity size={32} className="text-red-500" />
        <div>
          <p className="text-gray-500">Active Users</p>
          <h2 className="text-2xl font-bold">8,200</h2>
        </div>
      </Card>
      
      {/* Revenue Chart */}
      <Card className="col-span-3 p-6">
        <h2 className="text-xl font-bold mb-4">Revenue & Users Trend</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
            <Line type="monotone" dataKey="users" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
};

export default Dashboard;
