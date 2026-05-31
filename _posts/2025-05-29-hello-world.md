---
title: "Hello, World"
date: 2025-05-29
tags: [meta]
---

A first post to confirm that the blog infrastructure works end-to-end.

## Math

Inline: the Euler–Lagrange equation is $\frac{\partial L}{\partial q} - \frac{d}{dt}\frac{\partial L}{\partial \dot{q}} = 0$.

Display:

$$
i\hbar \frac{\partial}{\partial t}|\psi(t)\rangle = \hat{H}|\psi(t)\rangle
$$

## Code

```python
import numpy as np

def variational_energy(psi, H):
    return np.real(psi.conj() @ H @ psi) / np.real(psi.conj() @ psi)
```

## Adding a new post

Drop a Markdown file into `_posts/` named `YYYY-MM-DD-your-title.md` with the front matter:

```yaml
---
title: "Your Title"
date: 2025-06-01
tags: [tag1, tag2]
---
```

GitHub Pages builds it automatically. No deploy step needed.
