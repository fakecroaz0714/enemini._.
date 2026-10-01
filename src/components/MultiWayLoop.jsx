import React, { useState } from 'react';
import { 
  Repeat, 
  Sparkles, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Share2, 
  Network, 
  Info,
  Calendar,
  Layers,
  MessageSquare
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { MULTI_WAY_CYCLES } from '../data/mockData';

export default function MultiWayLoop({ onOpenChat, onStartSession }) {
  const [selectedCycleId, setSelectedCycleId] = useState('cycle-1');
  const [selectedNode, setSelectedNode] = useState(null);
  const [joinedCohort, setJoinedCohort] = useState(false);

  const activeCycle = MULTI_WAY_CYCLES.find(c => c.id === selectedCycleId) || MULTI_WAY_CYCLES[0];

  const handleJoinLoop = () => {
    setJoinedCohort(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="multiway-page-container container">
      {/* Header Banner */}
      <div className="multiway-header-card glass-card">
        <div className="multiway-title-row">
          <div className="multiway-badge animate-pulse-glow">
            <Network size={16} />
            <span>Graph Theory & Circular Exchange Engine</span>
          </div>
          <h2 className="page-heading">Multi-Way Circular Skill Loops</h2>
          <p className="page-sub">
            Overcoming bilateral deadlocks using graph cycle detection. When Student A teaches B, B teaches C,
            and C teaches A, everyone acquires their desired skill without waiting for a direct reciprocal match!
          </p>
        </div>

        {/* Cycle Switcher Tabs */}
        <div className="cycle-tabs-row">
          {MULTI_WAY_CYCLES.map(c => (
            <button
              key={c.id}
              className={`cycle-tab-btn ${selectedCycleId === c.id ? 'active' : ''}`}
              onClick={() => {
                setSelectedCycleId(c.id);
                setSelectedNode(null);
              }}
            >
              <Repeat size={15} />
              <span>{c.name}</span>
              <span className="badge badge-emerald">{c.confidence} Confidence</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="multiway-stage-grid">
        {/* Left / Center: Interactive SVG Cycle Canvas */}
        <div className="graph-canvas-container glass-card">
          <div className="graph-canvas-header">
            <div>
              <h3>Circular Graph Visualization</h3>
              <p className="graph-canvas-sub">Directed cyclic graph detected via Tarjan's Strongly Connected Components algorithm.</p>
            </div>
            <span className="badge badge-cyan">
              <span className="pulsing-dot" /> Cycle Active
            </span>
          </div>

          <div className="svg-graph-viewport">
            <svg viewBox="0 0 600 500" className="interactive-cycle-svg">
              <defs>
                {/* Glow Filter */}
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                {/* Marker Arrow */}
                <marker 
                  id="arrowhead-emerald" 
                  markerWidth="10" 
                  markerHeight="8" 
                  refX="9" 
                  refY="4" 
                  orient="auto"
                >
                  <polygon points="0 0, 10 4, 0 8" fill="#10b981" />
                </marker>
                <marker 
                  id="arrowhead-indigo" 
                  markerWidth="10" 
                  markerHeight="8" 
                  refX="9" 
                  refY="4" 
                  orient="auto"
                >
                  <polygon points="0 0, 10 4, 0 8" fill="#6366f1" />
                </marker>
                <marker 
                  id="arrowhead-cyan" 
                  markerWidth="10" 
                  markerHeight="8" 
                  refX="9" 
                  refY="4" 
                  orient="auto"
                >
                  <polygon points="0 0, 10 4, 0 8" fill="#06b6d4" />
                </marker>
              </defs>

              {/* Render Triangular 3-Way Cycle */}
              {selectedCycleId === 'cycle-1' && (
                <>
                  {/* Central Pulsing Loop Symbol */}
                  <circle cx="300" cy="250" r="110" fill="none" stroke="rgba(16, 185, 129, 0.15)" strokeWidth="1.5" strokeDasharray="6,6" />
                  
                  {/* Directed Edges (Arrows) */}
                  {/* Edge 1: Arun (top) -> Priya (bottom-right) */}
                  <path 
                    d="M 330 140 Q 420 220 400 320" 
                    fill="none" 
                    stroke="#10b981" 
                    strokeWidth="3" 
                    markerEnd="url(#arrowhead-emerald)"
                    className="animated-flow-path"
                  />
                  {/* Edge 2: Priya (bottom-right) -> Rahul (bottom-left) */}
                  <path 
                    d="M 360 380 Q 300 420 230 380" 
                    fill="none" 
                    stroke="#6366f1" 
                    strokeWidth="3" 
                    markerEnd="url(#arrowhead-indigo)"
                    className="animated-flow-path"
                  />
                  {/* Edge 3: Rahul (bottom-left) -> Arun (top) */}
                  <path 
                    d="M 190 320 Q 170 220 260 140" 
                    fill="none" 
                    stroke="#06b6d4" 
                    strokeWidth="3" 
                    markerEnd="url(#arrowhead-cyan)"
                    className="animated-flow-path"
                  />

                  {/* Edge Labels */}
                  <text x="400" y="225" fill="#34d399" fontSize="11" fontWeight="600" textAnchor="middle">
                    Teaches: Machine Learning
                  </text>
                  <text x="300" y="440" fill="#a5b4fc" fontSize="11" fontWeight="600" textAnchor="middle">
                    Teaches: UI/UX & Figma
                  </text>
                  <text x="180" y="225" fill="#67e8f9" fontSize="11" fontWeight="600" textAnchor="middle">
                    Teaches: JS & React
                  </text>

                  {/* Node 1: Arun (Top) */}
                  <g 
                    className="svg-node-group" 
                    transform="translate(300, 100)"
                    onClick={() => setSelectedNode(activeCycle.nodes[0])}
                  >
                    <circle r="44" fill="#111827" stroke="#10b981" strokeWidth="3" filter="url(#glow)" />
                    <clipPath id="clip-arun">
                      <circle r="36" />
                    </clipPath>
                    <image 
                      href={activeCycle.nodes[0].avatar} 
                      x="-36" 
                      y="-36" 
                      width="72" 
                      height="72" 
                      clipPath="url(#clip-arun)" 
                    />
                    <text y="62" fill="#f8fafc" fontSize="13" fontWeight="700" textAnchor="middle">
                      {activeCycle.nodes[0].name}
                    </text>
                    <text y="78" fill="#94a3b8" fontSize="10" textAnchor="middle">
                      Teaches ML • Wants UI
                    </text>
                  </g>

                  {/* Node 2: Priya (Bottom Right) */}
                  <g 
                    className="svg-node-group" 
                    transform="translate(420, 350)"
                    onClick={() => setSelectedNode(activeCycle.nodes[1])}
                  >
                    <circle r="44" fill="#111827" stroke="#6366f1" strokeWidth="3" filter="url(#glow)" />
                    <clipPath id="clip-priya">
                      <circle r="36" />
                    </clipPath>
                    <image 
                      href={activeCycle.nodes[1].avatar} 
                      x="-36" 
                      y="-36" 
                      width="72" 
                      height="72" 
                      clipPath="url(#clip-priya)" 
                    />
                    <text y="62" fill="#f8fafc" fontSize="13" fontWeight="700" textAnchor="middle">
                      {activeCycle.nodes[1].name}
                    </text>
                    <text y="78" fill="#94a3b8" fontSize="10" textAnchor="middle">
                      Teaches UI • Wants JS
                    </text>
                  </g>

                  {/* Node 3: Rahul (Bottom Left) */}
                  <g 
                    className="svg-node-group" 
                    transform="translate(180, 350)"
                    onClick={() => setSelectedNode(activeCycle.nodes[2])}
                  >
                    <circle r="44" fill="#111827" stroke="#06b6d4" strokeWidth="3" filter="url(#glow)" />
                    <clipPath id="clip-rahul">
                      <circle r="36" />
                    </clipPath>
                    <image 
                      href={activeCycle.nodes[2].avatar} 
                      x="-36" 
                      y="-36" 
                      width="72" 
                      height="72" 
                      clipPath="url(#clip-rahul)" 
                    />
                    <text y="62" fill="#f8fafc" fontSize="13" fontWeight="700" textAnchor="middle">
                      {activeCycle.nodes[2].name}
                    </text>
                    <text y="78" fill="#94a3b8" fontSize="10" textAnchor="middle">
                      Teaches JS • Wants ML
                    </text>
                  </g>
                </>
              )}

              {/* Render 4-Way Creative Cycle */}
              {selectedCycleId === 'cycle-2' && (
                <>
                  <circle cx="300" cy="250" r="140" fill="none" stroke="rgba(99, 102, 241, 0.15)" strokeWidth="1.5" strokeDasharray="6,6" />
                  
                  {/* 4 Edges */}
                  <path d="M 330 110 Q 450 150 450 250" fill="none" stroke="#10b981" strokeWidth="2.5" markerEnd="url(#arrowhead-emerald)" className="animated-flow-path" />
                  <path d="M 450 280 Q 430 400 320 400" fill="none" stroke="#6366f1" strokeWidth="2.5" markerEnd="url(#arrowhead-indigo)" className="animated-flow-path" />
                  <path d="M 280 400 Q 150 380 150 270" fill="none" stroke="#06b6d4" strokeWidth="2.5" markerEnd="url(#arrowhead-cyan)" className="animated-flow-path" />
                  <path d="M 170 230 Q 180 120 280 100" fill="none" stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#arrowhead-emerald)" className="animated-flow-path" />

                  {/* 4 Nodes */}
                  {activeCycle.nodes.map((n, idx) => {
                    const coords = [
                      { x: 300, y: 90 },
                      { x: 470, y: 250 },
                      { x: 300, y: 410 },
                      { x: 130, y: 250 }
                    ][idx];
                    return (
                      <g 
                        key={n.id} 
                        className="svg-node-group" 
                        transform={`translate(${coords.x}, ${coords.y})`}
                        onClick={() => setSelectedNode(n)}
                      >
                        <circle r="36" fill="#111827" stroke="#10b981" strokeWidth="2" filter="url(#glow)" />
                        <clipPath id={`clip-${idx}`}>
                          <circle r="30" />
                        </clipPath>
                        <image href={n.avatar} x="-30" y="-30" width="60" height="60" clipPath={`url(#clip-${idx})`} />
                        <text y="50" fill="#f8fafc" fontSize="12" fontWeight="700" textAnchor="middle">{n.name}</text>
                        <text y="64" fill="#94a3b8" fontSize="9" textAnchor="middle">{n.teaches}</text>
                      </g>
                    );
                  })}
                </>
              )}
            </svg>
          </div>

          <div className="canvas-footer-hint">
            <Info size={14} className="emerald" />
            <span>Click any student node to view their exchange role or message them directly.</span>
          </div>
        </div>

        {/* Right Column: Cycle Details, Algorithm Explainer, Action Cohort */}
        <div className="graph-sidebar-column">
          {/* Active Cycle Summary Card */}
          <div className="cycle-summary-card glass-card">
            <div className="summary-header">
              <span className="badge badge-emerald">Loop Summary</span>
              <h3 className="summary-title">{activeCycle.name}</h3>
              <p className="summary-desc">{activeCycle.description}</p>
            </div>

            <div className="cycle-flow-steps">
              {activeCycle.edges.map((edge, idx) => (
                <div key={idx} className="edge-step-row">
                  <div className="edge-step-num">{idx + 1}</div>
                  <div className="edge-step-body">
                    <span className="edge-participants">
                      <strong>{edge.from}</strong> ➔ <strong>{edge.to}</strong>
                    </span>
                    <span className="edge-skill-name">"{edge.skill}"</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Join / Cohort Action */}
            <div className="cycle-action-box">
              {joinedCohort ? (
                <div className="joined-alert-box">
                  <CheckCircle2 size={18} className="emerald" />
                  <div>
                    <strong>Cohort Loop Initialized!</strong>
                    <p>All members have received calendar invitations and mutual chat threads.</p>
                  </div>
                </div>
              ) : (
                <button 
                  className="btn btn-primary w-full btn-lg"
                  onClick={handleJoinLoop}
                >
                  <Sparkles size={16} />
                  <span>Initiate This 3-Way Exchange Loop</span>
                </button>
              )}
            </div>
          </div>

          {/* Node Inspector Card (when node clicked) */}
          {selectedNode && (
            <div className="node-inspector-card glass-card animate-pulse-glow">
              <div className="inspector-header">
                <img src={selectedNode.avatar} alt={selectedNode.name} className="inspector-avatar" />
                <div>
                  <h4>{selectedNode.name}</h4>
                  <span className="badge badge-subtle">Active Loop Node</span>
                </div>
              </div>
              <div className="inspector-skills">
                <p><strong>Teaches in Loop:</strong> <span className="text-emerald">{selectedNode.teaches}</span></p>
                <p><strong>Receives in Loop:</strong> <span className="text-indigo">{selectedNode.wants}</span></p>
              </div>
              <button 
                className="btn btn-outline-emerald btn-sm w-full mt-2"
                onClick={() => onOpenChat('peer-priya')}
              >
                <MessageSquare size={14} />
                <span>Open Direct Chat</span>
              </button>
            </div>
          )}

          {/* Graph Algorithm Explainer Card */}
          <div className="algo-explainer-card glass-card">
            <div className="explainer-header">
              <Layers size={18} className="indigo" />
              <h4>How Cycle Detection Works</h4>
            </div>
            <p className="explainer-text">
              The platform represents students as vertices (V) and requested/offered skill pairings as directed edges (E).
              A Depth-First Search (DFS) with Johnson's cycle-finding algorithm detects elementary circuits of length 3 or 4,
              ensuring 100% mutual skill satisfaction without requiring currency.
            </p>
            <div className="explainer-formula">
              <code>Graph G = (V, E) | Cycle: V1 ➔ V2 ➔ ... ➔ Vn ➔ V1</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
