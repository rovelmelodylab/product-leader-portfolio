"use client";

import { useState } from "react";

export default function ClaimsDemoPage() {
  const [claim, setClaim] = useState("");
  const [policy, setPolicy] = useState("");
  const [notes, setNotes] = useState("");

  const [analysis, setAnalysis] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const [finalDecision, setFinalDecision] = useState("");
  const [auditTrail, setAuditTrail] = useState<string[]>([]);

  async function analyzeClaim() {
    setLoading(true);
    setAnalysis(null);

    try {
      const response = await fetch("/api/analyze-claim", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          claim,
          policy,
          notes,
        }),
      });

      const data = await response.json();

      setAnalysis(data);

      setAuditTrail([
        "Claim Submitted",
        "AI Intake Analysis Completed",
        "Risk Assessment Completed",
        "Recommendation Generated",
      ]);

      setFinalDecision("");
    } catch (error) {
      console.error(error);

      setAnalysis({
        riskLevel: "Error",
        recommendation: "Unable to process",
        coverageAssessment: "System error",
        rationale: "Please try again.",
        confidence: "0%",
        nextAction: "Retry analysis.",
        decisionTrace: ["System error occurred"],
      });
    }

    setLoading(false);
  }

  function analystDecision(decision: string) {
    setFinalDecision(decision);

    setAuditTrail((prev) => [
      ...prev,
      `Analyst Decision: ${decision}`,
    ]);
  }

  function loadScenario(type: string) {
    if (type === "missing") {
      setClaim("Customer did not provide accident photos.");
      setPolicy("Standard auto policy.");
      setNotes("Documentation not provided.");
    }

    if (type === "commercial") {
      setClaim("Vehicle accident while making food deliveries.");
      setPolicy(
        "Commercial vehicle usage requires additional coverage."
      );
      setNotes("Potential business use detected.");
    }

    if (type === "exclusion") {
      setClaim("Vehicle damaged during racing event.");
      setPolicy(
        "Damage resulting from racing activities is excluded."
      );
      setNotes("Policy exclusion identified.");
    }

    if (type === "covered") {
      setClaim("Minor collision during personal use.");
      setPolicy(
        "Accidents are covered under standard policy terms."
      );
      setNotes("No exclusions identified.");
    }
  }

  function getRiskBadge(riskLevel: string) {
    switch (riskLevel) {
      case "Low":
        return "bg-green-100 text-green-800";

      case "Medium":
        return "bg-yellow-100 text-yellow-800";

      case "High":
        return "bg-red-100 text-red-800";

      case "Unknown":
        return "bg-gray-100 text-gray-800";

      default:
        return "bg-gray-100 text-gray-800";
    }
  }

  return (
    <main className="max-w-6xl mx-auto px-8 py-16">
      <h1 className="text-5xl font-bold mb-4">
        AI Claims Exception Resolution Workbench
      </h1>

      <p className="text-lg mb-10">
        Human-in-the-loop claims analysis platform combining
        AI-assisted recommendations with analyst oversight.
      </p>

      <div className="border rounded p-6 mb-10">
        <h2 className="text-xl font-semibold mb-4">
          Try a Sample Scenario
        </h2>

        <div className="flex flex-wrap gap-3">
          <button
            className="border rounded px-4 py-2"
            onClick={() => loadScenario("missing")}
          >
            Missing Documentation
          </button>

          <button
            className="border rounded px-4 py-2"
            onClick={() => loadScenario("commercial")}
          >
            Commercial Usage
          </button>

          <button
            className="border rounded px-4 py-2"
            onClick={() => loadScenario("exclusion")}
          >
            Policy Exclusion
          </button>

          <button
            className="border rounded px-4 py-2"
            onClick={() => loadScenario("covered")}
          >
            Covered Claim
          </button>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block font-semibold mb-2">
            Claim Description
          </label>

          <textarea
            className="w-full border rounded p-3"
            rows={5}
            value={claim}
            onChange={(e) => setClaim(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">
            Policy Excerpt
          </label>

          <textarea
            className="w-full border rounded p-3"
            rows={5}
            value={policy}
            onChange={(e) => setPolicy(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">
            Supporting Notes
          </label>

          <textarea
            className="w-full border rounded p-3"
            rows={4}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>

        <button
          onClick={analyzeClaim}
          disabled={loading}
          className="border px-6 py-3 rounded font-medium"
        >
          {loading ? "Analyzing..." : "Analyze Claim"}
        </button>

        {analysis && (
          <div className="mt-12 space-y-6">
            <h2 className="text-3xl font-bold">
              Analysis Result
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border rounded p-6">
                <h3 className="font-semibold mb-4">
                  Risk Level
                </h3>

                <span
                  className={`px-4 py-2 rounded-full text-sm font-semibold ${getRiskBadge(
                    analysis.riskLevel
                  )}`}
                >
                  {analysis.riskLevel}
                </span>
              </div>

              <div className="border rounded p-6">
                <h3 className="font-semibold mb-4">
                  Recommendation
                </h3>

                <p className="text-xl font-semibold">
                  {analysis.recommendation}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border rounded p-6">
                <h3 className="font-semibold mb-2">
                  Confidence Score
                </h3>

                <p className="text-4xl font-bold">
                  {analysis.confidence}
                </p>
              </div>

              <div className="border rounded p-6">
                <h3 className="font-semibold mb-2">
                  Recommended Next Action
                </h3>

                <p>{analysis.nextAction}</p>
              </div>
            </div>

            <div className="border rounded p-6">
              <h3 className="font-semibold mb-3">
                Coverage Assessment
              </h3>

              <p>{analysis.coverageAssessment}</p>
            </div>

            <div className="border rounded p-6">
              <h3 className="font-semibold mb-3">
                Supporting Rationale
              </h3>

              <p>{analysis.rationale}</p>
            </div>

            <div className="border rounded p-6">
              <h3 className="font-semibold mb-4">
                Decision Trace
              </h3>

              <ul className="space-y-2">
                {analysis.decisionTrace?.map(
                  (step: string, index: number) => (
                    <li key={index}>✓ {step}</li>
                  )
                )}
              </ul>
            </div>

            <div className="border rounded p-6">
              <h3 className="font-semibold mb-4">
                Analyst Actions
              </h3>

              <div className="flex flex-wrap gap-3">
                <button
                  className="border px-4 py-2 rounded"
                  onClick={() => analystDecision("Approved")}
                >
                  Approve Claim
                </button>

                <button
                  className="border px-4 py-2 rounded"
                  onClick={() =>
                    analystDecision(
                      "Requested Additional Information"
                    )
                  }
                >
                  Request Information
                </button>

                <button
                  className="border px-4 py-2 rounded"
                  onClick={() => analystDecision("Escalated")}
                >
                  Escalate
                </button>

                <button
                  className="border px-4 py-2 rounded"
                  onClick={() => analystDecision("Rejected")}
                >
                  Reject Claim
                </button>
              </div>

              {finalDecision && (
                <div className="mt-6 border rounded p-4">
                  <h4 className="font-semibold mb-2">
                    Final Analyst Decision
                  </h4>

                  <p className="text-xl font-bold">
                    {finalDecision}
                  </p>
                </div>
              )}
            </div>

            <div className="border rounded p-6">
              <h3 className="font-semibold mb-4">
                Audit Trail
              </h3>

              <ul className="space-y-2 text-sm">
                {auditTrail.map((event, index) => (
                  <li key={index}>
                    {index + 1}. {event}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}