import DashboardCard from "@/components/admin/DashboardCard";
import { Users, GraduationCap } from "lucide-react";


export default function AdminDashboardPage() {

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">


      <DashboardCard
        title="Total Students"
        value={1200}
        icon={<GraduationCap size={40}/>}
      />


      <DashboardCard
        title="Total Teachers"
        value={85}
        icon={<Users size={40}/>}
      />


      <DashboardCard
        title="Total Classes"
        value={45}
      />


      <DashboardCard
        title="Monthly Fees"
        value="৳ 5,50,000"
      />


    </div>
  );
}