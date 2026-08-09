export default function Footer() {
  return (
    <footer className="border-t bg-white px-6 py-4 dark:border-gray-800 dark:bg-gray-900">
      <p className="text-center text-sm text-gray-500">
        © {new Date().getFullYear()} School Management System. All rights
        reserved.
      </p>
    </footer>
  );
}