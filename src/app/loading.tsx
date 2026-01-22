// app/loading.tsx

export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center bg-[#070714]">
      <div className="h-12 w-12 animate-spin rounded-full border-t-4 border-solid border-white"></div>
    </div>
  );
}
