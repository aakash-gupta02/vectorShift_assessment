import { useStore } from "./store";

const URL = process.env.REACT_APP_API_URL || "http://localhost:8000";

export const SubmitButton = () => {
  const nodes = useStore((s) => s.nodes);
  const edges = useStore((s) => s.edges);

  const handleSubmit = async () => {
    // grab latest nodes/edges from store
    const latestNodes = nodes;
    const latestEdges = edges;

    try {
      const res = await fetch(`${URL}/pipelines/parse`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nodes: latestNodes, edges: latestEdges }),
      });

      const data = await res.json();

      alert(
        `Nodes: ${data.num_nodes}\nEdges: ${data.num_edges}\nDAG: ${data.is_dag ? "Yes" : "No"}`
      );
    } catch (err) {
      console.error(err);
      alert("Failed to submit pipeline");
    }
  };

  return (
    <div className="flex items-center justify-center p-4">
      <button
        onClick={handleSubmit}
        className="px-6 py-2 bg-accent text-bg rounded-lg font-semibold hover:bg-accent-hover transition-colors"
      >
        Submit
      </button>
    </div>
  );
};