const members = [
  {
    group: "Student committee",
    name: "Wail Mohammed",
    affiliation: "Cal State East Bay",
    photo: "assets/team/wail-mohammed.webp",
    major: "Computer Science",
    year: "Graduating December 2026",
    strengths: "Hardworking, fast learner, problem solver",
    skills: "Programming, photography, documentation, communication, mentoring, teamwork, public speaking, networking, community engagement, and problem solving",
    reliedOn: "Helping solve problems, getting things done, and supporting others when they need help.",
    energy: "Working with people, learning new things, and contributing to projects that make a real impact.",
    growth: "Becoming more confident speaking up, leading groups, and helping others grow as leaders.",
    fact: "Is multilingual and has lived in or visited 11 countries across three continents.",
    linkedIn: "https://www.linkedin.com/in/wailmohammed/\n"
  },
  {
    group: "Student committee",
    name: "Kyle Le",
    affiliation: "Cal State East Bay",
    photo: "assets/team/Kyle.jpeg",
    major: "Computer Science, minor in Mathematics",
    year: "Class of 2027",
    strengths: "Strategic thinker, problem solver, innovative",
    skills: "Programming, UI/UX design, graphic design, public speaking, and facilitation",
    reliedOn: "Implementing and spitballing ideas.",
    energy: "Intriguing work that requires critical thinking.",
    growth: "Improving one-on-one communication and improvisation while speaking.",
    fact: "First got into computer science by learning Java and Python.",
    linkedIn: "https://www.linkedin.com/in/kyle-q-le/\n"
  },
  {
    group: "Student committee",
    name: "Aneesh",
    affiliation: "Cal State East Bay",
    //photo: "assets/team/.jpeg",
    major: "Computer Science",
    year: "Senior",
    strengths: "Creative, adaptable, analytical",
    skills: "Programming, hardware and electronics, public speaking, volunteer outreach, research, information organization, technical problem-solving, and idea development",
    reliedOn: "Researching unfamiliar topics, organizing information, handling deep technical work, and thinking of potential ideas and solutions.",
    energy: "Researching new topics, working on technical projects, completing repetitive tasks, organizing information, and developing solutions to complex problems.",
    growth: "Improving my ability to lead complex, long-term projects by developing stronger planning, sustained collaboration, and project management skills.",
    fact: "I love rhythm games and am working on a score tracker for one!",
    linkedIn: "https://www.linkedin.com/in/aneeshpradhan/"
  },
  {
    group: "Student committee",
    name: "Derek Du",
    affiliation: "Cal State East Bay",
    photo: "assets/team/derek-du.webp",
    major: "Computer Science",
    year: "Senior",
    strengths: "Reliable, analytical, detail-oriented",
    skills: "Programming, app development, UI/UX design, event planning, project management, logistics, documentation, social media, graphic design, facilitation, mentoring, and networking",
    reliedOn: "Troubleshooting and finding the next steps.",
    energy: "Work where he can figure things out through trial and error.",
    growth: "Becoming more confident speaking up and sharing ideas.",
    fact: "Performed at the 2015 Cure Bowl halftime show as part of the SJSU Marching Band.",
    linkedIn: "https://www.linkedin.com/in/derek-du/\n"

  },
  {
    group: "Student committee",
    name: "Aaron Nguyen",
    affiliation: "Planning Committee",
    photo: "assets/team/aaron-nguyen.webp",
    major: "Data Science",
    year: "Second year",
    strengths: "Strategic thinker, detail-oriented, relationship builder",
    skills: "Programming, project management, documentation, photography, recruiting, facilitation, and outreach coordination",
    reliedOn: "Organized communication and plan implementation.",
    energy: "Hands-on, team-oriented work.",
    growth: "Organizing his thoughts more clearly when he is excited about an idea.",
    fact: "Loves rock climbing and has an identical twin.",
    linkedIn: "https://www.linkedin.com/in/aaron-nguyen22?utm_source=share_via&utm_content=profile&utm_medium=member_ios\n"

  },
  {
    group: "Student committee",
    name: "K. Chan",
    affiliation: "Diablo Valley College"
  },
  {
    group: "Student committee",
    name: "Julian Ballen",
    affiliation: "Skyline College",
    photo: "assets/team/julian-ballen.webp",
    major: "Computer Science",
    strengths: "Disciplined, fast learner, creative",
    skills: "Organization, logistics, bilingual communication in Spanish and English, networking, volunteering, social media, empathy, and teamwork",
    reliedOn: "Completing tasks on time.",
    energy: "Working with others and building momentum as ideas develop.",
    growth: "Building confidence in public speaking and learning to organize and lead large events.",
    fact: "Enjoys LEGO, can solve a 3×3 Rubik’s Cube, and loves trigonometry and calculus.",
    linkedIn: "https://www.linkedin.com/in/julian-ballen-8688b937b/\n"
  },
  {
    group: "Student committee",
    name: "Stephanie Burciaga",
    affiliation: "Chabot College",
    photo: "assets/stephanie.webp",
    major: "Computer Science, previously Graphic Design",
    year: "Second year in Computer Science",
    strengths: "Creative, organized, calm under pressure",
    skills: "Programming, web development, UI/UX design, and graphic design",
    reliedOn: "Staying on track and meeting deadlines.",
    energy: "Creative tasks and helping others.",
    growth: "Public speaking and giving presentations, especially for workshops.",
    fact: "Tries to read at least 30 books each year and once read almost 100."
  },
  {
    group: "Student committee",
    name: "Martin Fulgueras",
    affiliation: "Planning Committee",
    photo: "assets/team/martin-fulgueras.webp",
    major: "Mathematics",
    year: "Second year",
    strengths: "Creative, analytical, detail-oriented",
    skills: "Photography, data analysis, public speaking, project management, teaching, and event operations",
    reliedOn: "Keeping the team together.",
    energy: "Any work involving people.",
    growth: "Taking greater initiative and building confidence to lead large projects.",
    fact: "Played chess for nearly three years and reached a 1000 rating on Chess.com.",
    linkedIn: "https://www.linkedin.com/in/martin-fulgueras-19775a305/?skipRedirect=true\n"
  },
  {
    group: "Student committee",
    name: "David Calara",
    affiliation: "Planning Committee",
    major: "Statistics",
    year: "Third year at community college",
    strengths: "Community-oriented, creative, leader",
    skills: "Communication, logistics, social media, graphic design, leadership, and active listening",
    reliedOn: "Leadership and direction.",
    energy: "Talking and collaborating with friends.",
    growth: "Developing the communication skills needed to host a similar event for his student-led organization.",
    fact: "Collects anime figurines."
  },
  {
    group: "Advisors and campus partners",
    name: "Brandy Gibson",
    affiliation: "Diablo Valley College"
  },
  {
    group: "Advisors and campus partners",
    name: "Sean Rodriquez",
    affiliation: "Diablo Valley College",
    major: "Animation/Illustration",
    year: "Graduated",
    strengths: "Creative, organized, reliable",
    skills: "Event planning, communication, community engagement, and video editing",
    reliedOn: "Organizing and planning events and workshops.",
    energy: "Working with people and helping students.",
    growth: "Continuing to become a better leader.",
    fact: "Collects comics, draws and paints, and is a huge Star Wars fan."
  },
  {
    group: "Advisors and campus partners",
    name: "Denise Hum",
    affiliation: "Skyline College"
  },
  {
    group: "Advisors and campus partners",
    name: "Maria Rodriguez-Larrain",
    affiliation: "Chabot College"
  },
  {
    group: "Lead Organizers",
    name: "Travis Nelson",
    affiliation: "Cal State East Bay",
    photo: "assets/team/Travis.jpg",
    major: "Sociology B.A., Organization & Leadership M.A.",
    year: "Graduated",
    strengths: "Creative, public speaker, fast learner",
    skills: "Hardware and electronics, event planning, project management, logistics, budgeting, documentation, social media, video editing, community engagement, facilitation, mentoring, networking, and volunteer coordination",
    reliedOn: "Generating new ideas.",
    energy: "Anything involving people.",
    growth: "Becoming a better facilitator who develops student leaders.",
    fact: "Owns more than 500 complete LEGO sets and 250 pounds of loose LEGO.",
    linkedIn: "https://www.linkedin.com/in/tipsfromtravis/\n"

  },
  {
    group: "Lead Organizers",
    name: "Cherlyn Romarri",
    affiliation: "Cal State East Bay",
    photo: "assets/team/Cherlyn.jpg",
    major: "Mathematics M.A.",
    year: "Graduated",
    strengths: "Organized, Reliable, Detail-Oriented",
    skills: "Event Planning, Logistics, Communication, Documentation, Community Engagement, Mentoring, Data Analysis",
    reliedOn: "Organizing and planning",
    energy: "Keeping things organized and completing a to do list",
    growth: "I hope to become a better public speaker to larger groups (100+) of students. It is a skill I continue to work on.",
    fact: "I can solve a 3x3 Rubik's cube, and I have 4x4, 5x5, tetrahedron, and dodecahedron, which I still need to solve.",
    linkedIn: "https://www.linkedin.com/in/cherlyn-romarri/\n"


  }
];

