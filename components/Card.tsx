export default function Card({ title, value }: { title: string; value: string }) {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow text-center">
      <div className="text-sm text-gray-500 dark:text-gray-400">{title}</div>
      <div className="text-xl font-semibold">{value}</div>
    </div>
  );
}
