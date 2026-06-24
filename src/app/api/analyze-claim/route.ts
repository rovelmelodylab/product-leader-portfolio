import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { claim, policy, notes } = body;

    const combinedText = `
      ${claim}
      ${policy}
      ${notes}
    `.toLowerCase();

    let riskLevel = "Medium";
    let recommendation = "Escalate for Analyst Review";
    let rationale =
      "Potential coverage ambiguity requires analyst review.";
    let coverageAssessment =
      "Policy and claim information reviewed.";

    let confidence = "75%";

    let nextAction =
      "Assign claim to analyst for review.";

    let decisionTrace = [
      "Claim received",
      "Initial assessment completed",
    ];

    // Rule 1: Missing Documentation

    if (
      combinedText.includes("missing") ||
      combinedText.includes("not provided") ||
      combinedText.includes("not provide") ||
      combinedText.includes("incomplete") ||
      combinedText.includes("no photo") ||
      combinedText.includes("no photos") ||
      combinedText.includes("missing document") ||
      combinedText.includes("missing documents") ||
      combinedText.includes("missing report") ||
      combinedText.includes("documentation unavailable")
    ) {
      riskLevel = "Unknown";

      recommendation =
        "Request Additional Information";

      coverageAssessment =
        "Coverage assessment cannot be completed due to missing supporting documentation.";

      rationale =
        "Required supporting documentation appears incomplete or unavailable.";

      confidence = "60%";

      nextAction =
        "Request accident photos and supporting documents from claimant.";

      decisionTrace = [
        "Missing documentation detected",
        "Coverage assessment blocked",
        "Additional information required",
      ];
    }

    // Rule 2: Policy Exclusion

    else if (
    combinedText.includes("policy exclusion") ||
    combinedText.includes("coverage excluded") ||
    combinedText.includes("not covered")
    ) {
      riskLevel = "High";

      recommendation =
        "Reject Claim";

      coverageAssessment =
        "Claim appears to fall under a policy exclusion.";

      rationale =
        "Claim appears to fall under an identified policy exclusion.";

      confidence = "92%";

      nextAction =
        "Notify claimant of exclusion and prepare rejection notice.";

      decisionTrace = [
        "Policy exclusion detected",
        "Coverage validation completed",
        "Claim recommended for rejection",
      ];
    }

    // Rule 3: Commercial Usage

    else if (
      combinedText.includes("commercial") ||
      combinedText.includes("delivery") ||
      combinedText.includes("business use")
    ) {
      riskLevel = "Medium";

      recommendation =
        "Escalate for Analyst Review";

      coverageAssessment =
        "Potential commercial usage requires policy interpretation and analyst review.";

      rationale =
        "Potential commercial usage may impact coverage eligibility.";

      confidence = "78%";

      nextAction =
        "Route claim to senior analyst for policy interpretation.";

      decisionTrace = [
        "Commercial usage indicator detected",
        "Coverage eligibility uncertain",
        "Analyst review required",
      ];
    }

    // Rule 4: Clear Coverage

    else if (
      combinedText.includes("covered") ||
      combinedText.includes("within policy") ||
      combinedText.includes("valid coverage")
    ) {
      riskLevel = "Low";

      recommendation =
        "Approve Claim";

      coverageAssessment =
        "Claim appears to be covered under stated policy terms.";

      rationale =
        "Claim appears consistent with stated policy coverage.";

      confidence = "90%";

      nextAction =
        "Proceed with claim processing and payment review.";

      decisionTrace = [
        "Coverage confirmed",
        "No exclusions identified",
        "Claim eligible for approval",
      ];
    }

    return NextResponse.json({
      riskLevel,
      coverageAssessment,
      recommendation,
      rationale,
      confidence,
      nextAction,
      decisionTrace,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to analyze claim" },
      { status: 500 }
    );
  }
}