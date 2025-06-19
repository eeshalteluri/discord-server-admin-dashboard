import { redirect } from "next/navigation";
export default function Home() {
  redirect('/dashboard')
  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1">
        Home
      </div>
    </div>
  );
}
