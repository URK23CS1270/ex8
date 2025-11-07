async function fetchMembers() {
  try {
    const res = await fetch("http://localhost:7000/api/members");
    const data = await res.json();
    document.getElementById("memberCount").textContent = data.length;
  } catch (err) {
    console.error("Error fetching members:", err);
  }
}

document.getElementById("addMemberForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const membershipType = document.getElementById("membershipType").value;

  try {
    await fetch("http://localhost:7000/api/members/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fullName, email, membershipType }),
    });

    document.getElementById("addMemberForm").reset();
    fetchMembers(); // refresh the count
  } catch (err) {
    console.error("Error adding member:", err);
  }
});

// Load members on page start
fetchMembers();
