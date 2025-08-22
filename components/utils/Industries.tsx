export function Industries({ industries }: { industries: string[] }) {
  return (
    <div className="flex flex-wrap gap-1">
      {industries.slice(0, 3).map((industry) => (
        <span
          key={industry}
          className="bg-emerald-500 text-zinc-900 text-xs font-semibold px-2 py-1 rounded-full"
        >
          # {industry}
        </span>
      ))}
      {industries.length > 3 && (
        <span className="text-zinc-400 text-xs px-2 py-1">
          +{industries.length - 3} more
        </span>
      )}
    </div>
  );
}
