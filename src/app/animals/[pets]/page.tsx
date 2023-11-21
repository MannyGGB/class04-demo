import React from "react";
type petParam = { params: { pets: string } };

export default function PetsPage({ params }: petParam) {
  return (
    <div>
      <h2>Pets page: {params.pets}</h2>
    </div>
  );
}
