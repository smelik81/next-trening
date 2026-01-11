import Link from "next/link";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>
        <nav>
          <ul>
            <li>
              <Link href="/profile">Profile</Link>
            </li>
            <li>
              <Link href="/profile/notifications">Notifications</Link>
            </li>
            <li>
              <Link href="/profile/settings">Settings</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>{children}</div>
    </>
  );
}
