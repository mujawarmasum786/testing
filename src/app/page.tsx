"use client";
export default function Home() {
  console.log(process.env.dbname, "dbname");
  console.log(process.env.NEXT_PUBLIC_My, "my");
  return <div>My new Page</div>;
}
