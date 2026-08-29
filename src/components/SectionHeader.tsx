export default function SectionHeader({
  index,
  title,
  note,
}: {
  index: string;
  title: string;
  note?: string;
}) {
  return (
    <div className="mb-10 flex items-baseline gap-4">
      <h2 className="heading text-fluid-xl whitespace-nowrap">
        <span className="text-primary">[{index}]</span>
        <span className="text-muted"> // </span>
        {title}
      </h2>
      <span className="h-px flex-1 bg-line" />
      {note && <span className="label hidden sm:block">{note}</span>}
    </div>
  );
}
