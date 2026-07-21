type ListItemProps = {
  children: React.ReactNode;
  hoverColor?: string;
};

function ListItem({
  children,
  hoverColor = "hover:bg-gray-100",
}: ListItemProps) {
  return (
    <div
      className={`p-3 rounded-lg bg-gray-50 transition cursor-pointer ${hoverColor}`}
    >
      {children}
    </div>
  );
}

export default ListItem;