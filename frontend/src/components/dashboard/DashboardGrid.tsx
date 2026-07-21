type DashboardGridProps = {
  children: React.ReactNode;
};

function DashboardGrid({ children }: DashboardGridProps) {
  return (
    <div className="grid lg:grid-cols-2 gap-6 mt-6">
      {children}
    </div>
  );
}

export default DashboardGrid;