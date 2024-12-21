import React, { useState } from "react";

// Student Dashboard Component
function StudentDashboard() {
  const styles = {
    container: {
      backgroundColor: "white",
      borderRadius: "0.5rem",
      padding: "1.5rem",
      boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
    },
    header: {
      marginBottom: "1.5rem",
    },
    statsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "1rem",
      marginBottom: "1.5rem",
    },
    statCard: {
      backgroundColor: "#f3f4f6",
      padding: "1rem",
      borderRadius: "0.5rem",
    },
    activities: {
      backgroundColor: "#f3f4f6",
      padding: "1rem",
      borderRadius: "0.5rem",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          Welcome, Student
        </h1>
        <p style={{ color: "#6b7280" }}>Your learning dashboard</p>
      </div>

      <div style={styles.statsGrid}>
        <div style={styles.statCard}>
          <h3 style={{ fontWeight: "bold" }}>Current Progress</h3>
          <p
            style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#2563eb" }}
          >
            85%
          </p>
          <p style={{ color: "#6b7280" }}>In Algebra</p>
        </div>
        <div style={styles.statCard}>
          <h3 style={{ fontWeight: "bold" }}>Tasks Completed</h3>
          <p
            style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#2563eb" }}
          >
            12/15
          </p>
          <p style={{ color: "#6b7280" }}>This Week</p>
        </div>
        <div style={styles.statCard}>
          <h3 style={{ fontWeight: "bold" }}>Next Quiz</h3>
          <p
            style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#2563eb" }}
          >
            2 Days
          </p>
          <p style={{ color: "#6b7280" }}>Geometry Basics</p>
        </div>
      </div>

      <div style={styles.activities}>
        <h2 style={{ fontWeight: "bold", marginBottom: "1rem" }}>
          Recent Activities
        </h2>
        {[
          "Completed Algebra Quiz",
          "Watched Video Tutorial",
          "Solved Practice Problems",
        ].map((activity, index) => (
          <div
            key={index}
            style={{
              padding: "0.75rem",
              backgroundColor: "white",
              marginBottom: "0.5rem",
              borderRadius: "0.375rem",
            }}
          >
            {activity}
          </div>
        ))}
      </div>
    </div>
  );
}

