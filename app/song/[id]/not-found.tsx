import Image from "next/image";
import Link from "next/link";
import bruceSearching from "@/public/bruce_searching.jpg";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <h2 className="text-2xl font-semibold mb-8">Song Not Found</h2>
      <Image
        src={bruceSearching}
        alt="Bruce Dickinson searching in a field of flowers"
        width={600}
        height={300}
        placeholder="blur"
        className="mb-4"
      />
      <p className="mb-8 text-center">
        Holy smokes. I looked all over, but I couldn&apos;t find the song
        you&apos;re looking for.
      </p>
      <Link href="/">Back to Home</Link>
    </main>
  );
}