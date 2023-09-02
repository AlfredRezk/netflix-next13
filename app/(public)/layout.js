export default function AuthLayout({ children }) {
  return (
    <main className="bg-cover-image">
      <div className="overlay text-white flex flex-col  items-center gap-3  p-3">
        <div className="bg-black bg-opacity-70 px-16 py-16 lg:w-2/5 lg:max-w-md   rounded-md w-full mt-28">
          {children}
        </div>
      </div>
    </main>
  );
}
