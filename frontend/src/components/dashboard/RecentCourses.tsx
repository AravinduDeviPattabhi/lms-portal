import SectionCard from "../ui/SectionCard";
import ListItem from "../ui/ListItem";

const courses = [
  "Web Development",
  "Data Structures",
  "Operating Systems",
  "Database Management",
];

function RecentCourses() {
  return (
    <SectionCard title="Recent Courses">
      <div className="space-y-3">
        {courses.map((course) => (
          <ListItem
            key={course}
            hoverColor="hover:bg-blue-50"
          >
            {course}
          </ListItem>
        ))}
      </div>
    </SectionCard>
  );
}

export default RecentCourses;