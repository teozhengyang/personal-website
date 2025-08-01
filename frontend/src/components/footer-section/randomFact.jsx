import useRandomFact from '../../hooks/useRandomFact';

export default function RandomFact() {
  const fact = useRandomFact();

  return (
    <aside className="italic text-[#6699CC] max-w-xl px-4 font-semibold">
      {fact || "Fetching a fun fact..."}
    </aside>
  );
}
