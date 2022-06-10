export default function Title({ title, sub }) {
  return (
    <div>
      <h1 className="title">{title}</h1>
      <br />
      <h2 className="subtitle">{sub}</h2>
    </div>
  );
}