function escapeHtml(value = "") {
  return value.replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[character]);
}

function initials(name) {
  return name
    .split(/\s+/)
    .filter(part => part && part !== "K.")
    .slice(0, 2)
    .map(part => part[0])
    .join("")
    .toUpperCase() || "KC";
}

function photoMarkup(member, className = "") {
  if (member.photo) {
    return `<img class="${className}" src="${escapeHtml(member.photo)}" alt="${escapeHtml(member.name)}" loading="lazy">`;
  }
  return `<div class="member-placeholder ${className}" aria-hidden="true">${initials(member.name)}</div>`;
}

function renderTeam() {
  const grid = document.getElementById("team-grid");
  if (!grid) return;

  let currentGroup = "";
  grid.innerHTML = members.map((member, index) => {
    const heading = member.group !== currentGroup
      ? `<h3 class="team-group-heading">${escapeHtml(member.group)}</h3>`
      : "";
    currentGroup = member.group;

    return `${heading}
      <article class="member-card">
        <button class="member-trigger" type="button" data-member-index="${index}" aria-label="View ${escapeHtml(member.name)}'s profile">
          <div class="member-photo">
            ${photoMarkup(member)}
            <span class="profile-hint">View profile</span>
          </div>
          <div class="member-summary">
            <h3>${escapeHtml(member.name)}</h3>
            <p>${escapeHtml(member.affiliation)}</p>
          </div>
        </button>
      </article>`;
  }).join("");
}

