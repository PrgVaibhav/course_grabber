import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <h1>Navbar</h1>
      <Link href="/course"> course </Link>
      <Link href="/post"> post </Link>
    </div>
  );
}
