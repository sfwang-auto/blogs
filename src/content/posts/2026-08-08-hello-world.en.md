---
title: "Hello, AI + Bio World"
date: 2026-08-08
tags: ["intro", "deep-learning", "bioinformatics"]
category: "AI"
summary: "Welcome to this blog! A space for exploring the fascinating intersection of artificial intelligence and biology."
lang: "en"
math: true
---

## Welcome 👋

Hello! Welcome to **AI + Bio** — a blog at the intersection of artificial intelligence and biology.

Here you'll find frontier advances, technical notes, and reflections on how AI is reshaping our understanding of life sciences. Whether you're interested in protein structure prediction or genomic language models, I hope you find something valuable here.

## Why AI + Bio?

In recent years, AI has been profoundly changing how we do biology:

- **AlphaFold** revolutionized protein structure prediction
- **Large Language Models (LLMs)** are being applied to DNA/RNA sequence modeling
- **Single-cell omics** combined with deep learning bring new biological discoveries
- **Generative AI** shows enormous potential in protein design and drug molecule generation

This blog documents my learning, research, and thinking along the way.

## A Math Example: KL Divergence

Many model loss functions use KL divergence:

$$
D_{KL}(P \parallel Q) = \sum_{x} P(x) \log \frac{P(x)}{Q(x)}
$$

For continuous distributions:

$$
D_{KL}(P \parallel Q) = \int p(x) \log \frac{p(x)}{q(x)} dx
$$

## Code Example: Loading a Protein Structure

```python
import biotite.structure.io as bsio
from biotite.structure.io.pdb import PDBFile

# Load PDB file
pdb_file = PDBFile.read("1ubq.pdb")
structure = pdb_file.get_structure(include_bonds=True)

# Filter alpha carbons
ca = structure[structure.atom_name == "CA"]
print(f"Residues: {len(ca)}, Atoms: {len(structure)}")
```

## What's Next?

Stay tuned for deep dives into:

1. **Protein Language Models** — From ESM to ProGen
2. **Geometric Deep Learning** — Graph neural networks for molecular structures
3. **Diffusion Models** — RFdiffusion, FrameBuilder and beyond
4. **Single-cell Foundation Models** — scGPT, Geneformer, scFoundation

---

*Let's explore the code of life, together.* 🧬
