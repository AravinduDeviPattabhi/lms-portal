import SectionCard from "../ui/SectionCard";
import ListItem from "../ui/ListItem";

const activities = [
  "Solved Two Sum",
  "Completed HTML Course",
  "Submitted Assignment 4",
];

function ActivityFeed() {
  return (
    <SectionCard title="Recent Activity">
      <div className="space-y-3">
        {activities.map((activity) => (
          <ListItem
            key={activity}
            hoverColor="hover:bg-green-50"
          >
            {activity}
          </ListItem>
        ))}
      </div>
    </SectionCard>
  );
}

export default ActivityFeed;