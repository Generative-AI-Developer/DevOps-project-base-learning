#!/bin/bash
# Instant grade — Linux Beginner Project 1 ("Move Around Linux").
# Run from the repo root (grade.sh does this for you):  bash grade.sh

pass=0; total=0; fixes=()
check() {  # check "name" "test command" "fix hint"
  total=$((total+1))
  if eval "$2" >/dev/null 2>&1; then
    echo "  ✅ $1"; pass=$((pass+1))
  else
    echo "  ❌ $1"; fixes+=("$3")
  fi
}

echo "=== GRADING: Linux Beginner Project 1 ==="
echo "Testable parts (a script can check these):"

check "Folder ~/linux-lab exists" \
      "[ -d \"$HOME/linux-lab\" ]" \
      "Make it:  mkdir -p ~/linux-lab && cd ~/linux-lab"

check "Evidence saved in submissions/linux/beginner/project-01/" \
      "[ -n \"\$(ls -A ./submissions/linux/beginner/project-01 2>/dev/null)\" ]" \
      "Save your commands + output to submissions/linux/beginner/project-01/output.txt"

check "Your user is in /etc/passwd (final challenge)" \
      "grep -q \"^$USER:\" /etc/passwd" \
      "Try:  grep \"^$USER\" /etc/passwd"

pct=$(( total>0 ? pass*100/total : 0 ))
echo ""
echo "  Auto-grade: ${pass}/${total} (${pct}%)"
echo ""
echo "👀 Self-check (a script cannot see your screen — you confirm these):"
echo "     - pwd showed your current folder"
echo "     - ls -l /etc showed files with details"
echo "     - cat /etc/hostname showed the file"
echo "     - head -n 5 /etc/passwd showed 5 lines"
echo "     - tail -n 3 /etc/passwd showed 3 lines"
echo ""

if [ "$pass" -eq "$total" ]; then
  echo "  VERDICT: PASS ✅ on the testable parts."
  echo "  If you also did the 5 look-tasks, submit to Claude for your official ✅:"
  echo "    say \"I submit Linux Beginner Project 1\"."
else
  echo "  VERDICT: NEEDS WORK ❌ — fix these, then run  bash grade.sh  again:"
  for f in "${fixes[@]}"; do echo "     • $f"; done
fi