function profileField(label, value, wide = false) {
  if (!value) return "";
  return `
    <div class="profile-field ${wide ? "profile-field-wide" : ""}">
      <dt>${escapeHtml(label)}</dt>
      <dd>${escapeHtml(value)}</dd>
    </div>`;
}

function openMemberProfile(member) {
  const dialog = document.getElementById("member-dialog");
  const content = document.getElementById("dialog-content");
  if (!dialog || !content) return;

  const cleanLinkedIn = member.linkedIn ? member.linkedIn.trim() : null;
  const hasProfile = Boolean(member.major || member.strengths || member.skills);
  content.innerHTML = `
    <div class="dialog-profile">
      <div class="dialog-photo">${photoMarkup(member)}</div>
      <div>
        <h2 id="dialog-name">${escapeHtml(member.name)}</h2>
        <p class="dialog-meta">${escapeHtml(member.affiliation)}</p>
        ${hasProfile ? `
          <dl class="profile-fields">
            ${profileField("Major", member.major)}
            ${profileField("Year", member.year)}
            ${profileField("Top strengths", member.strengths, true)}
            ${profileField("Skills", member.skills, true)}
            ${profileField("People rely on me for", member.reliedOn, true)}
            ${profileField("Work that gives me energy", member.energy, true)}
            ${profileField("Leadership goal", member.growth, true)}
            ${profileField("Fun fact", member.fact, true)}
            ${cleanLinkedIn ? `<dd class="profile-linkedin-field"><a href="${escapeHtml(cleanLinkedIn)}" target="_blank" rel="noopener noreferrer" class="linkedin-btn">LinkedIn</a></dd>` : ""}
          </dl>
        ` : `
          <div class="profile-empty">
            This committee member's full leadership profile is coming soon.
          </div>
        `}
      </div>
    </div>`;

  dialog.showModal();
  document.body.classList.add("dialog-open");
}

