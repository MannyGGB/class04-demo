import Link from "next/link";
type petParam = { params: { pets: string } };

export function generateMetadata({ params }: petParam) {
  const modTitle = params.pets[0].toUpperCase() + params.pets.slice(1);
  return {
    title: `Manny's Pets - ${modTitle}`,
    description: `Manny's Pets - fun facts about ${params.pets}`,
  };
}

export default function PetsPage({ params }: petParam) {
  return (
    <div>
      <h2>Pets page: {params.pets}</h2>
      <Link href="/animals">{`<-- Go Back`}</Link>
    </div>
  );
}
