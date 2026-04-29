type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  text?: string;
};

export default function SectionHeader({ eyebrow, title, text }: SectionHeaderProps) {
  return (
    <div className="section-head">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      {text && <p>{text}</p>}
    </div>
  );
}
