---
title: "Hello, AI + Bio World"
date: 2026-08-08
tags: ["intro", "deep-learning", "bioinformatics"]
category: "AI"
summary: "Welcome to this blog! A space for exploring the fascinating intersection of artificial intelligence and biology."
lang: zh-CN
math: true
---

## Welcome 👋

你好！欢迎来到 **AI + Bio** 博客。

这里是探索人工智能与生物学交叉领域的前沿进展、技术笔记与思考的空间。无论你是对蛋白质结构预测感兴趣，还是关注基因组语言模型的最新进展，希望你能在这里找到有价值的内容。

## Why AI + Bio?

近年来，AI 正在深刻改变生物学研究的方式：

- **AlphaFold** 系列彻底改变了蛋白质结构预测领域
- **大语言模型（LLMs）** 被应用于 DNA/RNA 序列建模
- **单细胞组学** 与深度学习的结合带来新的生物学发现
- **生成式 AI** 在蛋白质设计、药物分子生成中展现巨大潜力

这个博客将记录我的学习、研究和思考过程。

## A Math Example: KL Divergence

模型的损失函数经常使用 KL 散度：

$$
D_{KL}(P \parallel Q) = \sum_{x} P(x) \log \frac{P(x)}{Q(x)}
$$

对于连续分布：

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
