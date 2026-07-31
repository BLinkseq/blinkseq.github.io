---
title: Bead-barcoded Linked-read Sequencing
sidebar:
  label: What is BLink-seq
  order: 2
---

We call it BLink-seq and it's a genomic sample preparation method to create [linked-read](info/linkedreads) data.
The technology relies on biotinilated magnetic beads coated in combinatorial barcodes (BLink-beads) as the substrate
on which to perform tagmentation (fragment + tag). The reaction first binds DNA to the beads, then
enzymes fragment the DNA and add a molecular barcode to the sheared DNA. Since each BLink-bead is covered in
a unique combinatorial barcode, all the DNA fragments produced from a single source molecule wrapped around
a bead will get the same barcode attached to it.

## Why this matters
After the DNA gets sequenced, reads that have the same molecular barcode can be inferred as having originated
from the same source long DNA molecule. As a result, you can get short-read cost, throughput, and accuracy,
and with the kind of long-range information you would get from significantly costlier and less accurate long-read data.

:::tip
Another way of thinking about it is you're chemically subsampling what
would be a long-read molecule.
:::

## Applications
BLink-seq provides the same benefits as other linked-read technologies:
- improved genome assembly or scaffolding
- better metagenome assembly
- significantly improved direct haplotype phasing (vs regular short reads)
  - "direct" meaning you don't need parent-offspring trios
- structural variant detection
- barcode-aware alignment
  - tends to align better in repeat regions

## Why BLink-seq?
Linked-read sequencing is a relatively recent innovation, first commercialized by 10X Genomics in 2016.
Although the technology generated a lot of excitement and saw rapid adoption, it was discontinued in
2019 following patent litigation. Since then, new commercial platforms such as stLFR and TELLseq have emerged,
but we believe linked-read technology should be **accessible**, reproducible, and collaborative.

BLink-seq was created with those principles in mind. Rather than treating linked-read sequencing as a proprietary
technology, we aim to empower researchers through comprehensive documentation, clear and human-readable protocols,
and hands-on collaboration. Our goal is to make it possible for any laboratory to produce its own BLink-beads and
prepare high-quality linked-read libraries.

We also want to help linked-read sequencing reach its full potential as a research tool. That's why we advocate for
a [standardized linked-read data format](https://blinkseq.github.io/lastq), develop [chemistry-agnostic software](https://pdimens.github.io/harpy)
that works across linked-read technologies, and provide educational resources for understanding, analyzing, and
reporting linked-read-specific metrics.

We believe that open science benefits everyone. By making our chemistry, software, protocols, and educational 
resources freely available, we hope to lower barriers to adoption and help build a stronger, more collaborative
linked-read community.
