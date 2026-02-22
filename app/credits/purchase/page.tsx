"use client";

import Link from "next/link";
import { CreditSelectionStep } from "@/components/organisms/CreditSelectionStep/CreditSelectionStep";
import { mockCarbonProjects } from "@/lib/api/mock/carbonProjects";
import type { CreditSelectionState } from "@/lib/types/carbon";
import { Button } from "@/components/atoms/Button";
import { Text } from "@/components/atoms/Text";

export default function PurchasePage() {
  const handleSelectionChange = (selection: CreditSelectionState) => {
    console.log("Selection changed:", selection);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-6 flex items-center justify-between">
        <Text variant="h2" as="h1">
          Purchase Carbon Credits
        </Text>
        <Link href="/credits/compare">
          <Button stellar="primary-outline" size="sm">
            Compare Projects
          </Button>
        </Link>
      </div>

      <CreditSelectionStep
        projects={mockCarbonProjects}
        onSelectionChange={handleSelectionChange}
      />
    </div>
  );
}
