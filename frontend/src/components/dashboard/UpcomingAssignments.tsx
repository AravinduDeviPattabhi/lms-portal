import SectionCard from "../ui/SectionCard";
import ListItem from "../ui/ListItem";

const assignments = [
  "React Dashboard",
  "Operating Systems Lab",
  "Database Mini Project",
];

function UpcomingAssignments() {
  return (
    <SectionCard title="Upcoming Assignments">
      <div className="space-y-3">
        {assignments.map((assignment) => (
          <ListItem
            key={assignment}
            hoverColor="hover:bg-orange-50"
          >
            {assignment}
          </ListItem>
        ))}
      </div>
    </SectionCard>
  );
}

export default UpcomingAssignments;