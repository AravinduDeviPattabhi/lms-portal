import type { LucideIcon } from "lucide-react";
import Card from "../../../components/ui/Card";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
}

function StatCard({
  title,
  value,
  icon: Icon,
}: StatCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {value}
          </h2>
        </div>

        <div className="rounded-xl bg-blue-100 p-3">
          <Icon
            className="text-blue-600"
            size={26}
          />
        </div>
      </div>
    </Card>
  );
}

export default StatCard;