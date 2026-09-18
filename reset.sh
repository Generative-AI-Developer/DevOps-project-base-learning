#!/bin/bash
# Reset one project so you can redo it from the start.
#
#   bash reset.sh linux-beginner-02      # reset a specific project
#   bash reset.sh                        # reset your CURRENT project
#
# What it does:
#   - backs up your old submission (nothing is lost — saved under
#     submissions/.reset-backups/)
#   - sets that project back to ▶️ unlocked with a clean record
#   - does NOT change any other project
# Then it refreshes course.html and dashboard.html.

cd "$(dirname "$0")" || exit 1
NAME="$1"

# default to the current unlocked/in-progress project
if [ -z "$NAME" ]; then
  NAME="$(node -e '
    const p=require("./progress.json"); let f="";
    for (const [tk,t] of Object.entries(p.tracks))
      for (const [lv,l] of Object.entries(t.levels)){
        const g = l.exams ? Object.entries(l.exams) : [[null,l]];
        for (const [c,o] of g) for (const [id,pr] of Object.entries(o.projects||{}))
          if (!f && ["unlocked","in_progress","failed","submitted"].includes(pr.status)){
            const nn=id.replace("project-",""); f = c ? c+"-"+nn : tk+"-"+lv+"-"+nn;
          }
      }
    process.stdout.write(f);
  ' 2>/dev/null)"
fi

if [ -z "$NAME" ]; then
  echo "Usage: bash reset.sh <project>   e.g.  bash reset.sh linux-beginner-02"
  exit 1
fi

echo "This will reset: $NAME"
echo " - your old submission is BACKED UP (not deleted for good)"
echo " - the project goes back to ▶️ unlocked so you can redo it"
read -r -p "Continue? [y/N] " ans
case "$ans" in
  [yY]*) ;;
  *) echo "Cancelled. Nothing changed."; exit 0 ;;
esac

node scripts/reset.mjs "$NAME" || exit 1
node scripts/build-reader.mjs >/dev/null
node scripts/build-dashboard.mjs >/dev/null
echo "Refreshed course.html + dashboard.html. Reopen them to see ▶️."