function closeMemberProfile() {
  const dialog = document.getElementById("member-dialog");
  if (dialog?.open) dialog.close();
  document.body.classList.remove("dialog-open");
}

function setupNavigation() {
  const toggle = document.querySelector(".menu-toggle");
  const links = document.getElementById("nav-links");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    toggle.setAttribute("aria-label", open ? "Open navigation" : "Close navigation");
    links.classList.toggle("open", !open);
  });

  links.addEventListener("click", event => {
    if (!event.target.closest("a")) return;
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation");
    links.classList.remove("open");
  });
}

function setupFaq() {
  document.querySelectorAll(".faq-item > button").forEach(button => {
    button.addEventListener("click", () => {
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
    });
  });
}

function setupGallery() {
  const button = document.getElementById("gallery-toggle");
  const gallery = document.querySelector(".gallery-grid");
  if (!button || !gallery) return;

  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    button.textContent = expanded ? "View more moments" : "Show fewer moments";
    gallery.classList.toggle("expanded", !expanded);
  });
}

function updateCountdown() {
  const eventTime = new Date("2026-09-25T09:00:00-07:00").getTime();
  const remaining = Math.max(0, eventTime - Date.now());
  const days = Math.floor(remaining / 86_400_000);
  const hours = Math.floor((remaining % 86_400_000) / 3_600_000);
  const minutes = Math.floor((remaining % 3_600_000) / 60_000);
  const seconds = Math.floor((remaining % 60_000) / 1000);
  const dayElement = document.getElementById("days");
  const hourElement = document.getElementById("hours");
  const minuteElement = document.getElementById("minutes");
  const secondElement = document.getElementById("seconds");

  if (!dayElement || !hourElement || !minuteElement || !secondElement) return;

  dayElement.textContent = String(days);
  hourElement.textContent = String(hours).padStart(2, "0");
  minuteElement.textContent = String(minutes).padStart(2, "0");
  secondElement.textContent = String(seconds).padStart(2, "0");
}

document.addEventListener("DOMContentLoaded", () => {
  updateCountdown();
  window.setInterval(updateCountdown, 1000);

  if (typeof renderTeam === "function") renderTeam();
  if (typeof setupNavigation === "function") setupNavigation();
  if (typeof setupFaq === "function") setupFaq();
  setupGallery();

  const grid = document.getElementById("team-grid");
  grid?.addEventListener("click", event => {
    const trigger = event.target.closest("[data-member-index]");
    if (!trigger || typeof members === "undefined") return;
    openMemberProfile(members[Number(trigger.dataset.memberIndex)]);
  });

  const dialog = document.getElementById("member-dialog");
  document.querySelector(".dialog-close")?.addEventListener("click", closeMemberProfile);
  dialog?.addEventListener("click", event => {
    if (event.target === dialog) closeMemberProfile();
  });
  dialog?.addEventListener("close", () => document.body.classList.remove("dialog-open"));
});
