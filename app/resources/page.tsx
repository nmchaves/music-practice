import { Metadata } from "next";
import Link from "next/link";
import { PageHeading } from "@/components/ui/PageHeading";

export const metadata: Metadata = {
  title: "Resources",
  description: "Resources to help learn bass guitar",
};

export default function Page() {
  return (
    <main className="flex flex-col items-center">
      <PageHeading className="mb-8">Resources</PageHeading>
      <ExternalResourceLink href="https://www.youtube.com/playlist?list=PLHNte-PbVjgXrkBxoMC4xQMqlJ0RNZq5E">
        Steve Harris Tech 21 Signature Amp Settings
      </ExternalResourceLink>
      <ExternalResourceLink href="https://tab-maker.com">
        TabMaker.com (Copy Bass can parse/render files exported from TabMaker)
      </ExternalResourceLink>
      <ExternalResourceLink href="https://www.musicca.com/circle-of-fifths">
        Circle of Fifths
      </ExternalResourceLink>
      <ExternalResourceLink href="https://www.youtube.com/watch?v=--aVuWXcdTs&list=PLatsInsznGD0dtXAcpvH02QTiFmrF05Tg">
        Music Theory for Bass Guitar Series (TalkingBass)
      </ExternalResourceLink>
    </main>
  );
}

function ExternalResourceLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      className="mb-6 text-center underline underline-offset-4 hover:decoration-2"
    >
      {children}
    </Link>
  );
}
