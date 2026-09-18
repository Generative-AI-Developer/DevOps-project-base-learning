---
id: linux-intermediate-study-text-processing
track: linux
level: intermediate
topic: Text processing with grep, sed, and awk
forProject: linux-intermediate-project-06
---

# Study: Text Power Tools — grep, sed, awk

> **Words to know**
> - **grep** — find lines that match a pattern.
> - **sed** — change text (find and replace).
> - **awk** — pull out columns and do small calculations.
> - **pipe `|`** — send the output of one command into the next.

## 1. Easy explanation (simple → deeper)
Linux work is full of text: logs, config files, command output. Three tools make you fast:
1. **grep** — *find* lines.
2. **sed** — *change* lines.
3. **awk** — *pick columns* and count.

You join them with a **pipe** `|`. In simple words: the pipe sends text from one tool to the next.

## 2. Key concepts and terms
- **grep:** `grep "word" file` → lines with "word". `-i` ignore case, `-v` invert (lines WITHOUT), `-c` count, `-n` line numbers.
- **sed:** `sed 's/old/new/g' file` → replace "old" with "new" (g = every match on the line).
- **awk:** `awk '{print $1}'` → print column 1. `awk -F: '{print $1}'` → use `:` as the separator.

## 3. Practical examples
- Find users → `grep "bash" /etc/passwd`
- Replace text → `sed 's/error/ERROR/g' app.log`
- Print first column → `awk '{print $1}' file.txt`
- Usernames from passwd → `awk -F: '{print $1}' /etc/passwd`
- Count lines with "fail" → `grep -c fail app.log`

## 4. Commands and config examples
```bash
# top 5 IPs in a web log (a classic one-liner)
awk '{print $1}' access.log | sort | uniq -c | sort -nr | head -5

# replace a word in a file and save to a new file
sed 's/localhost/127.0.0.1/g' config.txt > config-new.txt

# show only usernames and their home folders
awk -F: '{print $1, $6}' /etc/passwd
```

## 5. Hands-on exercises
1. From `/etc/passwd`, print only the usernames (column 1, separator `:`).
2. In any text file, replace one word using `sed` and save to a new file.
3. Make a small file of words and count how many lines contain a chosen word with `grep -c`.

## 6. Troubleshooting
- **Problem:** `sed` did not change the real file.
  **Fix:** `sed` prints to the screen by default. Save with `>` to a new file, or use `sed -i` to edit in place (careful!).
- **Problem:** awk prints nothing.
  **Fix:** wrong column number or wrong `-F` separator. Check the file's format.

## 7. Common mistakes and how to avoid them
- Forgetting `g` in sed — only the first match per line changes.
- Using `sed -i` without a backup — you can lose data. Test without `-i` first.

## 8. Certification notes (what the exam wants)
- These tools are gold in the exams. You filter logs and pull fields fast.
- The pattern `sort | uniq -c | sort -nr` (count and rank) is very common.

## 9. Practice questions and tasks
1. Which tool replaces text?
2. How do you print column 1 using `:` as the separator?
3. What does the pipe `|` do?

## 10. References
- grep/sed/awk overview: https://www.gnu.org/software/gawk/manual/ (checked: 2026-09-18)
- Video: **freeCodeCamp.org** — "sed and awk" — https://www.youtube.com/c/Freecodecamp (checked: 2026-09-18)

---
**Remember:** grep finds, sed changes, awk picks columns, and `|` joins them. Together they are super fast.

<details><summary>Answers</summary>

1. `sed`.
2. `awk -F: '{print $1}'`.
3. Sends the output of one command as input to the next.
</details>
