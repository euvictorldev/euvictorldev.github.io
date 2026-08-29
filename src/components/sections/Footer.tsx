export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="shell flex flex-wrap items-center justify-between gap-3 py-6">
        <span className="label">
          © {new Date().getFullYear()} pixo — victor lobato
        </span>
        <span className="label">built to be broken into</span>
      </div>
    </footer>
  );
}
