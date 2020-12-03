export default function DressListItem({ dress }) {
  return (
    <li>
      <img
        alt="mode"
        src={`https://oliver-starckjohann.de/img/${dress.path}`}
      />
    </li>
  );
}
