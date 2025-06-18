import packageJson from "../package.json";

export default function App() {
  return (
    <main className="min-h-screen grid place-items-center bg-black text-white">
      <div className="max-w-[500px] space-y-4">
        <h1 className="text-center text-3xl font-bold">
          react-tailwind-template
        </h1>
        <pre>
          "dependencies":{" "}
          {JSON.stringify(packageJson.dependencies, null, 2)}{" "}
        </pre>
      </div>
    </main>
  );
}
