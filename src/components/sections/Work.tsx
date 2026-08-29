import { projects } from "@/data/projects";
import SectionHeader from "../SectionHeader";
import ProjectRow from "../ProjectRow";

export default function Work() {
  return (
    <section id="work" className="shell section-pad cv-auto">
      <SectionHeader
        index="02"
        title="Work"
        note={`${projects.length} projects · newest first`}
      />

      <div className="border-t border-line">
        {projects.map((p) => (
          <ProjectRow key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