// Teacher Dashboard Component
function TeacherDashboard() {
  const styles = {
    container: {
      backgroundColor: "white",
      borderRadius: "0.5rem",
      padding: "1.5rem",
      boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
    },
    header: {
      marginBottom: "1.5rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    button: {
      backgroundColor: "#2563eb",
      color: "white",
      padding: "0.5rem 1rem",
      borderRadius: "0.375rem",
      cursor: "pointer",
    },
    classesGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "1rem",
      marginBottom: "1.5rem",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div>
          <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            Teacher Dashboard
          </h1>
          <p style={{ color: "#6b7280" }}>Manage your classes</p>
        </div>
        <button style={styles.button}>Add New Class</button>
      </div>

      <div style={styles.classesGrid}>
        {["Math 101", "Algebra II", "Geometry", "Calculus"].map(
          (className, index) => (
            <div
              key={index}
              style={{
                padding: "1rem",
                backgroundColor: "#f3f4f6",
                borderRadius: "0.5rem",
              }}
            >
              <h3 style={{ fontWeight: "bold" }}>{className}</h3>
              <p style={{ color: "#6b7280" }}>25 Students</p>
              <div
                style={{
                  height: "4px",
                  backgroundColor: "#e5e7eb",
                  borderRadius: "2px",
                  marginTop: "0.5rem",
                }}
              >
                <div
                  style={{
                    width: "75%",
                    height: "100%",
                    backgroundColor: "#2563eb",
                    borderRadius: "2px",
                  }}
                />
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

// Assessment Interface Component
function AssessmentInterface() {
  const styles = {
    container: {
      backgroundColor: "white",
      borderRadius: "0.5rem",
      padding: "1.5rem",
      boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
    },
    header: {
      marginBottom: "1.5rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    questionContainer: {
      backgroundColor: "#f3f4f6",
      padding: "1.5rem",
      borderRadius: "0.5rem",
      marginBottom: "1.5rem",
    },
    option: {
      padding: "1rem",
      backgroundColor: "white",
      marginBottom: "0.5rem",
      borderRadius: "0.375rem",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div>
          <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            Mathematics Assessment
          </h1>
          <p style={{ color: "#6b7280" }}>Question 1 of 10</p>
        </div>
        <div style={{ color: "#6b7280" }}>Time remaining: 25:00</div>
      </div>

      <div style={styles.questionContainer}>
        <p style={{ marginBottom: "1rem" }}>
          Solve the quadratic equation: x² + 5x + 6 = 0
        </p>
        {[
          "x = -2 and x = -3",
          "x = 2 and x = 3",
          "x = -1 and x = -6",
          "x = 1 and x = 6",
        ].map((option, index) => (
          <div key={index} style={styles.option}>
            {option}
          </div>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#f3f4f6",
            borderRadius: "0.375rem",
          }}
        >
          Previous
        </button>
        <button
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#2563eb",
            color: "white",
            borderRadius: "0.375rem",
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

// AI Intervention Component
function AIIntervention() {
  const styles = {
    container: {
      backgroundColor: "white",
      borderRadius: "0.5rem",
      padding: "1.5rem",
      boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
    },
    aiMessage: {
      backgroundColor: "#eff6ff",
      padding: "1rem",
      borderRadius: "0.5rem",
      marginBottom: "1rem",
    },
  };

  return (
    <div style={styles.container}>
      <div style={{ marginBottom: "1.5rem" }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          AI Learning Assistant
        </h1>
        <p style={{ color: "#6b7280" }}>
          Personalized help with your current topic
        </p>
      </div>

      <div style={styles.aiMessage}>
        <h3 style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
          Suggestion
        </h3>
        <p>
          I notice you're having trouble with quadratic equations. Let's break
          this down into steps:
        </p>
        <ol style={{ marginTop: "0.5rem", marginLeft: "1.5rem" }}>
          <li>First, identify the coefficients</li>
          <li>Use the quadratic formula</li>
          <li>Solve step by step</li>
        </ol>
      </div>

      <div
        style={{
          display: "flex",
          gap: "0.5rem",
        }}
      >
        <button
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#2563eb",
            color: "white",
            borderRadius: "0.375rem",
            flex: 1,
          }}
        >
          Show Example
        </button>
        <button
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#f3f4f6",
            borderRadius: "0.375rem",
            flex: 1,
          }}
        >
          Practice More
        </button>
      </div>
    </div>
  );
}

// Collaborative Teaching Component
function CollaborativeTeaching() {
  const styles = {
    container: {
      backgroundColor: "white",
      borderRadius: "0.5rem",
      padding: "1.5rem",
      boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
    },
    header: {
      padding: "1rem",
      borderBottom: "1px solid #e5e7eb",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "1.5rem",
    },
    mainContent: {
      display: "grid",
      gridTemplateColumns: "repeat(12, 1fr)",
      gap: "1rem",
    },
    toolsSidebar: {
      gridColumn: "span 2",
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    },
    toolsPanel: {
      backgroundColor: "#f9fafb",
      padding: "1rem",
      borderRadius: "0.5rem",
    },
    toolGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "0.5rem",
      marginTop: "0.5rem",
    },
    whiteboard: {
      gridColumn: "span 7",
      backgroundColor: "#f9fafb",
      padding: "1rem",
      borderRadius: "0.5rem",
    },
    whiteboardCanvas: {
      backgroundColor: "white",
      height: "400px",
      border: "2px dashed #e5e7eb",
      borderRadius: "0.5rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "1rem",
    },
    chatSidebar: {
      gridColumn: "span 3",
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    },
    button: {
      padding: "0.5rem 1rem",
      borderRadius: "0.375rem",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div>
          <h2 style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
            Live Session: Advanced Algebra
          </h2>
          <p style={{ color: "#6b7280" }}>
            Active Students: 24 • Topic: Quadratic Equations
          </p>
        </div>
        <button
          style={{
            ...styles.button,
            backgroundColor: "#fee2e2",
            color: "#dc2626",
          }}
        >
          End Session
        </button>
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        {/* Tools Sidebar */}
        <div style={styles.toolsSidebar}>
          <div style={styles.toolsPanel}>
            <h3 style={{ fontWeight: "bold" }}>Drawing Tools</h3>
            <div style={styles.toolGrid}>
              <button style={{ ...styles.button, backgroundColor: "#eff6ff" }}>
                ✏️
              </button>
              <button style={{ ...styles.button, backgroundColor: "#f3f4f6" }}>
                ⭕
              </button>
              <button style={{ ...styles.button, backgroundColor: "#f3f4f6" }}>
                📐
              </button>
              <button style={{ ...styles.button, backgroundColor: "#f3f4f6" }}>
                🔍
              </button>
            </div>
          </div>
          <div style={styles.toolsPanel}>
            <h3 style={{ fontWeight: "bold" }}>Controls</h3>
            <div
              style={{
                marginTop: "0.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <button
                style={{
                  ...styles.button,
                  backgroundColor: "#dcfce7",
                  color: "#16a34a",
                }}
              >
                Audio
              </button>
              <button
                style={{
                  ...styles.button,
                  backgroundColor: "#eff6ff",
                  color: "#2563eb",
                }}
              >
                Share
              </button>
            </div>
          </div>
        </div>

        {/* Whiteboard Area */}
        <div style={styles.whiteboard}>
          <div style={styles.whiteboardCanvas}>
            <div style={{ textAlign: "center", color: "#6b7280" }}>
              <p>Interactive Whiteboard Area</p>
              <p style={{ fontSize: "0.875rem" }}>
                Shared workspace for mathematical concepts
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <button
                style={{
                  ...styles.button,
                  backgroundColor: "#dcfce7",
                  color: "#16a34a",
                }}
              >
                ▶
              </button>
              <button style={{ ...styles.button, backgroundColor: "#f3f4f6" }}>
                ⏸
              </button>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <span style={{ color: "#6b7280" }}>25:30 remaining</span>
              <button
                style={{
                  ...styles.button,
                  backgroundColor: "#eff6ff",
                  color: "#2563eb",
                }}
              >
                Next Topic
              </button>
            </div>
          </div>
        </div>

        {/* Chat and AI Sidebar */}
        <div style={styles.chatSidebar}>
          <div
            style={{
              backgroundColor: "#eff6ff",
              padding: "1rem",
              borderRadius: "0.5rem",
            }}
          >
            <h3 style={{ fontWeight: "bold", marginBottom: "0.75rem" }}>
              AI Assistant
            </h3>
            <div
              style={{
                backgroundColor: "white",
                padding: "0.75rem",
                borderRadius: "0.5rem",
              }}
            >
              <p style={{ color: "#6b7280" }}>Suggested intervention:</p>
              <p style={{ marginTop: "0.5rem" }}>
                Students might need help with factoring. Should we review the
                basics?
              </p>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#f9fafb",
              padding: "1rem",
              borderRadius: "0.5rem",
              flex: 1,
            }}
          >
            <h3 style={{ fontWeight: "bold", marginBottom: "0.75rem" }}>
              Class Chat
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                marginBottom: "1rem",
              }}
            >
              <div
                style={{
                  backgroundColor: "white",
                  padding: "0.75rem",
                  borderRadius: "0.5rem",
                }}
              >
                <p style={{ fontWeight: "500" }}>Sarah M.</p>
                <p style={{ color: "#6b7280" }}>
                  Can we go over that last step again?
                </p>
              </div>
              <div
                style={{
                  backgroundColor: "#eff6ff",
                  padding: "0.75rem",
                  borderRadius: "0.5rem",
                }}
              >
                <p style={{ fontWeight: "500", color: "#2563eb" }}>Teacher</p>
                <p>Of course! Let's break it down...</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <input
                placeholder="Type your message..."
                style={{
                  flex: 1,
                  padding: "0.5rem",
                  borderRadius: "0.375rem",
                  border: "1px solid #e5e7eb",
                }}
              />
              <button
                style={{
                  ...styles.button,
                  backgroundColor: "#2563eb",
                  color: "white",
                }}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main App Component
function App() {
  const [currentView, setCurrentView] = useState("student");

  const styles = {
    container: {
      padding: "1.5rem",
      backgroundColor: "#f3f4f6",
      minHeight: "100vh",
    },
    nav: {
      display: "flex",
      gap: "1rem",
      marginBottom: "1rem",
    },
    navButton: {
      padding: "0.5rem 1rem",
      borderRadius: "0.375rem",
      cursor: "pointer",
      backgroundColor: "#fff",
      border: "1px solid #e5e7eb",
    },
    activeNavButton: {
      backgroundColor: "#2563eb",
      color: "white",
      border: "none",
    },
  };

  const getView = () => {
    switch (currentView) {
      case "student":
        return <StudentDashboard />;
      case "teacher":
        return <TeacherDashboard />;
      case "collaborative":
        return <CollaborativeTeaching />;
      case "assessment":
        return <AssessmentInterface />;
      case "ai":
        return <AIIntervention />;
      default:
        return <StudentDashboard />;
    }
  };

  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        {[
          { id: "student", label: "Student Dashboard" },
          { id: "teacher", label: "Teacher Dashboard" },
          { id: "collaborative", label: "Collaborative Teaching" },
          { id: "assessment", label: "Assessment" },
          { id: "ai", label: "AI Intervention" },
        ].map((view) => (
          <button
            key={view.id}
            style={{
              ...styles.navButton,
              ...(currentView === view.id ? styles.activeNavButton : {}),
            }}
            onClick={() => setCurrentView(view.id)}
          >
            {view.label}
          </button>
        ))}
      </nav>
      {getView()}
    </div>
  );
}

export default App;
