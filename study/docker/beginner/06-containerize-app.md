---
id: docker-beginner-study-containerize-app
track: docker
level: beginner
topic: Containerize a simple application
forProject: docker-beginner-project-06
---

# Study: Containerize a Simple App

> **Words to know**
> - **Containerize** — put an app into a Docker image so it runs anywhere.
> - **Dependencies** — extra code the app needs to run.
> - **`.dockerignore`** — a file that tells Docker which files to skip.
> - **Port mapping** — connecting the app's port to your machine.

## 1. Easy explanation (simple → deeper)
Now you put a **real (small) app** into a container. The steps are always the same:
1. Write the app.
2. Write a Dockerfile: base image → copy files → install dependencies → set the start command.
3. Build the image.
4. Run it and test it.

We use a tiny web app so the focus stays on Docker, not on coding.

## 2. Key concepts and terms
- **`.dockerignore`** — skip files like `node_modules` or `.git` so the image stays small.
- **Order matters:** copy dependency files and install **before** copying all code (for caching).
- **`CMD`** — the command that starts your app.
- **`EXPOSE`** — documents the port (you still publish with `-p` when running).

## 3. Practical examples
A tiny Python web app:
```python
# app.py
from http.server import HTTPServer, BaseHTTPRequestHandler

class H(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.end_headers()
        self.wfile.write(b"Hello from my container app!\n")

HTTPServer(("0.0.0.0", 8000), H).serve_forever()
```
```dockerfile
# Dockerfile
FROM python:3.12-slim
WORKDIR /app
COPY app.py .
EXPOSE 8000
CMD ["python", "app.py"]
```
```bash
docker build -t helloapp:v1 .
docker run -d -p 8000:8000 --name helloapp helloapp:v1
curl http://localhost:8000
```

## 4. Commands and config examples
```bash
# .dockerignore
__pycache__/
*.pyc
.git
```

## 5. Hands-on exercises
1. Make the `app.py` above.
2. Write the Dockerfile.
3. Build, run, and `curl` it.
4. Add a `.dockerignore`.

## 6. Troubleshooting
- **Problem:** app not reachable.
  **Fix:** the app must listen on `0.0.0.0` (not `127.0.0.1`) inside the container. And publish the port with `-p`.
- **Problem:** container exits at once.
  **Fix:** check `docker logs`. The `CMD` may be wrong, or the app crashed.

## 7. Common mistakes and how to avoid them
- App listens on `127.0.0.1` inside the container — then it is not reachable. Use `0.0.0.0`.
- No `.dockerignore` — the image includes junk and gets big.
- Forgetting to publish the port.

## 8. Certification notes (what the exam wants)
- **CKAD** "Application Design & Build": you must package an app and run it. This project is exactly that skill.
- Later you deploy this same idea as a Pod in Kubernetes.

## 9. Practice questions and tasks
1. Why must the app listen on `0.0.0.0` inside a container?
2. What is `.dockerignore` for?
3. Which instruction starts the app?

## 10. References
- Docker language guides: https://docs.docker.com/language/ (checked: 2026-09-18)
- Video: **TechWorld with Nana** — "Dockerize an app" — https://www.youtube.com/@TechWorldwithNana (checked: 2026-09-18)

---
**Remember:** App → Dockerfile → build → run → test. Listen on `0.0.0.0`. Keep the image small.

<details><summary>Answers</summary>

1. So it accepts connections from outside the container, not just from inside it.
2. To skip files (like caches or `.git`) so the image stays small and clean.
3. `CMD`.
</details>
