interface DashboardCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
}


export default function DashboardCard({
  title,
  value,
  icon,
}: DashboardCardProps) {

  return (
    <div className="bg-white rounded-xl shadow p-6 flex items-center justify-between">

      <div>
        <p className="text-gray-500 text-sm">
          {title}
        </p>

        <h2 className="text-3xl font-bold mt-2">
          {value}
        </h2>
      </div>


      <div className="text-blue-600">
        {icon}
      </div>

    </div>
  );
}