export default function Courses() {
const courseList = ["Mathematics", "Science", "English", "Coding", "Arts", "Physics"];


return (
<section className="py-20 bg-[var(--bg-main)]">
<div className="max-w-7xl mx-auto px-6">
<h3 className="text-3xl font-bold text-center mb-12 text-[var(--text-primary)]">Popular Courses</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
{courseList.map((course, i) => (
<div key={i} className="p-6 bg-[var(--accent-soft)] rounded-xl shadow hover:shadow-2xl transition cursor-pointer">
<h4 className="text-xl font-bold text-[var(--text-primary)] mb-3">{course}</h4>
<p className="text-[var(--text-primary)] mb-4">Engaging lessons taught by experts.</p>
<button className="px-4 py-2 bg-[var(--accent-strong)] text-white rounded-lg">Enroll</button>
</div>
))}
</div>
</div>
</section>
);
}