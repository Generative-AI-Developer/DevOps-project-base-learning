#!/bin/bash
# Instant grade for your current project (or a named one).
#
#   bash grade.sh                 # grades your current unlocked project
#   bash grade.sh linux-beginner-01   # grades a specific project
#
# It runs the matching checker in scripts/checks/ and prints ✅ / ❌ and a
# grade for the parts a script can test. Works offline. No Claude needed.
#
# For the FULL official grade (including your written explanation and any
# open-ended parts), submit to Claude:  say "I submit <project name>".

cd "$(dirname "$0")" || exit 1
NAME="$1"

if [ -z "$NAME" ]; then
  NAME="$(node -e '
    const p=require("./progress.json");
    let found="";
    for (const [tk,t] of Object.entries(p.tracks)) {
      for (const [lv,l] of Object.entries(t.levels)) {
        const groups = l.exams ? Object.entries(l.exams) : [[null,l]];
        for (const [code,o] of groups) {
          for (const [id,pr] of Object.entries(o.projects||{})) {
            if (!found && ["unlocked","in_progress","failed"].includes(pr.status)) {
              const nn = id.replace("project-","");
              found = code ? code+"-"+nn : tk+"-"+lv+"-"+nn;
            }
          }
        }
      }
    }
    process.stdout.write(found);
  ' 2>/dev/null)"
fi

if [ -z "$NAME" ]; then
  echo "Could not find your current project. Pass one, e.g.: bash grade.sh linux-beginner-01"
  exit 1
fi

SCRIPT="scripts/checks/${NAME}.sh"
if [ -f "$SCRIPT" ]; then
  bash "$SCRIPT"
else
  echo "No instant-grade script yet for: ${NAME}"
  echo ""
  echo "That is normal — I build a checker for each project when you START it."
  echo "For now you can:"
  echo "  1) Self-check with the project's 'Acceptance criteria' + 'Verification checklist' (in course.html)."
  echo "  2) Submit to Claude for the full grade:  say \"I submit ${NAME}\"."
fi
